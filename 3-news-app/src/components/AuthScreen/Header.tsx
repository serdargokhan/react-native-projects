import { Flex, Text } from "native-base";
// Types
import { ReactNode } from "react";

interface HeaderProps {
    title: string;
    info: string;
    children: ReactNode;
}

function Header({ title, info, children }: HeaderProps) {
    return (
        <>
            <Flex align="center" maxH="1/2">
                {children}
            </Flex>
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                {title}
            </Text>
            <Text
                textAlign="center"
                color="gray.500"
                fontWeight="semibold"
                mb="12"
            >
                {info}
            </Text>
        </>
    );
}

export default Header;
