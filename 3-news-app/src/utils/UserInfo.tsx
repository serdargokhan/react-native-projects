import { Text } from "native-base";
// Date
import { whichDay } from "../lib/date";

interface UserNameProps {
    userName: string;
}

function UserInfo({ userName }: UserNameProps) {
    return (
        <>
            <Text fontSize="lg" fontWeight="bold" mt="3">
                Welcome back, {userName}
            </Text>
            <Text
                color="gray.600"
                fontSize="md"
                fontStyle="italic"
                pb="2"
            >{`${whichDay()}, ${new Date().getDate()}`}</Text>
        </>
    );
}

export default UserInfo;
