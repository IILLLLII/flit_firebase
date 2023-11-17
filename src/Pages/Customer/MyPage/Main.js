import { Avatar, Badge, Box, Button, Center, Circle, Flex, HStack, IconButton, Image, Input, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MobileStatus from '../../../Components/MobileStatus'
import { BellIcon, CheckIcon, PhoneIcon, QuestionIcon, SettingsIcon } from '@chakra-ui/icons'
import { FiBell, FiThumbsUp } from 'react-icons/fi'
import { AiOutlineBell, AiOutlineHeart } from 'react-icons/ai'
import { formattedAmount, getDate, getOrder, getTime, parseDate } from '../../../DB/function'
import { Title_lg } from '../../../Style/Typograhy'
import { MdChevronRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function Main() {    
    const navigate = useNavigate();
    const DAY = ['일', '월', '화', '수', '목', '금', '토'];
const [step, setStep] = useState(1);
const [orderList, setOrderList] = useState([])
useEffect(() => {
    getOrderList();
}, [])

const getOrderList = async() => {
    let orderList = await getOrder(localStorage.getItem('customerToken')); // 기간을 정해야함
    console.log(orderList);
    setOrderList(orderList)
}
  return (
    <Flex bgColor={'white'} flexDirection={'column'} w="100%">
    <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
        <MobileStatus title={'My Page'} isHome={true} />
    </Flex>
    <Stack mt={'50px'} p={4} gap={4} divider={<StackDivider/>}>
            <Center>
                <Stack  w='100%' gap={4}>
                    <HStack gap={4} justifyContent={'center'}>
                        <Avatar size={'xl'}>
                        </Avatar>
                        <VStack alignItems={'flex-start'}>
                            <HStack>
                            <Badge colorScheme='green'>Green</Badge>
                            <QuestionIcon />
                            </HStack>
                                <HStack alignItems={'center'}>
                                    <Text fontSize={'xl'}>남남</Text>
                                    <SettingsIcon onClick={() => navigate('/customer/setting')}/>
                                </HStack>
                            </VStack>
                    </HStack>
                    <HStack w='100%' justifyContent={'space-around'}>
                        <Box boxSize={'80px'}>
                        <VStack justifyContent={'space-between'} h='100%' p={1}>
                            <AiOutlineBell size={'40px'}/>
                            <Text>알림</Text>
                        </VStack>
                        </Box>

                        <Box boxSize={'80px'}>
<VStack justifyContent={'space-between'} h='100%' p={1}>
                            <FiThumbsUp size={'35px'}/>
                            <Text>팔로잉 20</Text>
                        </VStack>
</Box>
                        <Box boxSize={'80px'}>
                        <VStack justifyContent={'space-between'} h='100%' p={1}>
                        <AiOutlineHeart size={'40px'}/>
                            <Text>관심 77</Text>
                        </VStack>
</Box>
                    </HStack>
                </Stack>
            </Center>

            <Center>
            <VStack alignItems={'flex-start'} w='100%'>
                <HStack w='100%' justifyContent={'space-between'} alignItems={'center'}>
                <Text {...Title_lg}>나의 주문</Text>
                <MdChevronRight onClick={() => navigate('/customer/order')} size={'30px'}/>
                </HStack>


                <HStack w='100%' justifyContent={'space-around'} gap={2}>
                <Box border={'1px solid #f1f1f1'} mb={4} rounded={'lg'} bgColor={'white'} p={4} boxShadow={'lg'} w='100%'>
                        <VStack justifyContent={'space-between'} h='100%' p={1}>
                            <Text color={'red.500'} fontSize={'xl'}>1건</Text>
                            <Text fontSize={'sm'}>진행중 주문</Text>
                        </VStack>
                        </Box>

                        <Box border={'1px solid #f1f1f1'} mb={4} rounded={'lg'} bgColor={'white'} p={4} boxShadow={'lg'} w='100%'>
<VStack justifyContent={'space-between'} h='100%' p={1}>
<Text color={'red.500'} fontSize={'xl'}>3개</Text>
                            <Text fontSize={'sm'}>쿠폰함</Text>
                        </VStack>
</Box>
<Box border={'1px solid #f1f1f1'} mb={4} rounded={'lg'} bgColor={'white'} p={4} boxShadow={'lg'} w='100%'>
                        <VStack justifyContent={'space-between'} h='100%' p={1}>
                        <Text color={'red.500'} fontSize={'xl'}>2,000</Text>
                        <Text fontSize={'sm'}>포인트</Text>
                        </VStack>
</Box>
                    </HStack>

                            </VStack>
            </Center>
        </Stack>
    </Flex>
  )
}

export default Main