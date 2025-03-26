import { Table } from "@chakra-ui/react"
import {Budget} from "../../services/BudgetService"
import { useEffect, useState } from "react"

interface BudgetTableProps {
    budget: Budget
}

const BudgetTable : React.FC<BudgetTableProps> = ({budget}) => {

    const [currentBudget, setCurrentBudget] = useState<Budget | null>(budget)

    useEffect(() => {
        if (!budget)
        {
            const storedBudget = localStorage.getItem("selectedBudget")
            if (storedBudget) {
                setCurrentBudget(JSON.parse(storedBudget))
            }
        }
    }, [])

    if (!currentBudget) return <p>Loading budget...</p>;

    return (
        <Table.ScrollArea borderWidth="1px" maxW="xl">
            <Table.Root size="sm" variant="outline">
                <Table.Header>
                    <Table.Row>
                        {currentBudget.fields.map((field) => (
                            <Table.ColumnHeader key={field}>{field}</Table.ColumnHeader>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body></Table.Body>
            </Table.Root>
        </Table.ScrollArea>
    );
}

export default BudgetTable;