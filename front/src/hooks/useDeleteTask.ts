import axios from "axios"
import { useCallback, useState } from "react"
import { laravel } from "../api/laravelApiEndpoint"

export const useDeleteTask = () => {
    const [reloadDeleteFlag, setReloadDeleteFlag] = useState<boolean>(false);
    const deleteTask = useCallback((id: number) => {
        setReloadDeleteFlag((prevState) => !prevState);
        axios
            .delete(`${laravel}/api/tasks/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [reloadDeleteFlag]);
    return { reloadDeleteFlag, deleteTask };
}
