import { Center, Text } from '@chakra-ui/react';
import { memo, VFC } from 'react';

type Props = {
  id: number;
  onClick: (id: number) => void;
  content: string;
};

export const TaskCard: VFC<Props> = memo((props) => {
  const { id, onClick, content } = props;
  return (
    <Center
      w="240px"
      h="120px"
      mx="auto"
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
      onClick={() => onClick(id)}
      _hover={{ cursor: 'pointer', bg: 'gray.100' }}
    >
      <Text fontSize="24px">{content}</Text>
    </Center>
  );
});
