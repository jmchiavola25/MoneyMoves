import "./BudgetCard.css";

import {Button, Card} from "@chakra-ui/react"

interface BudgetProps {
    name: string
}

function BudgetCard(props: BudgetProps) {

    return (
        <div>
            <h2>BudgetCard</h2>
            <Card.Root width="320px">
            <Card.Body gap="2">
                <Card.Title mt="2">{props.name}</Card.Title>
                <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button>Join</Button>
            </Card.Footer>
            </Card.Root>
        </div>
    )
}

export default BudgetCard;