import { Budget } from "./BudgetService";

export interface ExpenseRecord {
    id: number
    budget: Budget
    fieldValues : {[key: string]: string}
}

export async function addExpenseRecord(budgetId: number, fieldValues: {[key: string]: string}) {
    return fetch(`http://localhost:8080/api/expenses/${budgetId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({fieldValues})
    })
    .then(async response => {
        console.log("Response status:", response.status);
        const responseData = await response.text(); // Log raw response

        if (response.ok) {
            console.log("Add new expense successful:", responseData);
            return JSON.parse(responseData);
        } else {
            console.error("Add expense failed:", responseData);
            throw new Error("An error occurred when adding new expense");
        }
    })
    .catch(error => {
        console.error("Error adding expense:", error);
        throw error;
    });
}