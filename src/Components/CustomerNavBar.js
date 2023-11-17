import { Box, HStack, IconButton, Image } from '@chakra-ui/react'
import React from 'react'
import { FiGrid, FiHome, FiSearch, FiUser } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

function CustomerNavBar() {
    const navigate = useNavigate();
  return (
    <Box position={'fixed'} bottom={0} right={0} zIndex={999} w='100%' h='8vh' bgColor={'white'} px={4}>
    <HStack alignItems={'center'} justifyContent={'space-between'} h={'100%'}>
        <IconButton onClick={() => navigate('/customer')} variant={'unstyled'} size={'lg'} icon={<FiHome size={'40px'}/>}/>
        <IconButton variant={'unstyled'} size={'lg'} icon={<FiSearch size={'40px'}/>}/>
        <IconButton variant={'unstyled'} size={'lg'} icon={<Image src={require('../Asset/Logo.png')} boxSize={'40px'}/>}/>
        <IconButton onClick={() => navigate('/customer/mypage')} variant={'unstyled'} size={'lg'} icon={<FiUser size={'40px'}/>}/>
        <IconButton variant={'unstyled'} size={'lg'} icon={<FiGrid size={'40px'}/>}/>
    </HStack>
</Box>
  )
}

export default CustomerNavBar