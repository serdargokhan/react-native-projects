import { Box } from "native-base";

interface ToastProps {
    description: string;
    bgColor: string;
}

function ToastWrapper({ description, bgColor }: ToastProps) {
    return (
        <Box bg={bgColor} px="4" py="3" rounded="md" mt={5}>
            {description}
        </Box>
    );
}

export default ToastWrapper;
