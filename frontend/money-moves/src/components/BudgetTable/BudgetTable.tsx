"use client"

import { VStack, Stack } from "@chakra-ui/react"
import {Budget} from "../../services/BudgetService"
import { addExpenseRecord} from "../../services/ExpenseRecordService"
import { useEffect, useState } from "react"
import BudgetTablePagination from "./BudgetTablePagination"
import BudgetTablePage from "./BudgetTablePage"
import BudgetTableAdd from "./BudgetTableAdd"

interface BudgetTableProps {
    budget: Budget
    fetchBudgets: () => void
    setSelectedBudget: (budget: Budget) => void
    pageSize: number
}

const BudgetTable : React.FC<BudgetTableProps> = ({budget, fetchBudgets, setSelectedBudget, pageSize}) => {

    // const [budget, setbudget] = useState<Budget | null>(budget)
    const [newExpense, setNewExpense] = useState<Record<string, string>>({})
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (!budget)
            setSelectedBudget(JSON.parse(localStorage.getItem("selectedBudget")!!))
    }, [])

    const handleNewExpenseChange = (field: string, value: string) => {
        setNewExpense((prev) => ({...prev, [field]: value}))
    }

    const handleAddExpenseRecord = async () => {
        if (!budget) return;

        console.log(`Adding new expense: ${JSON.stringify(newExpense)}`)
        await addExpenseRecord(budget!!.id, {...newExpense})
        setNewExpense({})
        await fetchBudgets()
    }

    const getPaginatedRecords = (budget: Budget) => {
        return budget!!.expenseRecords.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    }

    if (!budget) return <p>Loading budget...</p>;

    return (
        <VStack width={"100%"}>
            <Stack width="full" gap="5">
                    <BudgetTablePage 
                        paginatedRecords={getPaginatedRecords(budget)} 
                        fields={budget.fields}/>
                    <BudgetTablePagination 
                        length={budget.expenseRecords.length} 
                        page={page} pageSize={pageSize} 
                        setPage={setPage}/>
            </Stack>
            <BudgetTableAdd 
                fields={budget.fields} 
                newExpense={newExpense} 
                handleNewExpenseChange={handleNewExpenseChange} 
                handleAddExpenseRecord={handleAddExpenseRecord}/>
        </VStack>
    );
}

export default BudgetTable;