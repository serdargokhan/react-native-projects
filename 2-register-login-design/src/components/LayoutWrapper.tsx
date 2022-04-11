import { ReactNode } from "react";
import { Text, View } from "react-native";
// Styles
import { styles } from "../styles/LayoutWrapper";

interface LayoutProps {
    children: ReactNode;
}

function LayoutWrapper({ children }: LayoutProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Anywhere</Text>
            <View style={styles.contentWrapper}>{children}</View>
        </View>
    );
}

export default LayoutWrapper;
