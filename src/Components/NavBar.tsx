import {HStack, Text, Image} from "@chakra-ui/react";
import logo from "../assets/movie.jpg";

export const NavBar = () => {
    return (
        <HStack padding='10px'>
            <Image src={logo}  boxSize='60px' borderRadius='full'></Image>
            <Text>Navbar</Text>
        </HStack>
    );
};
