import { Avatar, Menu, Button, Portal, Box} from "@chakra-ui/react";
import DefaultAvatar from "../../assets/defaultAvatar.webp"
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const AvatarMenu = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/login")
    }

    return (
        <Menu.Root positioning={{ placement: "bottom-start" }}>
            <Menu.Trigger asChild>
                <Button background={"transparent"}>
                    <Avatar.Root size={"lg"}>
                        <Avatar.Fallback name="default" />
                        <Avatar.Image src={DefaultAvatar} background={"white"}/>
                    </Avatar.Root>
                </Button>
            </Menu.Trigger>
            <Portal>
            <Menu.Positioner>
                <Menu.Content>
                <Menu.Item value="logout" color="fg.error"_hover={{ bg: "bg.error", color: "fg.error" }} onClick={handleLogout}>
                    <Box flex="1">Log Out</Box>
                    <LuLogOut/>
                </Menu.Item>
                </Menu.Content>
            </Menu.Positioner>
            </Portal>
      </Menu.Root>
    )

}

export default AvatarMenu;