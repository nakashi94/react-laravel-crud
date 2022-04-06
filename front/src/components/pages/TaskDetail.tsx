import { Button, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";

import { useSelectTask } from "../../hooks/useSelectTask";

export const TaskDetail: VFC = memo(() => {
    const { getId, task } = useSelectTask();

    useEffect(() => getId(1), [])

    const testClick = () => console.log("edit");

    return (
        <Center bg="white" border="1px" borderRadius="lg" w="240px" h="240px" mx="auto" mt={16} shadow="md">
            <VStack>
                <Text fontSize={24}>{`${task.content}`}</Text>
                <br />
                <HStack spacing={4}>
                    <Button borderRadius="lg" onClick={testClick}>Edit</Button>
                    <Button onClick={testClick}>Delete</Button>
                </HStack>
            </VStack>
        </Center>
    );
})
