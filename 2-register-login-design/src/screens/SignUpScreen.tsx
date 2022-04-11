import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Info from "../components/Info";
// Components
import InputWrapper from "../components/InputWrapper";
import LayoutWrapper from "../components/LayoutWrapper";
// Styles
import { styles } from "../styles/SignScreens";

function SignUpScreen() {
    return (
        <LayoutWrapper>
            <Text style={styles.headerText}>Create an account</Text>
            <InputWrapper
                label="Email address"
                iconName="mail"
                placeholder="Enter your email address"
                secureTextEntry={false}
            />
            <InputWrapper
                label="Password"
                iconName="unlock"
                placeholder="Enter your password"
                secureTextEntry={true}
            />
            <Info infoText="I agree to the terms and conditions" />
            <View style={styles.buttonContainer}>
                <CustomButton title="Create account" />
            </View>
        </LayoutWrapper>
    );
}

export default SignUpScreen;
