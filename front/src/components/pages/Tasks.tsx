import axios from "axios";
import { memo, VFC } from "react";

export const Tasks: VFC = memo(() => {
    const api = axios.create({
        baseURL: "http://localhost:8000",
    });
    const getTasks = () => {
        api.get("/api/tasks")
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    };
    return (
        <>
            <p>Tasks</p>
            <button onClick={getTasks} >getTasks</button>
        </>
    )
})
