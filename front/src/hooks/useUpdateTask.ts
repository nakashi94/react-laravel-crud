import axios from "axios";
import { useCallback } from "react";

import { laravel } from "../api/laravelApiEndpoint";
import { useMessage } from "../hooks/useMessage";

export const useUpdateTask = () => {
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
    }, []);
    return { updateTask };
}
