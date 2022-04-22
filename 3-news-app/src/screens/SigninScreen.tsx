import { Box, Icon, useToast } from "native-base";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// Form
import { useForm } from "react-hook-form";
// Firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../lib/firebase";
// Assets
import SigninSVG from "../../assets/SigninSVG";
// Icons
import { FontAwesome5 } from "@expo/vector-icons";
// Components
import EmailController from "../components/AuthScreen/EmailController";
import Header from "../components/AuthScreen/Header";
import Info from "../components/AuthScreen/Info";
import PasswordController from "../components/AuthScreen/PasswordController";
import CustomButton from "../utils/CustomButton";
import ToastWrapper from "../utils/ToastWrapper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// Types
import { RootStackParamList } from "../../App";
// Storage
import { storeData } from "../lib/storage";
// Context
import { useUser } from "../context/UserContext";

interface FormData {
    email: string;
    password: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "Sign in">;

function SigninScreen({ navigation }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const disableButton =
        loading || errors.email || errors.password ? true : false;

    const onSubmit = (data: FormData) => {
        setEmail(data.email);
        setPassword(data.password);
        setSubmit(true);
    };

    const auth = getAuth(app);

    const toast = useToast();

    const { setUser } = useUser();

    useEffect(() => {
        if (!submit) return;
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                storeData(user.uid);
                setUser(user);
                toast.show({
                    placement: "top",
                    duration: 1500,
                    render: () => {
                        return (
                            <ToastWrapper
                                description="Signed in."
                                bgColor="emerald.500"
                            />
                        );
                    },
                });
                navigation.replace("Home");
            })
            .catch((err) => {
                console.log(err.message);
                if (err.message === "Firebase: Error (auth/wrong-password).") {
                    toast.show({
                        placement: "top",
                        render: () => {
                            return (
                                <ToastWrapper
                                    description="Wrong password."
                                    bgColor="red.500"
                                />
                            );
                        },
                    });
                }
                if (err.message === "Firebase: Error (auth/user-not-found).") {
                    toast.show({
                        placement: "top",
                        render: () => {
                            return (
                                <ToastWrapper
                                    description="User is not found."
                                    bgColor="red.500"
                                />
                            );
                        },
                    });
                }
            })
            .finally(() => {
                setLoading(false);
                setSubmit(false);
                reset({ email: "", password: "" });
            });
    }, [submit]);

    return (
        <SafeAreaView>
            <Box h="full" justifyContent="center">
                <Header
                    title="Sign in to your account"
                    info="Fill the form to discover the world"
                >
                    <SigninSVG />
                </Header>

                <EmailController
                    /* @ts-ignore */
                    control={control}
                    errors={errors}
                    loading={false}
                />
                <PasswordController
                    /* @ts-ignore */
                    control={control}
                    errors={errors}
                    loading={false}
                />

                <CustomButton
                    title="Sign in"
                    onPress={handleSubmit(onSubmit)}
                    isDisabled={disableButton}
                    isLoading={loading || false}
                    rightIcon={
                        <Icon
                            as={FontAwesome5}
                            name="chevron-circle-right"
                            ml={2}
                        />
                    }
                />

                <Info
                    info="Don't have an account?"
                    infoButtonText="Sign up"
                    onPress={() => navigation.replace("Sign up")}
                />
            </Box>
        </SafeAreaView>
    );
}

export default SigninScreen;
