import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Spinner,
  Stack,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { ChangeEvent, memo, useCallback, useEffect, VFC } from 'react';
import { useAddTask } from '../../hooks/useAddTask';
import { useAllTasks } from '../../hooks/useAllTasks';
import { useChangeText } from '../../hooks/useChangeText';
import { useSelectTask } from '../../hooks/useSelectTask';
import { Task } from '../../types/task';
import { TaskCard } from '../organisms/TaskCard';
import { TaskModal } from '../organisms/TaskModal';

export const Tasks: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, tasks, getTasks } = useAllTasks();
  const { targetTask, selectTask } = useSelectTask();
  const { text, changeText } = useChangeText();
  const { addTaskFlag, addTask } = useAddTask();

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    changeText(e);
  };

  const onClickAddTask = () => {
    addTask(text);
  };

  useEffect(() => {
    getTasks();
  }, [addTaskFlag]);

  const onClickTask = useCallback(
    (id: number) => {
      selectTask({ id, tasks, onOpen });
    },
    [tasks, selectTask, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Box bg="gray.200">
          <Flex align="center" maxW={{ base: '95%', md: '70%' }} mx="auto" pb={{ base: '36px', md: '96px' }}>
            <Stack direction="column" spacing={{ base: '36px', md: '48px' }}>
              <Flex mt={{ base: '36px', md: '48px' }} justify="space-between">
                <Heading color="gray.800">Tasks</Heading>
                <Input placeholder="content" onChange={onChangeText} />
                <Button bg="blue.200" shadow="md" _hover={{ bg: 'blue.300' }} onClick={onClickAddTask}>
                  add task
                </Button>
              </Flex>
              <Wrap mx="auto" spacing={8} align="center" justify="center">
                {tasks.map((task: Task) => (
                  <WrapItem key={task.id} mx="auto">
                    <TaskCard id={task.id} onClick={onClickTask} content={task.content} />
                  </WrapItem>
                ))}
              </Wrap>
            </Stack>
          </Flex>
        </Box>
      )}
      <TaskModal task={targetTask} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
