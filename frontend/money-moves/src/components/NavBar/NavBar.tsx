import "./NavBar.css"

import { Box, ButtonGroup, Flex, HStack, Button } from "@chakra-ui/react"
import { useLocation, useNavigate } from "react-router-dom"
import AvatarMenu from "../AvatarMenu/AvatarMenu"
import CreateBudgetModal from "../CreateBudgetModal/CreateBudgetModal"

interface NavbarProps {
    className: string
}

const NavBar : React.FC<NavbarProps> = ({className}) => {

    const navigate = useNavigate()
    const location = useLocation();

    const fetchBudgets = () => {

    }

    return (
        <Box className={className}>
            <Flex alignItems={"center"} justifyContent={"space-between"} paddingLeft={"1%"} paddingRight={"2%"} height={"100%"}>
                <HStack width={"33%"} justifyContent={"flex-start"}>
                    <ButtonGroup gap={4} width={"50%"}>
                        <AvatarMenu/>
                        <Button onClick={() => navigate("/dashboard")} background={"#9fafc9"}>Dashboard</Button>
                    </ButtonGroup>
                </HStack>
                <HStack gap={4} justifyContent={"center"} width={"33%"}>
                    <h1 id="appTitle" onClick={() => navigate("/")}>Money Moves</h1>
                </HStack>
                {location.pathname === "/dashboard" ? <HStack justifyContent={"flex-end"} width={"33%"}>
                    <CreateBudgetModal fetchBudgets={fetchBudgets}/>
                </HStack> : <HStack width={"33%"}/>}
            </Flex>
        </Box>
    )
}

export default NavBar;