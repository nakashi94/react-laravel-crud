import { Box, Center, Flex, Heading, Spinner, Stack, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';
import { memo, useCallback, useEffect, VFC } from 'react';
import { useAllTasks } from '../../hooks/useAllTasks';
import { useSelectTask } from '../../hooks/useSelectTask';
import { Task } from '../../types/task';
import { TaskCard } from '../organisms/TaskCard';
import { TaskModal } from '../organisms/TaskModal';

export const Tasks: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, tasks, getTasks } = useAllTasks();
  const { targetTask, selectTask } = useSelectTask();

  useEffect(() => {
    getTasks();
  }, []);

  const onClickTask = useCallback((id: number) => {
    selectTask({ id, tasks });
    onOpen();
  }, []);

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
              <Heading mt={{ base: '36px', md: '48px' }}>Tasks</Heading>
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
