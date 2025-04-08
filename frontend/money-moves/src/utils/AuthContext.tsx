// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authenticateToken } from './TokenAuthentication';

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const checkTokenAndRedirect = async () => {
        var isUserAuthenticated = 0;
        if (!isAuthenticated) {
            isUserAuthenticated = await authenticateToken();
            // If token is invalid or not present, redirect to /login
            if (!isUserAuthenticated && location.pathname !== "/signup") {
                navigate('/login');
            }
            else if (isUserAuthenticated) {
                setIsAuthenticated(true);
                console.log("authenticate is true")
            }
        }
        if ((isUserAuthenticated || isAuthenticated) && (location.pathname === "/signup" || location.pathname === "/login"))
        {
            console.log("navigating to dashboard")
            navigate("/dashboard")
        }
      };

    useEffect(() => {
        if (location.pathname !== "/")
        {
            const token = localStorage.getItem("token");
            if (token) {
                // Assuming you validate the token here
                checkTokenAndRedirect();
            } else if (location.pathname !== "/signup") {
                setIsAuthenticated(false);
                navigate("/login"); // Redirect if not authenticated
            }
        }
    }, [navigate, location.pathname]);



    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
