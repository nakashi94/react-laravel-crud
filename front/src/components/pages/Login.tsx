import { memo, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Center, Grid, GridItem, Heading, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Login: VFC = memo(() => {
    const navigate = useNavigate();
    const onClickNavigate = () => {
        navigate("/tasks");
        console.log("tasks");
    };
    return (
        <>
            <Center bg="white" w="480px" h="560px" mx="auto" my={16} borderRadius="md" display="grid">
                <Grid
                    h="560px"
                    w="480px"
                    templateRows="repeat(10, 1fr)"
                    gap={8}
                >
                    <GridItem rowSpan={4} textAlign="center">
                        <Text fontSize="xl" color="black" mt={12}>
                            ToDo
                        </Text>
                        <Heading as="h2" size="lg" color="black" mt={8}>
                            ログイン
                        </Heading>
                    </GridItem>
                    <GridItem rowSpan={1} textAlign="center">
                        <Input w="80%" placeholder="メールアドレス" />
                    </GridItem>
                    <GridItem rowSpan={2} textAlign="center">
                        <Input w="80%" placeholder="パスワード" />
                    </GridItem>
                    <GridItem rowSpan={1} textAlign="center">
                        <Button onClick={onClickNavigate}>Sign in</Button>
                    </GridItem>
                    <GridItem rowSpan={2} textAlign="center">
                        <Box color="blue.800">
                            <Link to="/register">アカウント作成</Link>
                            <br />
                            <Link to="/register">パスワードを忘れた場合はこちら</Link>
                        </Box>
                    </GridItem>
                </Grid>
            </Center>
        </>
    )
})
