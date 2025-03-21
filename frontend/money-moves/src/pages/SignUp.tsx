import SignUpForm from "../components/SignUpForm/SignUpForm";
import "../styles/SignUp.css";

import { useNavigate } from "react-router-dom";
import { authenticateToken } from "../utils/TokenAuthentication";
import { useEffect } from "react";

function SignUp()
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
    <div className="signUp">
        <SignUpForm></SignUpForm>
    </div>
    );
}

export default SignUp;