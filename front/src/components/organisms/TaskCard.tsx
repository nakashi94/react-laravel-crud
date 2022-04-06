import { memo, useCallback, VFC } from "react";
import { Box } from "@chakra-ui/react";

import { Task } from "../../types/task";

type Props = {
    task: Task;
    onOpen: () => void;
}

export const TaskCard: VFC<Props> = memo((props) => {
    const { task, onOpen } = props;
    const onClickTask = useCallback(() => {
        onOpen();
        console.log(task.content);
    }, []);
    return (
        <>
            <Box
                w="160px"
                h="160px"
                bg="white"
                borderWidth="1px"
                borderRadius="lg"
                shadow='md'
                overflow="hidden"
                m={4}
                _hover={{ cursor: "pointer", opacity: 0.8 }}
                onClick={onClickTask}
            >
                <p>{`${task.content}`}</p>
            </Box>
        </>
    );
})
