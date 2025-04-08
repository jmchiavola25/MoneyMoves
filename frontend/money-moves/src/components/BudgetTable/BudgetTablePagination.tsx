import { Pagination, ButtonGroup, IconButton } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"


interface BudgetTablePaginationProps {
    length: number
    page: number
    pageSize: number
    setPage: (page: number) => void
}

const BudgetTablePagination: React.FC<BudgetTablePaginationProps> = ({length, page, pageSize, setPage}) => {

    return (
        <Pagination.Root count={length} pageSize={pageSize} page={page} onPageChange={(e) => setPage(e.page)}>
            <ButtonGroup variant="ghost" size="sm" wrap="wrap">
                <Pagination.PrevTrigger asChild>
                    <IconButton>
                    <LuChevronLeft/>
                    </IconButton>
                </Pagination.PrevTrigger>
                <Pagination.Items
                    render={(page) => (
                    <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                        {page.value}
                    </IconButton>
                    )}
                />
                <Pagination.NextTrigger asChild>
                    <IconButton>
                        <LuChevronRight />
                    </IconButton>
                </Pagination.NextTrigger>
            </ButtonGroup>
        </Pagination.Root>
    )
}

export default BudgetTablePagination;