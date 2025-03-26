import BudgetTable from "../components/BudgetTable/BudgetTable"

import {Budget as BudgetObject} from "../services/BudgetService"

interface BudgetProps {
    budget: BudgetObject
}

const Budget : React.FC<BudgetProps> = ({budget}) => {


    return (
       <BudgetTable budget={budget!!}/>
    )
}

export default Budget;