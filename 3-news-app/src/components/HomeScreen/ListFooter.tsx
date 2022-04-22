import { Button, Flex, Text } from "native-base";

interface PageIndexProps {
    setPageIndex: React.Dispatch<React.SetStateAction<number>>;
    pageIndex: number;
}

function ListFooter({ setPageIndex, pageIndex }: PageIndexProps) {
    return (
        <Flex direction="row" justify="center" mb="12">
            <Button
                isDisabled={pageIndex < 2 ? true : false}
                onPress={() => setPageIndex((prev) => prev - 1)}
                rounded="lg"
                w="1/4"
                bg="primary.100"
            >
                <Text color="white">Previous</Text>
            </Button>
            <Button
                onPress={() => setPageIndex((prev) => prev + 1)}
                ml="4"
                rounded="lg"
                w="1/4"
                bg="primary.100"
            >
                <Text color="white">Next</Text>
            </Button>
        </Flex>
    );
}

export default ListFooter;
