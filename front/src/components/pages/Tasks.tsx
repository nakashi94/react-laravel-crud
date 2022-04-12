import { Flex } from '@chakra-ui/react';
import { memo, VFC } from 'react';

export const Tasks: VFC = memo(() => {
  return (
    <Flex align="center" maxW={{ base: '95%', md: '80%' }} mx="auto">
      <>Tasks</>
    </Flex>
  );
});
