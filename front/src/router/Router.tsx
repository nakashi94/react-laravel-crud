import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { SignIn } from "../components/pages/SignIn";
import { SignUp } from "../components/pages/SignUp";
import { Tasks } from "../components/pages/Tasks";
import { HeaderAndFooter } from "../components/templates/HeaderAndFooter";
import { HeaderAndProfileBarAndFooter } from "../components/templates/HeaderAndProfileBarAndFooter";

export const Router: VFC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="register" element={<SignUp />} />
            <Route
                path="tasks/*"
                element={
                    <Routes>
                        <Route
                            path="/"
                            element={<HeaderAndProfileBarAndFooter />}
                        >
                            <Route index element={<Tasks />} />
                        </Route>
                        <Route path="setting" element={<HeaderAndFooter />}>
                            <Route index element={<Setting />} />
                        </Route>
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                }
            />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
});
