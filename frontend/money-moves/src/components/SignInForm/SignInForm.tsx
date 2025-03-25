import React, { useState } from 'react';
import "./SignInForm.css";
import LogoAndTitle from '../TitleAndLogo/TitleAndLogo';
import { login } from '../../services/LoginService';
import { useNavigate } from 'react-router-dom';

interface LoginResponse {
    token: string;
    userId: number;
}

const SignInForm: React.FC = () => {
    const [loginFailed, setLoginFailed] = useState(false);

    const nav = useNavigate();

    async function userLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;

        login(email, password)
            .then((response: LoginResponse) => {
                console.log(response)
                localStorage.setItem('token', response.token);  
                localStorage.setItem('userId', `${response.userId}`)
                nav('/dashboard');
            })
            .catch(() => {
                console.error("Login failed");
                setLoginFailed(true);
            })
                
    }


    return (
        <div className="loginPage">
            <div className="left-content">
                <LogoAndTitle handleLogoClick={() => { }} isLogoNextToTitle={false}/>
            </div>
            <div className="right-content">
                <div className="login-outer">
                    <form name="login" className="login-form" onSubmit={userLogin}>
                        <div className="form-item">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required placeholder="Email" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required placeholder="Password" />
                        </div>

                        <div className="form-item">
                            <button type="submit" className="primary login-button">Log In</button>
                            {loginFailed && <p id="error">Inncorect email or password</p>}
                        </div>
                        <p>Not a user? <a href="/signup">Sign up</a> today!</p>
                        <p>Forgot your password? <a href="/ResetPassword">Reset Password</a> today!</p>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SignInForm;
