import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Tasks } from "../components/pages/Tasks";

export const Router: VFC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
                <Route path="tasks" element={<Tasks />} />
        </Routes>
    )
})
