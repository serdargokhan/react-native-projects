import { Input } from "native-base";

interface Props {
    rightIcon?: JSX.Element;
    leftIcon?: JSX.Element;
    placeholder: string;
    onChangeText: (text: string) => void;
    onBlur?: () => void;
    secureTextEntry?: boolean;
    value?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
}

function CustomInput({
    rightIcon,
    leftIcon,
    placeholder,
    onChangeText,
    secureTextEntry,
    value,
    isInvalid,
    isDisabled,
    onBlur,
}: Props) {
    return (
        <Input
            mx="8"
            mb="4"
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            placeholder={placeholder}
            fontSize="md"
            secureTextEntry={secureTextEntry}
            size="2xl"
            variant="outline"
            borderRadius="2xl"
            backgroundColor="gray.100"
            InputRightElement={rightIcon}
            InputLeftElement={leftIcon}
            onChangeText={(text) => onChangeText(text)}
            onBlur={onBlur}
        />
    );
}

export default CustomInput;
