import { Flex, Skeleton } from "native-base";

function SkeletonBody() {
    return (
        <Flex
            direction="row"
            maxW="500px"
            mx="auto"
            align="center"
            mt="4"
            w="full"
        >
            <Skeleton.Text
                w="60%"
                fadeDuration={100}
                px="4"
                py="5"
                startColor="gray.400"
                endColor="gray.800"
            />
            <Skeleton
                rounded="2xl"
                startColor="gray.400"
                endColor="gray.800"
                h="120px"
                w="40%"
            />
        </Flex>
    );
}

function SkeletonWrapper() {
    return (
        <>
            <SkeletonBody />
            <SkeletonBody />
            <SkeletonBody />
            <SkeletonBody />
            <SkeletonBody />
        </>
    );
}

export default SkeletonWrapper;
