
export async function login (email: string, password: string) {
    return fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(async response => {
        console.log("Response status:", response.status);
        const responseData = await response.text(); // Log raw response

        if (response.ok) {
            console.log("Login successful:", responseData);
            return JSON.parse(responseData);
        } else {
            console.error("Login failed:", responseData);
            throw new Error("Incorrect email or password.");
        }
    })
    .catch(error => {
        console.error("Error during login:", error);
        throw error;
    });
};