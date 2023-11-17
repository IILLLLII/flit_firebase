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
        <Center position={'fixed'} w='100%' top={0} left={0} zIndex={999}>
        <Flex w='100%' maxW={'container.sm'} bgColor={'white'} justifyContent={'space-between'} alignItems={'center'} px={4} py={1}>
            <HStack>
            <IconButton border={'none'} mr={1} onClick={() => navigate(-1)} bgColor={'white'} icon={<ArrowBackIcon boxSize={'24px'}/>}/>
            <IconButton border={'none'} onClick={() => navigate('/customer')} visibility={props.isHome ? 'visible' : 'hidden'} bgColor={'white'} icon={<Center><FiHome size={'24px'}/></Center>}/>
            </HStack>
            <Text {...Title_xl} mb={0}>{title}</Text>
            <HStack>
            <IconButton border={'none'} mr={1} visibility={props.isSearch ? 'visible' : 'hidden'} bgColor={'white'} icon={<SearchIcon boxSize={'24px'}/>}/>
            <IconButton onClick={() => navigate('/customer/cart')} border={'none'} visibility={props.isCart ? 'visible' : 'hidden'} bgColor={'white'} icon={<Center><FiShoppingCart size={'24px'}/></Center>}/>
            </HStack>
        </Flex>
        </Center>
    )

}
export default MobileStatus;