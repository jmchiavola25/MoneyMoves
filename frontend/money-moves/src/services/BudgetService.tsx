
export async function getBudgets(userId: number) {
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

export async function createBudget(userId: number, name: string, fields: string[]) {
    return fetch(`http://localhost:8080/api/budgets/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({name, fields})
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
}

export async function deleteBudget(budgetId: number) {
    return fetch(`http://localhost:8080/api/budgets/${budgetId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(async response => {
        console.log("Response status:", response.status);
        const responseData = await response.text(); // Log raw response

        if (response.ok) {
            console.log("Budget deleted successful:", responseData);
            return;
        } else {
            console.error("Budget delete failed:", responseData);
            throw new Error("Budget id does not exist.");
        }
    })
    .catch(error => {
        console.error("Error deleting budget:", error);
        throw error;
    });
}