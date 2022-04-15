import { useCallback, useState } from "react";
import { Task } from "../types/task";

type Props = {
    id: number;
    tasks: Array<Task>;
}

export const useSelectTask = () => {
    const [targetTask, setTargetTask] = useState<Task | null>(null);

    const selectTask = useCallback((props: Props) => {
        const { id, tasks } = props;
        const selectedTask = tasks.find((task: Task) => task.id === id);
        setTargetTask(selectedTask ?? null);
    }, []);

    return { targetTask, selectTask }
}
