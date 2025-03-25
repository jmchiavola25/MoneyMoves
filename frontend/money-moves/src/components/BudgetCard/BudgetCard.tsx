import "./BudgetCard.css";

import {ButtonGroup, Card, HStack, IconButton, Tag} from "@chakra-ui/react"
import { deleteBudget } from "../../services/BudgetService";
import {LuEye, LuPencil, LuTag, LuTrash } from "react-icons/lu";

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
            <Card.Root width="350px" height="200px" maxHeight={"275px"} background={"#9fafc9"}>
                <Card.Body gap="2">
                    <HStack justifyContent={"space-between"} wrap={"wrap"}>
                        <Card.Title mt="2" color={"#1e2a38"} flexGrow={1} overflowWrap="break-word" maxWidth={"40%"} truncate={true}>{name}</Card.Title>
                        <ButtonGroup>
                            <IconButton variant={"outline"} background={"#d7263d"} onClick={onDeleteBudget}>
                                <LuTrash color="white"/>
                            </IconButton>
                            <IconButton variant={"outline"} background={"#0c49ab"}>
                                <LuPencil color="white"/>
                            </IconButton>
                            <IconButton variant={"outline"} background = "#de97dd">
                                <LuEye color="white"/>
                            </IconButton>
                        </ButtonGroup>
                    </HStack>
                    <HStack gap="1" wrap={"wrap"}>
                        {fields.map((field) => (
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