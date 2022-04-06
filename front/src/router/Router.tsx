import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { TaskDetail } from "../components/pages/TaskDetail";
import { Tasks } from "../components/pages/Tasks";

export const Router: VFC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="id" element={<TaskDetail />} />
        </Routes>
    )
})
