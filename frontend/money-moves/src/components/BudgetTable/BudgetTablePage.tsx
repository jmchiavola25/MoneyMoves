"use client"

import { Table, IconButton } from "@chakra-ui/react"
import { ExpenseRecord } from "../../services/ExpenseRecordService"
import { blackColor, cardBackgroundColor, secondaryButtonColor, whiteColor } from "../../utils/colors"
import { LuTrash } from "react-icons/lu"

interface BudgetTableProps {
    paginatedRecords: ExpenseRecord[]
    fields : string[]
}

const BudgetTablePage : React.FC<BudgetTableProps> = ({paginatedRecords, fields}) => {

    return (
        <Table.Root size="sm" variant="outline">
            <Table.Header>
                <Table.Row background={cardBackgroundColor}>
                    {fields.map((field) => (
                        <Table.ColumnHeader key={field} minW={"200px"} color={blackColor}>{field}</Table.ColumnHeader>
                    ))}
                    <Table.ColumnHeader></Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
            {paginatedRecords.map((expenseRecord: ExpenseRecord) => (
                <Table.Row key={expenseRecord.id}>
                    {fields.map((field) => (
                        <Table.Cell key={`${expenseRecord.id}-${field}`}>
                            {expenseRecord.fieldValues[field] || "-"}
                        </Table.Cell>
                    ))}
                    <Table.Cell>
                        <IconButton background={secondaryButtonColor}
                        size={"sm"}
                        color={whiteColor}>
                            <LuTrash/>
                        </IconButton>
                    </Table.Cell>
                </Table.Row>
            ))}
            </Table.Body>
        </Table.Root>
    );
}

export default BudgetTablePage;