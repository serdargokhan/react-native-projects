import { Text, TouchableOpacity } from "react-native";
// Icons
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../styles/CustomButton";

interface ButtonProps {
    title: string;
}

function CustomButton({ title }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.85}>
            <Text style={styles.title}>{title}</Text>
            <AntDesign name="right" size={20} color="white" />
        </TouchableOpacity>
    );
}

export default CustomButton;
