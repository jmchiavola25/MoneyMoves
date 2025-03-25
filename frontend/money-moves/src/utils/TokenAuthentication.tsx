import { validateToken } from "../services/AuthService";

export async function authenticateToken() : Promise<Number>{
    const token = localStorage.getItem('token');
    if (!token) {
        return 0;
    }

    try {
        // Await the validateToken call and check the result
        const response = await validateToken(token);
        const userId = response.userId
        localStorage.setItem('userId', userId);
        console.log("Token is valid");
        return userId;
    } catch (error) {
        console.error("Token is invalid:", error);
        return 0;
    }
};