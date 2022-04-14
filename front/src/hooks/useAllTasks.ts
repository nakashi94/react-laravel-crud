import axios from "axios";
import { useCallback, useState } from "react";
import { laravel } from "../api/laravelApiEndpoint";
import { Task } from "../types/task";
import { useMessage } from "./useMessage";

export const useAllTasks = () => {
    const { showMessage } = useMessage();
    const [tasks, setTasks] = useState<Array<Task>>([])

    const getTasks = useCallback(() => {
        axios.get<Array<Task>>(`${laravel}/api/tasks`)
            .then((res) => {
                setTasks(res.data);
            })
            .catch((err) => {
                showMessage({ title: "ユーザーの取得に失敗しました。", status: "error" })
                console.log(err)
            })
    }, []);
    return { tasks, getTasks };
}
