import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/Logo/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {

  return (
    <>
        <HStack spacing={'24px'}>
            <Image 
                src={logo}
                boxSize='60px' 
            />
            <ColorModeSwitch/>
        </HStack>
    </>
  )
}

export default NavBar