import { Icon } from "native-base";
// Form
import { Control, Controller, FieldError } from "react-hook-form";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Components
import CustomInput from "../../utils/CustomInput";

interface FormData {
    name: string;
    email: string;
    password: string;
}

interface EmailProps {
    control: Control<FormData, any> | undefined;
    errors: {
        email?: FieldError | undefined;
    };
    loading: boolean;
}

function EmailController({ control, errors, loading }: EmailProps) {
    return (
        <Controller
            control={control}
            rules={{
                required: true,
                maxLength: 25,
                pattern: /\S+@\S+\.\S+/,
            }}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                    placeholder="Email address"
                    isInvalid={errors.email ? true : false}
                    isDisabled={loading || false}
                    value={value}
                    rightIcon={
                        <Icon
                            as={MaterialIcons}
                            name="email"
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

export default EmailController;
