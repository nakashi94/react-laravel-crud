import { useCallback, useState } from "react";

import { api } from "../api/api";
import { Task } from "../types/task";

export const useAllTasks = () => {

    const [tasks, setTasks] = useState<Array<Task>>([]);

    const getTasks = useCallback(() => {
        console.log("getTasks")
        api.get("/api/tasks")
            .then(res => setTasks(res.data))
            .catch((err) => {
                alert("タスクデータの取得に失敗しました。")
                console.log(err);
            })
    }, []);
    return { tasks, getTasks }
}
