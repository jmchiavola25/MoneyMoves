import "./NavBar.css"

import { Box, ButtonGroup, Flex, HStack, Button, Avatar } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import AvatarMenu from "../AvatarMenu/AvatarMenu"

interface NavbarProps {
    className: string
}

const NavBar : React.FC<NavbarProps> = ({className}) => {

    const navigate = useNavigate()

    const handleLogoClick = () => {
        console.log("Logo clicked");
    }

    return (
        <Box className={className}>
            <Flex alignItems={"center"} justifyContent={"space-between"} paddingLeft={"1%"} paddingRight={"2%"} height={"100%"}>
                <HStack width={"50%"} justifyContent={"flex-start"}>
                    <ButtonGroup gap={4} width={"50%"}>
                        <AvatarMenu/>
                        <Button onClick={() => navigate("/dashboard")} background={"#9fafc9"}>Dashboard</Button>
                    </ButtonGroup>
                </HStack>
                <HStack gap={4} justifyContent={"flex-end"} alignItems={"center"} width={"50%"}>
                    <h1 id="appTitle" onClick={() => navigate("/")}>Money Moves</h1>
                </HStack>
            </Flex>
        </Box>
    )
}

export default NavBar;