import { Avatar, Box, Button, Center, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { memo, useCallback, VFC } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProfileBar: VFC = memo(() => {
  const navigate = useNavigate();

  const onClickEditProfile = useCallback(() => {
    navigate('/setting/profile');
  }, [navigate]);

  return (
    <Flex maxW={{ base: '95%', md: '70%' }} align="center" mx="auto" mb={{ base: '30px', md: '60px' }}>
      <Center w={{ base: '150px', md: '200px' }}>
        <Avatar
          name="Pikachu"
          size="full"
          src="https://i.pinimg.com/736x/88/29/66/882966981cbf79deacb7ca54ef3f692e.jpg"
          p={1}
          bg="gray.50"
        />
      </Center>
      <Box w={{ base: '220px', md: '280px' }} ml={{ base: '6', md: '8' }}>
        <VStack spacing={4} align="stretch">
          <Box>
            <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold">
              Pikachu
            </Text>
          </Box>
          <Box>
            <Icon
              as={AiFillGithub}
              h={{ base: '40px', md: '44px' }}
              w={{ base: '40px', md: '44px' }}
              mr={{ base: '6px', md: '12px' }}
              opacity="0.3"
              _hover={{ cursor: 'pointer', opacity: '0.9' }}
            />
            <Icon
              as={AiOutlineTwitter}
              h={{ base: '40px', md: '44px' }}
              w={{ base: '40px', md: '44px' }}
              opacity="0.3"
              _hover={{ cursor: 'pointer', opacity: '0.9' }}
            />
          </Box>
        </VStack>
      </Box>
      <Box flex="1" textAlign="end">
        <Button shadow="md" onClick={onClickEditProfile}>
          Edit Profile
        </Button>
      </Box>
    </Flex>
  );
});
