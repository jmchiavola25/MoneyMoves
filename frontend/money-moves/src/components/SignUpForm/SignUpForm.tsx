import LogoAndTitle from "../TitleAndLogo/TitleAndLogo";

import { useNavigate} from 'react-router-dom'
import {useState} from 'react';
import { register } from '../../services/AuthService';

import "./SignUpForm.css";

function SignUpForm() {

    const [signUpFailed, setSignUpFailed] = useState(false);
    const nav = useNavigate();

    async function registerUser(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;
        const confirmPassword = event.currentTarget.confirmPassword.value;

        if (password !== confirmPassword) {
            setSignUpFailed(true);
            return;
        }

        setSignUpFailed(false);
        // Call the register function from the AuthService file
        // If the register is successful, save the token in local storage
        // Redirect the user to the dashboard
        register(email, password)
                    .then(() => {
                        nav('/login');
                    })
    }


    return (
        <div className="signUpPage">
            <div className="left-content">
                <LogoAndTitle handleLogoClick={function (): void {
                    throw new Error("Function not implemented.");
                } } isLogoNextToTitle={false} />
            </div>
            <div className="right-content">
                <div className="signUp-outer">
                    <form name="signUp" className="signUp-form" onSubmit={registerUser}>
                        <div className="form-item">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-item">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="form-item">
                            <button type="submit" className="primary signUp-button">Sign Up</button>
                            {signUpFailed && <p id="error">Passwords do not match</p>}
                        </div>
                        <p>Already have an account? <a href="/login">Log in</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;