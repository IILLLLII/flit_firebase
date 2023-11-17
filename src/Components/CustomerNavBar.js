import { Box, Center, Flex, HStack, IconButton, Image } from '@chakra-ui/react'
import React from 'react'
import { FiGrid, FiHome, FiSearch, FiUser } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

function CustomerNavBar() {
    const navigate = useNavigate();
  return (
    <Center position={'fixed'} w='100%' bottom={0} left={0} zIndex={999}>
    <Flex w='100%' maxW={'container.sm'} bgColor={'white'} justifyContent={'space-between'} alignItems={'center'} px={4} py={1}>
    <HStack alignItems={'center'} justifyContent={'space-between'} w='100%' h={'100%'}>
        <IconButton onClick={() => navigate('/customer')} variant={'unstyled'} size={'lg'} icon={<FiHome size={'40px'}/>}/>
        <IconButton variant={'unstyled'} size={'lg'} icon={<FiSearch size={'40px'}/>}/>
        <IconButton variant={'unstyled'} size={'lg'} icon={<Image src={require('../Asset/Logo.png')} boxSize={'40px'}/>}/>
        <IconButton onClick={() => navigate('/customer/mypage')} variant={'unstyled'} size={'lg'} icon={<FiUser size={'40px'}/>}/>
        <IconButton variant={'unstyled'} size={'lg'} icon={<FiGrid size={'40px'}/>}/>
    </HStack>
</Flex>
</Center>
  )
}

export default CustomerNavBar