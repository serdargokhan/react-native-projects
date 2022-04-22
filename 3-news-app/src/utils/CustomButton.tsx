import { Button, Text } from "native-base";

interface ButtonProps {
    isDisabled: boolean;
    isLoading: boolean;
    onPress: () => void;
    rightIcon: JSX.Element;
    title: string;
}

function CustomButton({
    isDisabled,
    isLoading,
    onPress,
    rightIcon,
    title,
}: ButtonProps) {
    return (
        <Button
            isDisabled={isDisabled}
            isLoading={isLoading}
            onPress={onPress}
            size="lg"
            backgroundColor="primary.100"
            mx="8"
            rounded="2xl"
            mt="4"
            py="3"
            rightIcon={rightIcon}
        >
            <Text fontSize="lg" color="white">
                {title}
            </Text>
        </Button>
    );
}

export default CustomButton;
