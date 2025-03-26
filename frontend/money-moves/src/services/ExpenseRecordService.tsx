import { Budget } from "./BudgetService"

export interface ExpenseRecord {
    id : number
    budget : Budget
    fieldValues : Map<String, String>
}