import { Table, Input, IconButton } from "@chakra-ui/react";
import { primaryButtonColor, whiteColor } from "../../utils/colors";
import { LuPlus } from "react-icons/lu";

interface BudgetTableAddProps {
    fields: string[]
    newExpense: Record<string, string>
    handleNewExpenseChange: (field: string, value: string) => void
    handleAddExpenseRecord: () => void
}

const BudgetTableAdd: React.FC<BudgetTableAddProps> = ({fields, newExpense, handleNewExpenseChange, handleAddExpenseRecord}) => {

    return (
        <Table.Root maxW={"x1"} variant="outline" position="relative" bottom="0">
                    <Table.Body>
                        <Table.Row>
                            {fields.map((field) => (
                                <Table.Cell key={`new-${field}`}>
                                    <Input
                                        size="sm"
                                        placeholder={`Enter ${field}`}
                                        value={newExpense[field] || ""}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNewExpenseChange(field, e.target.value)}
                                    />
                                </Table.Cell>
                            ))}
                            <Table.Cell>
                                <IconButton
                                    size="sm"
                                    bg={primaryButtonColor}
                                    color={whiteColor}
                                    onClick={handleAddExpenseRecord}
                                >
                                    <LuPlus />
                                </IconButton>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
    )
}

export default BudgetTableAdd;