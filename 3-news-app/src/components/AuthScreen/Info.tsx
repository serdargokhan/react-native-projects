import { Flex, Pressable, Text } from "native-base";

interface InfoProps {
    info: string;
    infoButtonText: string;
    onPress: () => void;
}

function Info({ info, infoButtonText, onPress }: InfoProps) {
    return (
        <Flex direction="row" justify="center" mt="4">
            <Text>{info}</Text>
            <Pressable onPress={onPress}>
                <Text color="primary.100" fontWeight="bold" ml="3">
                    {infoButtonText}
                </Text>
            </Pressable>
        </Flex>
    );
}

export default Info;
