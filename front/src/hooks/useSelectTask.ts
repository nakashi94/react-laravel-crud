import { useCallback, useState } from 'react';
import { Task } from '../types/task';

type Props = {
  id: number;
  tasks: Array<Task>;
  onOpen: () => void;
};

export const useSelectTask = () => {
  const [targetTask, setTargetTask] = useState<Task | null>(null);

  const selectTask = useCallback((props: Props) => {
    const { id, tasks, onOpen } = props;
    const selectedTask = tasks.find((task: Task) => task.id === id);
    setTargetTask(selectedTask ?? null);
    onOpen();
  }, []);

  return { targetTask, selectTask };
};
