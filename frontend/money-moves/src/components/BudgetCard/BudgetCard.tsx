import "./BudgetCard.css";

import {Button, Card, HStack, Tag} from "@chakra-ui/react"
import { deleteBudget } from "../../services/BudgetService";

interface BudgetCardProps {
    name: string
    id: number
    fields: string[]
    fetchBudgets: () => void
}

const BudgetCard: React.FC<BudgetCardProps> = ({name, id, fields, fetchBudgets}) => {

    const onDeleteBudget = async () => {
        console.log("Delete budget with id: " + id);
        await deleteBudget(id);
        fetchBudgets();
    };

    return (
        <div>
            <Card.Root width="320px" height="275px" background={"#9fafc9"}>
            <Card.Body gap="2">
                <Card.Title mt="2" color={"#1e2a38"}>{name}</Card.Title>
                <Card.Description color={"#333"}>
                <HStack gap="1" wrap={"wrap"}>
                        {fields.map((field) => (
                            <Tag.Root color={"white"} background={"#3f6640"} size="lg" key={field}>
                              <Tag.Label>{field}</Tag.Label>
                            </Tag.Root>
                        ))}
                        </HStack>
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline" background={"#d7263d"} onClick={onDeleteBudget}>Delete</Button>
                <Button variant="outline" background={"#0c49ab"} color={"white"}>Open</Button>
            </Card.Footer>
            </Card.Root>
        </div>
    )
}

export default BudgetCard;