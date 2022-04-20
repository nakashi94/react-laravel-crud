import { Button, Center, Text } from '@chakra-ui/react';
import { memo, VFC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Page404: VFC = memo(() => {
  const navigate = useNavigate();
  const onClickTop = () => navigate('/');
  return (
    <Center>
      <Text mr={4}>Page404</Text>
      <Button onClick={onClickTop}>トップに戻る</Button>
    </Center>
  );
});
