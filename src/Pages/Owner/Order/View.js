import { Text, Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Container, HStack, Image, VStack, Select, Input, Button, Flex, Circle, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import { formattedAmount, getDate, getTime } from "../../../DB/function";
import { CheckIcon } from "@chakra-ui/icons";
import { postOrder } from "./barogo";

const OrderView = () => {
    const location = useLocation();
    const [orderType, setOrderType] = useState(0)
    const [orderInfo, setOrderInfo] = useState(location.state.order);
    const [step, setStep] = useState(0);
    const [barogo, setBarogo] = useState({});
    useEffect(() => {
        console.log(orderInfo)

        setBarogo({
            distance: 1.4,
            distance_fee: 3000,
            weather: 800,
            vat: 380,
            rider_time: 15,
        })
    }, [])

    const getBarogo = async () => {
        let ref = await postOrder(orderInfo);
    }
    return (
        <Box>
            <Container maxW={'container.xl'} p={[2, 4]}>
                <Card>
                    <CardHeader>
                        <Heading size='md'>주문정보 상세</Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack divider={<StackDivider borderColor={"#d9d9d9"} />} spacing='4'>
                            <Box>
                                <HStack alignItems={'center'}>
                                    <Text fontSize='sm' textTransform='uppercase'>
                                        주문번호
                                    </Text>
                                    <Text fontSize='sm'>
                                        {orderInfo.id}
                                    </Text>
                                    <Text>|</Text>
                                    <Text fontSize='sm' textTransform='uppercase'>
                                        주문일자
                                    </Text>
                                    <Text fontSize='sm'>
                                        {getDate(orderInfo.timestamp)} {getTime(orderInfo.timestamp)}
                                    </Text>
                                </HStack>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    주문상품
                                </Heading>
                                {
                                    orderInfo.product.map((value, index) => (
                                        <Stack>
                                            <HStack key={index} alignItems={'center'}>
                                                <Image src={value.product.thumbnail_image} alt={'product_image'} boxSize={100} pt={2} pr={2} />
                                                <Stack spacing={0}>
                                                    <Text fontSize='sm'>
                                                        {`${value.product.product_name} (${value.product.id})`}
                                                    </Text>
                                                    {orderInfo.product.option?.map((value, index) => (
                                                        <Text color={'#8c8c8c'} fontSize='sm'>
                                                            {value}
                                                        </Text>
                                                    ))}
                                                    <Text fontSize='sm'>
                                                        {formattedAmount(value.total_cost)}원 | {value.product_count}개
                                                    </Text>
                                                </Stack>
                                            </HStack>
                                        </Stack>
                                    ))
                                }

                            </Box>
                            <Box>
                <Heading size='xs' textTransform='uppercase'>
                  상세정보
                </Heading>
                <Text pt='2' fontSize='sm'>
                    <HStack gap={0} w='100%' justifyContent={'center'}>
                        <Circle w='25px' h='25px' bg={step > 0 ? '#da4359' : 'gray.400'}>
                            <Center><CheckIcon color='white' /></Center>
                            </Circle>
                        <Box w='22%' h='3px' bg={step > 0 ? '#da4359' : 'gray.400'}/>
                        <Circle w='25px' h='25px' bg={step > 1 ? '#da4359' : 'gray.400'}>
                            <Center><CheckIcon color='white' /></Center>
                            </Circle>
                        <Box w='22%' h='3px' bg={step > 1 ? '#da4359' : 'gray.400'}/>
                        <Circle w='25px' h='25px' bg={step > 2 ? '#da4359' : 'gray.400'}>
                            <Center><CheckIcon color='white' /></Center>
                            </Circle>
                        <Box w='22%' h='3px' bg={step > 2 ? '#da4359' : 'gray.400'}/>
                        <Circle w='25px' h='25px' bg={step > 3 ? '#da4359' : 'gray.400'}>
                            <Center><CheckIcon color='white' /></Center>
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

                    <Center>
                        <Button colorScheme="red" variant={'outline'} borderRadius={'full'}>다음</Button>
                    </Center>

                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  주문자 정보
                </Heading>
                <VStack alignItems='flex-start' pt={4} pl={4}>
                  <HStack>
                    <Text fontSize={'sm'} width="100px">주문자</Text>
                    <Text fontSize={'sm'}>{orderInfo.sender.name}</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={'sm'} width="100px">전화</Text>
                    <Text fontSize={'sm'}>{orderInfo.sender.number}</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={'sm'} width="100px">배송희망일</Text>
                    <Text fontSize={'sm'}>{orderInfo.order.date} {orderInfo.order.time}</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={'sm'} width="100px">요청사항</Text>
                    <Text fontSize={'sm'}>{orderInfo.sender.comment_order}</Text>
                  </HStack>
                </VStack>
              </Box>
              {orderInfo.order.type === "배송" &&
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  수령인 정보
                </Heading>
                <VStack alignItems='flex-start' pt={4} pl={4}>
                  <HStack>
                    <Text fontSize={'sm'} width="100px">수령인</Text>
                    <Text fontSize={'sm'}>{orderInfo.receiver_name}</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={'sm'} width="100px">전화</Text>
                    <Text fontSize={'sm'}>{orderInfo.receiver_number}</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={'sm'} width="100px">주소</Text>
                    <Text fontSize={'sm'}>
                      {`(${orderInfo.receiver_zipCode}) ${orderInfo.receiver_address} ${orderInfo.receiver_detail_address}`}
                    </Text>
                  </HStack>
                </VStack>
              </Box>
}
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  결제 정보
                </Heading>
                <VStack alignItems='flex-start' pt={4} pl={4}>
                  <HStack>
                    <Text fontSize={'sm'} width="100px">방법</Text>
                    <Text fontSize={'sm'}>{orderInfo.payment_method} {orderInfo.payment_info}</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={'sm'} width="100px">금액</Text>
                    <Text fontSize={'sm'}>{orderInfo.product_cost}</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize={'sm'} width="100px">배송비</Text>
                    <Text fontSize={'sm'}>{orderInfo.payment_delivery}</Text>
                  </HStack>
                </VStack>
                <HStack w={'100%'} p={4} mt={2} backgroundColor="#f1f1f1">
                  <Text fontWeight={'bold'} fontSize={'sm'} width="100px">총 결제금액</Text>
                  <Text fontWeight={'bold'} fontSize={'sm'}>{orderInfo.payment_cost}</Text>
                </HStack>
              </Box>
              {orderInfo.order_type !== 2 &&

                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    배송 정보
                  </Heading>
                  <VStack alignItems='flex-start' pt={4}>
                    <Select borderColor={"#d9d9d9"}variant='outline' onChange={(e) => setOrderType(JSON.parse(e.target.value))}>
                      <option value={0}>{'바로고배송'}</option>
                      <option value={1}>{'일반배송'}</option>
                    </Select>
                  </VStack>
                </Box>
              }

              {orderType === 0 &&
                <Box>
                  <VStack alignItems='flex-start' >
                    <HStack w={'100%'} pl={4} pb={4} borderBottomWidth={1} borderColor='#d9d9d9'>
                      <Text fontWeight={'bold'} fontSize={'sm'} width="100px">잔여 포인트</Text>
                      {/* <Text fontWeight={'bold'} fontSize={'sm'}>{orderInfo.barogo_point}</Text> */}
                    </HStack>
                    <HStack w={'100%'} pl={4}>
                      <Text fontSize={'sm'} width="100px">상품준비시간</Text>
                      <Select>
                        <option>10분</option>
                        <option>30분</option>
                        <option>60분</option>
                        </Select>
                    </HStack>
                  </VStack>
                  <HStack p={4} mt={4} borderBottomWidth={1} borderColor='#d9d9d9' backgroundColor="#f1f1f1" w={'100%'} justifyContent={'space-between'}>
                    <Text fontWeight={'bold'} fontSize={'sm'} width="100px">바로고</Text>
                    {/* <Text fontWeight={'bold'} fontSize={'sm'}>대행료 합계 {formattedAmount(orderInfo.order.totaDeliveryCost)}</Text> */}
                  </HStack>
                  <VStack p={4} backgroundColor="#f1f1f1">
                    <HStack w={'100%'} justifyContent={'space-between'}>
                      <Text fontSize={'sm'}>{`거리비례 대행료(${barogo?.distance}km)`}</Text>
                      <Text fontSize={'sm'}>{formattedAmount(barogo?.distance_fee)}원</Text>
                    </HStack>
                    <HStack w={'100%'} justifyContent={'space-between'}>
                      <Text fontSize={'sm'}>우천할증</Text>
                      <Text fontSize={'sm'}>{formattedAmount(barogo?.weather)}원</Text>
                    </HStack>
                    <HStack w={'100%'} justifyContent={'space-between'}>
                      <Text fontSize={'sm'}>부가세</Text>
                      <Text fontSize={'sm'}>{formattedAmount(barogo?.vat)}원</Text>
                    </HStack>
                  </VStack>
                  <VStack alignItems={'flex-end'}>
                    <Text color='#8c8c8c' fontSize={'sm'}>라이더 픽업 예상 시간에 맞춰 상품을 준비해주세요.</Text>
                    <HStack alignItems={'center'}><Text color='#da4359' fontSize={'lg'}>{barogo?.rider_time}분 후</Text> <Text fontSize={'md'}>라이더 픽업예상</Text></HStack>
                    <Button onClick={() => getBarogo()} variant={'outline'} colorScheme='pink' size={'lg'}>배달요청</Button>
                  </VStack>
                </Box>
              }

              {orderType === 1 &&
                <Box>
                  <VStack alignItems='flex-start' p={4}>
                    <Text fontWeight={'bold'} fontSize={'sm'} width="100px">배송사</Text>
                    <Input borderColor={'#d9d9d9'}/>
                    <Text fontWeight={'bold'} fontSize={'sm'} width="100px">라이더 이름</Text>
                    <Input borderColor={'#d9d9d9'}/>
                    <Text fontWeight={'bold'} fontSize={'sm'} width="100px">라이더 전화번호</Text>
                    <Input borderColor={'#d9d9d9'}/>
                  </VStack>
                  <VStack alignItems={'flex-end'}>
                    <Text color='#8c8c8c' fontSize={'sm'}>해당 내용은 고객에게 제공됩니다.</Text>
                    <Button variant={'outline'} colorScheme='pink' size={'lg'}>저장</Button>
                  </VStack>

                </Box>
              }

                        </Stack>
                    </CardBody>
                </Card>
            </Container>
        </Box>
    )

}
export default OrderView;