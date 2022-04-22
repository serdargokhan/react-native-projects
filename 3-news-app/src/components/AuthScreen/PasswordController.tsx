import { Icon } from "native-base";
// Form
import { Control, Controller, FieldError } from "react-hook-form";
// Icons
import { FontAwesome5 } from "@expo/vector-icons";
// Components
import CustomInput from "../../utils/CustomInput";

interface FormData {
    name: string;
    email: string;
    password: string;
}

interface PasswordProps {
    control: Control<FormData, any> | undefined;
    errors: {
        password?: FieldError | undefined;
    };
    loading: boolean;
}

function PasswordController({ control, errors, loading }: PasswordProps) {
    return (
        <Controller
            control={control}
            rules={{ required: true, maxLength: 16, minLength: 6 }}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                    placeholder="Password"
                    isInvalid={errors.password ? true : false}
                    isDisabled={loading || false}
                    value={value}
                    secureTextEntry
                    rightIcon={
                        <Icon
                            as={FontAwesome5}
                            name="lock"
                            size={22}
                            color="gray.500"
                            mr={4}
                        />
                    }
                    onChangeText={onChange}
                    onBlur={onBlur}
                />
            )}
        />
    );
}

export default PasswordController;
