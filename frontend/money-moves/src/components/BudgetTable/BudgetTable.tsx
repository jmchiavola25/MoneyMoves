import { Table, VStack, Box } from "@chakra-ui/react"
import {Budget} from "../../services/BudgetService"
import { useEffect, useState } from "react"
import { blackColor, cardBackgroundColor } from "../../utils/colors"

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
        <VStack alignContent={"center"}>
            <Box color={blackColor} textStyle="body" alignSelf={"flex-start"} fontSize={"3em"}>{currentBudget.name}</Box>
            <Table.ScrollArea borderWidth="1px" maxW="100%">
            <Table.Root size="lg" variant="outline">
                <Table.Header>
                    <Table.Row background={cardBackgroundColor}>
                        {currentBudget.fields.map((field) => (
                            <Table.ColumnHeader key={field} minW={"200px"} color={blackColor}>{field}</Table.ColumnHeader>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body></Table.Body>
            </Table.Root>
        </Table.ScrollArea>
        </VStack>
    );
}

export default BudgetTable;