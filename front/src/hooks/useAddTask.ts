import axios from 'axios';
import { useCallback, useState } from 'react';
import { laravel } from '../api/laravelApiEndpoint';
import { useMessage } from './useMessage';

export const useAddTask = () => {
  const { showMessage } = useMessage();
  const [reloadAddFlag, setReloadAddFlag] = useState<boolean>(false);

  const addTask = useCallback((text: string) => {
    axios
      .post(`${laravel}/api/tasks`, {
        content: text,
      })
      .then((res) => {
        setReloadAddFlag(!reloadAddFlag);
        showMessage({ title: 'タスクの追加に成功しました。', status: 'success' });
        console.log(res);
      })
    	.catch((err) => {
        showMessage({ title: 'タスクの追加に失敗しました。', status: 'error' });
        console.log(err);
      });
  }, []);
  return { reloadAddFlag, addTask };
};
