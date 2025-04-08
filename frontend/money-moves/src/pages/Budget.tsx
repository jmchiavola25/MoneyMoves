import BudgetTable from "../components/BudgetTable/BudgetTable"
import "../styles/Budget.css"

import { Box, VStack, HStack } from "@chakra-ui/react"
import {Budget as BudgetObject} from "../services/BudgetService"
import { blackColor } from "../utils/colors"
import { useState } from "react"
import PageSizer from "../components/PageSizer/PageSizer"

interface BudgetProps {
    budget: BudgetObject
    fetchBudgets: () => void
    setSelectedBudget: (budget: BudgetObject) => void
}

const Budget : React.FC<BudgetProps> = ({budget, fetchBudgets, setSelectedBudget}) => {

    const [pageSize, setPageSize] = useState(8)

    return (
        <VStack className="budgetPage">
            <HStack justifyContent={"space-between"} width={"full"}>
                <Box color={blackColor} textStyle="body" alignSelf={"flex-start"} fontSize={"3em"} flex={"1"}>{budget?.name}</Box>
                <PageSizer pageSize={pageSize} setPageSize={setPageSize}/>
            </HStack>
            <BudgetTable budget={budget!!} fetchBudgets={fetchBudgets} setSelectedBudget={setSelectedBudget} pageSize={pageSize}/>
        </VStack>
    )
}

export default Budget;