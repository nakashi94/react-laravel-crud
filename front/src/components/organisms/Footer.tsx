import {
    Box,
    chakra,
    Container,
    Flex,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { memo, ReactNode, VFC } from "react";

export const Footer: VFC = memo(() => {
    const SocialButton = ({
        children,
        label,
        href,
    }: {
        children: ReactNode;
        label: string;
        href: string;
    }) => {
        return (
            <chakra.button
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                rounded={"full"}
                w={8}
                h={8}
                cursor={"pointer"}
                as={"a"}
                href={href}
                display={"inline-flex"}
                alignItems={"center"}
                justifyContent={"center"}
                transition={"background 0.3s ease"}
                _hover={{
                    bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
                }}
            >
                <VisuallyHidden>{label}</VisuallyHidden>
                {children}
            </chakra.button>
        );
    };

    return (
        <Flex
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
            maxW="95%"
            align="center"
            mx="auto"
        >
            <Stack direction={"column"} spacing={6} mx="auto">
                <Container
                    as={Stack}
                    py={4}
                    spacing={4}
                    justify={"center"}
                    align={"center"}
                >
                    <Stack direction={"row"} spacing={6}>
                        <Link href={"#"}>Home</Link>
                        <Link href={"#"}>About</Link>
                        <Link href={"#"}>Blog</Link>
                        <Link href={"#"}>Contact</Link>
                    </Stack>
                </Container>

                <Box
                    borderTopWidth={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                >
                    <Container
                        as={Stack}
                        py={4}
                        direction={{ base: "column", md: "row" }}
                        spacing={4}
                        justify={{ base: "center", md: "space-between" }}
                        align={{ base: "center", md: "center" }}
                    >
                        <Text>© 2022 nakashi94</Text>
                        <Stack direction={"row"} spacing={6}>
                            <SocialButton label={"GitHub"} href={"#"}>
                                <FaGithub />
                            </SocialButton>
                            <SocialButton label={"Twitter"} href={"#"}>
                                <FaTwitter />
                            </SocialButton>
                        </Stack>
                    </Container>
                </Box>
            </Stack>
        </Flex>
    );
});
