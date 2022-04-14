import { Box, Center, Flex, Heading, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { memo, useEffect, VFC } from 'react';
import { useAllTasks } from '../../hooks/useAllTasks';
import { Task } from '../../types/task';

export const Tasks: VFC = memo(() => {
  const { tasks, getTasks } = useAllTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Box bg="gray.200">
      <Flex align="center" maxW={{ base: '95%', md: '70%' }} mx="auto" pb={{ base: '36px', md: '96px' }}>
        <Stack direction="column" spacing={{ base: '36px', md: '48px' }}>
          <Heading mt={{ base: '36px', md: '48px' }}>Tasks</Heading>
          <Wrap mx="auto" spacing={8} align="center" justify="center">
            {tasks.map((task: Task) => (
              <WrapItem key={task.id} mx="auto">
                <Center
                  w="240px"
                  h="120px"
                  mx="auto"
                  bg="white"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  shadow="md"
                >
                  <Text fontSize="24px">{task.content}</Text>
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </Flex>
    </Box>
  );
});
