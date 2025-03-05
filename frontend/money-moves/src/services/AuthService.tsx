

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