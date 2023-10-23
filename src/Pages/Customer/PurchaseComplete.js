import { CheckCircleIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup, Center, Flex, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function PurchaseComplete() {
    const navigate = useNavigate();
  return (
    <Center w={'100vw'} h={'100vh'} bgColor={'white'}>
        <VStack gap={8}>
        <CheckCircleIcon w={'50px'} h={'50px'}/>
        <Text fontSize={'xl'}>주문이 완료되었습니다.</Text>
        <ButtonGroup>
            <Button>주문현황</Button>
            <Button onClick={() => navigate('/customer')}>홈으로이동</Button>
        </ButtonGroup>
        </VStack>
    </Center>
  )
}

export default PurchaseComplete