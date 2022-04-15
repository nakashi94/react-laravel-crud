import { Flex, Heading } from '@chakra-ui/react';
import { memo, VFC } from 'react';

export const Header: VFC = memo(() => {
  return (
    <Flex as="nav" align="center" mx="auto" maxW={{ base: '95%', md: '90%' }} mb={{ base: '10px', md: '20px' }}>
      <Flex fontSize={{ base: 'md', md: 'xl' }} mx={{ base: '1', md: '2' }} my={4}>
        <Heading>ToDo</Heading>
      </Flex>
    </Flex>
  );
});
