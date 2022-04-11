import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Info from "../components/Info";
// Components
import InputWrapper from "../components/InputWrapper";
import LayoutWrapper from "../components/LayoutWrapper";
// Styles
import { styles } from "../styles/SignScreens";

function SignInScreen() {
    return (
        <LayoutWrapper>
            <Text style={styles.headerText}>Sign in</Text>
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
            <Info infoText="Remember me" />
            <View style={styles.buttonContainer}>
                <CustomButton title="Sign in account" />
            </View>
        </LayoutWrapper>
    );
}

export default SignInScreen;
