import React, { useEffect, useState } from 'react'
import MobileStatus from '../../Components/MobileStatus'
import { Badge, Box, Button, Center, Circle, Flex, HStack, Image, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import { formattedAmount, getDate, getOrder, getTime, parseDate } from '../../DB/function'
import { CheckIcon, PhoneIcon } from '@chakra-ui/icons'
import { Title_lg, Title_xl } from '../../Style/Typograhy'
import { MdLocationPin, MdLocationSearching } from 'react-icons/md'

function Order() {
    const DAY = ['일', '월', '화', '수', '목', '금', '토'];
    const [step, setStep] = useState(3);
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
        <MobileStatus title={"주문내역"} />
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
                                    <>
                                    <Stack w='100%' border={'1px solid #d9d9d9'} p={4}>
                                        <HStack w='100%' justifyContent={'space-between'} alignItems={'flex-start'}>
                                            <Stack w={'60%'} gap={-1}>
                                                <HStack>
                                            <Text {...Title_xl} mb={0}>{order.owner.name}</Text>
                                            <PhoneIcon boxSize={'18px'}/>
                                            <MdLocationPin size={'20px'}/>
                                            </HStack>
                                            <Text fontSize={'xs'} color={'gray.500'}>{order.id}</Text>
                                                <Text color={'gray.500'}>{getDate(order.timestamp)} {getTime(order.timestamp)}</Text>
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
                        <Text fontSize={'xs'} color={'gray.500'}>접수완료</Text>
                        <Text fontSize={'xs'} color={'gray.500'}>제작중</Text>
                        <Text fontSize={'xs'} color={'gray.500'}>{order.order.type =="픽업" ? "픽업대기" : "배송중"}</Text>
                        <Text fontSize={'xs'} color={'gray.500'}>{order.order.type =="픽업" ? "픽업완료" : "배송완료"}</Text>
                        </HStack>
                    </Center>
                </Text>
                                            </Stack>
                                            <Image w='35%' src={order.owner.profileImage}/>
                                        </HStack>
                                        {order.product.map((value, index) => (
                                            <HStack w={'100%'}  alignItems={'flex-start'}>
                                                <Badge colorScheme='red' mt={1}>{index + 1}</Badge>
                                                <Stack gap={-1}>
                                                <Text>{value.product.product_name}</Text>
                                            {value.option?.map((option, index) => (
                                                <Text fontSize={'sm'} color={'gray.500'} key={index}>{option.name}</Text>
                                            ))}
                                                </Stack>
                                            </HStack>
                                        ))}

                                        <Text {...Title_lg}>합계 : {formattedAmount(order.order.totalCost)}</Text>
                                        {!(step > 2) ?                                          <Input _focus={{borderColor: 'gray.500'}} readOnly fontSize={'lg'} textAlign={'center'} color={'gray.500'} borderColor={'gray.500'} value={order.order.date + " " + order.order.time + " 예약"}></Input>
                                        :
                                        <Input _focus={{borderColor: 'red.500'}} readOnly fontSize={'lg'} textAlign={'center'} color={'red.500'} borderColor={'red.500'} value={(order.order.type == "픽업" ? "매장에서 상품을 픽업해주세요" : "30분 후 배송완료")}></Input>
                                            }
                                        {!(step > 1) && <Button>취소요청</Button>}
                                    </Stack>




                                    {/* <HStack border={'1px solid #d9d9d9'} p={4}>
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
                                    </HStack> */}
                                    </>
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