import "./BudgetCard.css";

import {ButtonGroup, Card, HStack, IconButton, Tag} from "@chakra-ui/react"
import { deleteBudget } from "../../services/BudgetService";
import {LuEye, LuPencil, LuTag, LuTrash } from "react-icons/lu";
import {Budget} from "../../services/BudgetService"
import { useNavigate } from "react-router-dom";

interface BudgetCardProps {
    budget: Budget
    fetchBudgets: () => void
    onSelectBudget: (budget: Budget) => void
}

const BudgetCard: React.FC<BudgetCardProps> = ({budget, fetchBudgets, onSelectBudget}) => {

    const navigate = useNavigate()

    const onDeleteBudget = async () => {
        console.log("Delete budget with id: " + budget.id);
        await deleteBudget(budget.id);
        fetchBudgets();
    };

    const onClickEdit = () => {
        onSelectBudget(budget)
        navigate("/budget")
    }

    return (
        <div>
            <Card.Root width="350px" height="200px" maxHeight={"275px"} background={"#9fafc9"}>
                <Card.Body gap="2">
                    <HStack justifyContent={"space-between"} wrap={"wrap"}>
                        <Card.Title mt="2" color={"#1e2a38"} flexGrow={1} overflowWrap="break-word" maxWidth={"40%"} truncate={true}>{budget.name}</Card.Title>
                        <ButtonGroup>
                            <IconButton variant={"outline"} background={"#d7263d"} onClick={onDeleteBudget}>
                                <LuTrash color="white"/>
                            </IconButton>
                            <IconButton variant={"outline"} background={"#0c49ab"} onClick={onClickEdit}>
                                <LuPencil color="white"/>
                            </IconButton>
                            <IconButton variant={"outline"} background = "#de97dd">
                                <LuEye color="white"/>
                            </IconButton>
                        </ButtonGroup>
                    </HStack>
                    <HStack gap="1" wrap={"wrap"}>
                        {budget.fields.map((field) => (
                            <Tag.Root color={"white"} background={"#3f6640"} size="lg" key={field}>
                                <Tag.StartElement>
                                    <LuTag />
                                </Tag.StartElement>
                                <Tag.Label>{field}</Tag.Label>
                            </Tag.Root>
                        ))}
                    </HStack>
                </Card.Body>
            </Card.Root>
        </div>
    )
}

export default BudgetCard;