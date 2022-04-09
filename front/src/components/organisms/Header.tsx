import { Flex, Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
    return (
        <Flex as="nav" bg="teal" align="center" mx="auto" maxW="95%">
            <Flex
                fontSize={{ base: "md", md: "xl" }}
                mx={{ base: "1", md: "2" }}
                my={4}
            >
                <Heading>ToDo</Heading>
            </Flex>
        </Flex>
    );
});
