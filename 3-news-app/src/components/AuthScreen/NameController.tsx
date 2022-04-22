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

interface NameProps {
    control: Control<FormData, any> | undefined;
    errors: {
        name?: FieldError | undefined;
    };
    loading: boolean;
}

function NameController({ control, errors, loading }: NameProps) {
    return (
        <Controller
            control={control}
            rules={{ required: true, maxLength: 25 }}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
                <CustomInput
                    placeholder="Full Name"
                    value={value}
                    isInvalid={errors.name ? true : false}
                    isDisabled={loading || false}
                    rightIcon={
                        <Icon
                            as={FontAwesome5}
                            name="user-alt"
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

export default NameController;
