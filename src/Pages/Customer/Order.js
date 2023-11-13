import React, { useEffect, useState } from 'react'
import MobileStatus from '../../Components/MobileStatus'
import { Badge, Box, Button, Center, Circle, Flex, HStack, Image, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import { formattedAmount, getDate, getOrder, getTime, parseDate } from '../../DB/function'
import { CheckIcon, PhoneIcon } from '@chakra-ui/icons'

function Order() {
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
    <Flex flexDirection={'column'} w="100%">
    <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
        <MobileStatus title={"주문내역"} />

    </Flex>
    <Flex mt={'50px'} w='100%'>
                <Tabs w='100%' isFitted colorScheme='red'>
                    <TabList>
                    <Tab>진행중</Tab>
                <Tab>완료</Tab>
                <Tab>취소</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <VStack>
                                {orderList?.map((order, index) => (
                                    <HStack>
                                        <Box w='30%'>
                                            <VStack>
                                            <Image src={order.owner.profileImage}/>
                                            <Text fontSize={'xs'} color={'gray.500'}>주문일시 : {getDate(order.timestamp)} {getTime(order.timestamp)}</Text>
                                            <Badge>{order.order.type}주문</Badge>
                                            </VStack>
               
                                        </Box>
                                        <Flex w='70%'>
                                            <Stack w='100%'>
                                                <HStack w='100%' justifyContent={'space-between'}>
                                                    <Stack>
                                                        <HStack>
                                                        <Text>{order.owner.name}</Text>
                                                        <PhoneIcon/>
                                                        </HStack>
                                                        <Text>{order.order.orderName}</Text>
                                                        <Text>{formattedAmount(order.order.totalCost)}원</Text>
                                                    </Stack>
                                                    <VStack>
                                                        <Text color={'#da4359'}>{parseDate(order.order.date).getMonth() + 1}/{parseDate(order.order.date).getDate()}({DAY[parseDate(order.order.date).getDay()]})</Text>
                                                        <Input borderColor={'#da4359'} isDisabled _disabled={{borderColor: '#da4359'}} w='80px' type='texr' size={'lg'} value={order.order.time}></Input>
                                                    </VStack>
                                                </HStack>
                                                <Text pt='2' fontSize='sm'>
                    <HStack gap={0} w='100%' justifyContent={'center'}>
                        <Circle w='25px' h='25px' bg={step > 0 ? '#da4359' : 'gray.400'}>
                            <Center bgColor={'transparent'}><CheckIcon color='white' /></Center>
                            </Circle>
                        <Box w='22%' h='3px' bg={step > 0 ? '#da4359' : 'gray.400'}/>
                        <Circle w='25px' h='25px' bg={step > 1 ? '#da4359' : 'gray.400'}>
                            <Center bgColor={'transparent'}><CheckIcon color='white' /></Center>
                            </Circle>
                        <Box w='22%' h='3px' bg={step > 1 ? '#da4359' : 'gray.400'}/>
                        <Circle w='25px' h='25px' bg={step > 2 ? '#da4359' : 'gray.400'}>
                            <Center bgColor={'transparent'}><CheckIcon color='white' /></Center>
                            </Circle>
                        <Box w='22%' h='3px' bg={step > 2 ? '#da4359' : 'gray.400'}/>
                        <Circle w='25px' h='25px' bg={step > 3 ? '#da4359' : 'gray.400'}>
                            <Center bgColor={'transparent'}><CheckIcon color='white' /></Center>
                            </Circle>
                    </HStack>
                    <Center w='100%'>
                        <HStack w='100%' justifyContent={'space-around'}>
                        <Text>접수완료</Text>
                        <Text>제작중</Text>
                        <Text>배송중</Text>
                        <Text>배송완료</Text>
                        </HStack>
                    </Center>
                </Text>
                                                <HStack w='100%'>
                                                    <Button w='100%'>{order.order.type === "픽업" ? "가게 위치 확인" : "배송지 확인"}</Button>
                                                    <Button w='100%'>취소 요청</Button>
                                                </HStack>
                                            </Stack>

                                        </Flex>
                                    </HStack>
                                ))}

                            </VStack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
        </Flex>
    </Flex>
  )
}

export default Order