import React from "react";
import { Box, Center, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { Title_xl } from "../Style/Typograhy";
import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const MobileStatus = ({title, ...props}) => {
    const navigate = useNavigate();
    return(
        <Flex width={"100%"} justifyContent={'space-between'} alignItems={'center'} bgColor={'white'} padding={4}>
            <HStack>
            <IconButton onClick={() => navigate(-1)} bgColor={'white'} icon={<ArrowBackIcon boxSize={'24px'}/>}/>
            <IconButton onClick={() => navigate('/customer')} visibility={props.isHome ? 'visible' : 'hidden'} bgColor={'white'} icon={<Center><FiHome size={'24px'}/></Center>}/>
            </HStack>
            <Text {...Title_xl} mb={0}>{title}</Text>
            <HStack>
            <IconButton visibility={props.isSearch ? 'visible' : 'hidden'} bgColor={'white'} icon={<SearchIcon boxSize={'24px'}/>}/>
            <IconButton visibility={props.isCart ? 'visible' : 'hidden'} bgColor={'white'} icon={<Center><FiShoppingCart size={'24px'}/></Center>}/>
            </HStack>
        </Flex>
    )

}
export default MobileStatus;