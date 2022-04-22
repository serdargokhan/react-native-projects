import { useEffect, useState } from "react";
import { Box, Icon, useToast } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
// Firebase
import { app } from "../lib/firebase";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";
// Form
import { useForm } from "react-hook-form";
// Assets
import SignupSVG from "../../assets/SignupSVG";
// Icons
import { FontAwesome5 } from "@expo/vector-icons";
// Components
import Header from "../components/AuthScreen/Header";
import CustomButton from "../utils/CustomButton";
import Info from "../components/AuthScreen/Info";
import NameController from "../components/AuthScreen/NameController";
import EmailController from "../components/AuthScreen/EmailController";
import PasswordController from "../components/AuthScreen/PasswordController";
import ToastWrapper from "../utils/ToastWrapper";
// Types
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
// AsyncStorage
import { getStoredData } from "../lib/storage";
// Context
import { useUser } from "../context/UserContext";

interface FormData {
    name: string;
    email: string;
    password: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "Sign up">;

function SignupScreen({ navigation }: Props) {
    const [name, setName] = useState("");
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
            name: "",
            email: "",
            password: "",
        },
    });

    const disableButton =
        loading || errors.email || errors.name || errors.password
            ? true
            : false;

    const onSubmit = (data: FormData) => {
        setEmail(data.email);
        setPassword(data.password);
        setName(data.name);
        setSubmit(true);
    };

    const { setUser } = useUser();

    const auth = getAuth(app);

    const toast = useToast();

    useEffect(() => {
        // Get uid from AsycnStorage
        const storage = getStoredData();
        storage.then((uid) => {
            if (uid) {
                navigation.replace("Home");
                onAuthStateChanged(auth, (user) => {
                    setUser(user);
                });
            }
        });

        if (!submit) return;
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, { displayName: name });
                toast.show({
                    placement: "top",
                    render: () => {
                        return (
                            <ToastWrapper
                                description="You signed up successfully!"
                                bgColor="emerald.500"
                            />
                        );
                    },
                });
            })
            .catch((err) => {
                if (
                    err.message ===
                    "Firebase: Error (auth/email-already-in-use)."
                ) {
                    toast.show({
                        placement: "top",
                        render: () => {
                            return (
                                <ToastWrapper
                                    description="This email already in use."
                                    bgColor="red.500"
                                />
                            );
                        },
                    });
                } else {
                    toast.show({
                        placement: "top",
                        render: () => {
                            return (
                                <ToastWrapper
                                    description="Something went wrong."
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
                reset({ name: "", email: "", password: "" });
            });
    }, [submit]);

    return (
        <SafeAreaView>
            <Box h="full" justifyContent="center">
                <Header
                    title="Create new account"
                    info="Please fill the form to continue"
                >
                    <SignupSVG />
                </Header>

                <NameController
                    control={control}
                    loading={loading}
                    errors={errors}
                />
                <EmailController
                    control={control}
                    errors={errors}
                    loading={loading}
                />
                <PasswordController
                    control={control}
                    errors={errors}
                    loading={loading}
                />

                <CustomButton
                    title="Sign up"
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
                    info="Already have an account?"
                    infoButtonText="Sign in"
                    onPress={() => navigation.replace("Sign in")}
                />
            </Box>
        </SafeAreaView>
    );
}

export default SignupScreen;
