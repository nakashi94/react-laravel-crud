import { Heading, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";

import { useAllTasks } from "../../hooks/useAllTasks";
import { Task } from "../../types/task";
import { TaskCard } from "../organisms/TaskCard";
import { TaskModal } from "../organisms/TaskModal";

export const Tasks: VFC = memo(() => {

    const { tasks, getTasks } = useAllTasks();

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => getTasks(), []);

    return (
        <>
            <Heading mx={28} my={8}>ToDo</Heading>
            <Wrap justify="center">
                {tasks.map((task: Task) => (
                    <WrapItem key={`${task.id}`}>
                        <TaskCard task={task} onOpen={onOpen} />
                    </WrapItem>
                ))}
            </Wrap>
            <TaskModal isOpen={isOpen} onClose={onClose} />
        </>
    )
})
