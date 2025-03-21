

export async function register (email: string, password: string) {
    return fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Email already exists.");
        }
    });
};

export async function validateToken(token: string) {
    console.log("Validating token:", token);
    return fetch('http://localhost:8080/api/user/profile', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Invalid token.");
        }
    }
    );
}