import { useCallback, useState } from "react";
import { api } from "../api/api";
import { Task } from "../types/task";

export const useSelectTask = () => {
    const [task, setTask] = useState<Task>({
        id: 0,
        content: "",
        created_at: "", 
        updated_at: "",
    });

    const getId = useCallback((id: number | null) => {
        console.log("getId")
        api.get(`/api/tasks/${id}`)
            .then(res => setTask(res.data))
            .catch((err) => {
                alert("タスクデータの取得に失敗しました。");
                console.log(err);
            })
    }, []);
    return { getId, task }
}
