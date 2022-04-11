import { Text, TextInput, View } from "react-native";
// Icons
import { Feather } from "@expo/vector-icons";
// Styles
import { styles } from "../styles/InputWrapper";

interface InputProps {
    label: string;
    placeholder: string;
    secureTextEntry: boolean;
    iconName: "mail" | "unlock";
}

function InputWrapper({
    label,
    iconName,
    placeholder,
    secureTextEntry,
}: InputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry={secureTextEntry}
                    keyboardType="default"
                />
                <Feather name={iconName} size={24} color="gray" />
            </View>
        </View>
    );
}

export default InputWrapper;
