import axios from 'axios';
import { useCallback, useState } from 'react';

import { laravel } from '../../../api/laravelApiEndpoint';
import { useMessage } from "../..";
import { selectTask, Task } from '../../../types';

export const useAddTask = () => {
  const [reloadAddFlag, setReloadAddFlag] = useState<boolean>(false);
  const { showMessage } = useMessage();

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
      })
      .finally(() => {
        setReloadAddFlag((prevState) => !prevState);
      });
  }, []);
  return { reloadAddFlag, addTask };
};

export const useAllTasks = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { showMessage } = useMessage();

  const getTasks = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<Task>>(`${laravel}/api/tasks`)
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        showMessage({ title: 'ユーザーの取得に失敗しました。', status: 'error' });
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { loading, tasks, getTasks };
};

export const useDeleteTask = () => {
  const [reloadDeleteFlag, setReloadDeleteFlag] = useState<boolean>(false);
  const { showMessage } = useMessage();
  const deleteTask = useCallback((id: number) => {
      axios
          .delete(`${laravel}/api/tasks/${id}`)
          .then((res) => {
              console.log(res);
              showMessage({ title: "削除に成功しました。", status: "success" })
          })
          .catch((err) => {
              console.log(err);
              showMessage({ title: "削除に失敗しました。", status: "error" })
          })
          .finally(() => {
              setReloadDeleteFlag((prevState) => !prevState);
          })
  }, [reloadDeleteFlag]);
  return { reloadDeleteFlag, deleteTask };
}

export const useSelectTask = () => {
  const [targetTask, setTargetTask] = useState<Task | null>(null);
  
  const selectTask = useCallback((props: selectTask) => {
    const { id, tasks, onOpen } = props;
    const selectedTask = tasks.find((task: Task) => task.id === id);
    setTargetTask(selectedTask ?? null);
    onOpen();
  }, []);

  return { targetTask, selectTask };
}

export const useUpdateTask = () => {
  const [reloadUpdateFlag, setReloadUpdateFlag] = useState<boolean>(false);
  const { showMessage } = useMessage();
  const updateTask = useCallback((id: number, value: string) => {
      axios
          .put(`${laravel}/api/tasks/${id}`, {
              content: value
          })
          .then((res) => {
              console.log(res);
              showMessage({ title: "更新が完了しました。", status: "success" });
          })
          .catch((err) => {
              console.log(err);
              showMessage({ title:"更新に失敗しました。", status: "error" });
          })
          .finally(() => {
              setReloadUpdateFlag((prevState) => !prevState)
          })
  }, []);
  return { reloadUpdateFlag, updateTask };
}

