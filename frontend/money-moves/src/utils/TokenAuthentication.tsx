import { validateToken } from "../services/AuthService";

export async function authenticateToken() : Promise<Boolean>{
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }

    try {
        // Await the validateToken call and check the result
        await validateToken(token);
        console.log("Token is valid");
        return true;
    } catch (error) {
        console.error("Token is invalid:", error);
        return false;
    }
};