
export async function getBudgets(userId: BigInt) {
    return fetch(`http://localhost:8080/api/budgets/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(async response => {
        console.log("Response status:", response.status);
        const responseData = await response.text(); // Log raw response

        if (response.ok) {
            console.log("Budgets retrieved successful:", responseData);
            return JSON.parse(responseData);
        } else {
            console.error("Budget fetch failed:", responseData);
            throw new Error("User id does not exist.");
        }
    })
    .catch(error => {
        console.error("Error fetching budgets:", error);
        throw error;
    });
};