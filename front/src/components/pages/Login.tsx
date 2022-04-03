import { memo, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const Login: VFC = memo(() => {
    const navigate = useNavigate();
    const onClickNavigate = () => {
        navigate("/tasks");
        console.log("tasks");
    };
    return (
        <>
            <p>LoginPage</p>
            <Button onClick={onClickNavigate}>ログイン</Button>
        </>
    )
})
