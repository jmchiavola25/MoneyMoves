import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateToken } from "../utils/TokenAuthentication";


function Dashboard () {

    const navigate = useNavigate();

    useEffect(() => {
        const checkTokenAndRedirect = async () => {
            const isAuthenticated = await authenticateToken();
            if (!isAuthenticated) {
                // If token is invalid or not present, redirect to /login
                navigate('/login');
            }
        };

        checkTokenAndRedirect();
    }, [navigate]);

    
     return (
        <div>
            <h1>Dashboard</h1>
        </div>
     )
}

export default Dashboard;