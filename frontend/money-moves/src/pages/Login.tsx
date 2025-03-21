import SignInForm from "../components/SignInForm/SignInForm";
import "../styles/Login.css";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { authenticateToken } from "../utils/TokenAuthentication";

function Login()
{

    const nav = useNavigate();

    useEffect(() => {
        const checkToken = async () => {
            const jwt = await authenticateToken();
            if (jwt)
            {
                nav("/dashboard");
            }
        };
        checkToken();
    }, []);

    return (
    <div className="login">
        <SignInForm></SignInForm>
    </div>
    );
}

export default Login;