import "./BudgetCard.css";

import {Button, Card} from "@chakra-ui/react"
import { deleteBudget } from "../../services/BudgetService";

interface BudgetCardProps {
    name: string
    id: number
    fetchBudgets: () => void
}

const BudgetCard: React.FC<BudgetCardProps> = ({name, id, fetchBudgets}) => {

    const onDeleteBudget = async () => {
        console.log("Delete budget with id: " + id);
        await deleteBudget(id);
        fetchBudgets();
    };

    return (
        <div>
            <Card.Root width="320px" height="275px" background={"purple"}>
            <Card.Body gap="2">
                <Card.Title mt="2">{name}</Card.Title>
                <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline" background={"red"} onClick={onDeleteBudget}>Delete</Button>
                <Button>Open</Button>
            </Card.Footer>
            </Card.Root>
        </div>
    )
}

export default BudgetCard;