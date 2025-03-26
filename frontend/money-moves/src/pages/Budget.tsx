import BudgetTable from "../components/BudgetTable/BudgetTable"
import "../styles/Budget.css"

import { Flex } from "@chakra-ui/react"
import {Budget as BudgetObject} from "../services/BudgetService"

interface BudgetProps {
    budget: BudgetObject
}

const Budget : React.FC<BudgetProps> = ({budget}) => {


    return (
        <Flex className="budgetPage">
            <BudgetTable budget={budget!!}/>
        </Flex>
    )
}

export default Budget;