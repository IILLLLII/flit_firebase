import { Avatar, Box, Button, Center, Checkbox, CheckboxGroup, Flex, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, StackDivider, Text, VStack, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MobileStatus from "../../Components/MobileStatus";
import { Title_lg, fontColor } from "../../Style/Typograhy";
import { ArrowRightIcon, CalendarIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { addDocument, formattedAmount, getDate, getDocument, getOrder, getTime, parseDate } from "../../DB/function";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
const Purchase = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userInfo, setUserInfo] = useState({})
    const [openDate, setOpenDate] = useState(false)
    const [openCoupon, setOpenCoupon] = useState(false)
    const [coupon, setCoupon] = useState([
        {
            name: '1000원 할인 쿠폰',
            discount: 1000
        }
    ])
    const [orderInfo, setOrderInfo] = useState(location.state)
    const [comment_owner, setCommentOwner] = useState('');
    const [payment, setPayment] = useState('일반 카드 결제')
    const [couponDiscount, setCouponDiscount] = useState({})
    const [pointDiscount, setPointDiscount] = useState({
        use : '미사용',
        discount: 0,
        total: 3000
    })
    const [receipt, setReceipt] = useState('미사용')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [agree, setAgree] = useState([])

    useEffect(() => {
        console.log('purchase', location.state)
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        const user = await getDocument("Customer", localStorage.getItem('customerToken'))
        setUserInfo(user);
    }

    const onPurchase = async() => {
        // 구매(PG사 api 연결)

        // order table insert
        await addDocument('Order', {
            ...orderInfo,
            timestamp: serverTimestamp(),
            isReview: false,
            sender: {
                name: userInfo.name,
                number: userInfo.number,
                comment_owner: comment_owner,
            },
            payment: {
                method: payment,
                coupon: couponDiscount ? couponDiscount : null,
                point: pointDiscount,
                totalCost: orderInfo.order.totalCost - (couponDiscount.discount ? couponDiscount.discount : 0) - (pointDiscount.use === "사용" ? pointDiscount.discount : 0),
                receipt: receipt
            },
            customerId: localStorage.getItem('customerToken'),
            ownerId: orderInfo.product[0].product.ownerId,
            order: {...orderInfo.order, 
                state : '미접수',
                orderName: `${orderInfo.product[0].product.product_name} ${orderInfo.product.length > 2 ? '외 ' + (orderInfo.product.length - 1) + '건' : ""}`
            }
        })

        console.log({
            ...orderInfo,
            timestamp: serverTimestamp(),
            sender: {
                name: userInfo.name,
                number: userInfo.number,
                comment_owner: comment_owner,
            },
            payment: {
                method: payment,
                coupon: couponDiscount ? couponDiscount : null,
                point: pointDiscount,
                totalCost: orderInfo.order.totalCost - (couponDiscount.discount ? couponDiscount.discount : 0) - (pointDiscount.use === "사용" ? pointDiscount.discount : 0),
                receipt: receipt
            },
            customerId: localStorage.getItem('customerToken'),
            ownerId: orderInfo.product[0].product.ownerId,
            order: {...orderInfo.order, 
                orderName: `${orderInfo.product[0].product.product_name} ${orderInfo.product.length > 2 ? '외 ' + (orderInfo.product.length - 1) + '건' : ""}`
            }
        })
    }

    return (
        <Flex bgColor={'white'} flexDirection={'column'} w="100%">
            <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
                <MobileStatus title={`주문하기`} isHome={true} />
            </Flex>

            <Stack mt={'50px'} mb={'80px'}>
                {localStorage.getItem('Cart') === "픽업" &&
                    <Stack p={4} bgColor={'white'}>
                        <Text {...Title_lg}>픽업정보</Text>
                        <HStack>
                            <Avatar src={orderInfo.owner.profileImage}/>
                            <Stack gap={0}>

                            <Text fontWeight={'bold'}>{orderInfo.owner.name}</Text>
                            <Text>{orderInfo.owner.address}</Text>
                            </Stack>
                        </HStack>

                        <HStack justifyContent={'space-between'}>
                            <HStack>
                                <CalendarIcon />
                                <Input borderColor={'#d9d9d9'}type="date" defaultValue={orderInfo.order.date}/>
                                <Input borderColor={'#d9d9d9'}type="time" defaultValue={orderInfo.order.time}/>
                                {/* <Text>{parseDate(date).getMonth() + 1}/{parseDate(date).getDate()}({days[parseDate(date).getDay()]})</Text>
                                <Text>{time}</Text> */}
                            </HStack>
                            {/* <Button size={'sm'}>변경</Button> */}
                        </HStack>
                    </Stack>
                }
                {localStorage.getItem('Cart') === "배송" &&
                    <Stack p={4} bgColor={'white'}>
                        <Text {...Title_lg}>배송정보</Text>

                        <HStack justifyContent={'space-between'}>
                            <HStack>
                                <CalendarIcon />
                                <Input/>
                                {/* <Text>{parseDate(date).getMonth() + 1}/{parseDate(date).getDate()}({days[parseDate(date).getDay()]})</Text>
                                <Text>{time}</Text> */}
                            </HStack>
                            {/* <Button size={'sm'} onClick={() => setOpenDate(!openDate)}>변경</Button> */}
                        </HStack>
                        {openDate &&
                            <Stack>
                                <Input borderColor={'#d9d9d9'}type="date" defaultValue={getDate(new Date())} />
                                <Flex overflowX='auto' className="scroll">
                                    <HStack>
                                        <Button>11:00</Button>
                                        <Button>12:00</Button>
                                        <Button>13:00</Button>
                                        <Button>14:00</Button>
                                        <Button>15:00</Button>
                                        <Button>16:00</Button>
                                        <Button>17:00</Button>
                                        <Button>18:00</Button>
                                    </HStack>
                                </Flex>
                            </Stack>
                        }
                    </Stack>
                }
                {userInfo &&
                    <Stack bgColor={'white'} p={4}>
                        <Text {...Title_lg}>예약자 정보</Text>
                        <HStack mb={1}>
                            <Avatar mr={1} src={userInfo.profile_image}></Avatar>
                            <Text>{userInfo.name}</Text>
                        </HStack>
                        <Input borderColor={'#d9d9d9'}mb={1} w='auto' defaultValue={userInfo.number} onChange={(e) => setUserInfo({...userInfo, number: e.target.value})} />
                        <HStack mb={1} alignItems={'flex-end'}>
                            <Checkbox mr={2}>안심번호 사용</Checkbox>
                            <Text fontSize='sm' color="gray.500">자세히</Text>
                        </HStack>
                    </Stack>
                }
                {localStorage.getItem('Cart') === "배송" &&
                    <Stack p={4} bgColor={'white'}>
                        <Text {...Title_lg}>배송정보</Text>

                        <Text>{userInfo.address}</Text>
                        <Input borderColor={'#d9d9d9'}defaultValue={userInfo.detail_address} />
                    </Stack>
                }
                {localStorage.getItem('Cart') === "배송" &&
                    <Stack p={4} bgColor={'white'} spacing={4}>
                        <Stack>
                            <Text {...Title_lg}>받는 분</Text>

                            <Input borderColor={'#d9d9d9'}placeholder="이름"></Input>
                            <Input borderColor={'#d9d9d9'}placeholder="핸드폰 번호"></Input>
                        </Stack>
                        <Stack>

                            <Text {...Title_lg}>보내는 분</Text>
                            <Input borderColor={'#d9d9d9'}defaultValue={userInfo.nickname}></Input>
                            <Checkbox colorScheme="red" defaultChecked={true}>닉네임 사용</Checkbox>
                        </Stack>
                    </Stack>
                }
                <Stack p={4} bgColor={'white'}>
                    <Text {...Title_lg}>요청사항</Text>
                    <Stack>
                        <Text mb={1}>가게 사장님께</Text>
                        <Input borderColor={'#d9d9d9'}w='auto' placeholder="예)" onChange={(e) => setCommentOwner(e.target.value)}></Input>
                    </Stack>
                    {localStorage.getItem('Cart') === "배송" &&
                        <Stack>
                            <Text>라이더님께</Text>
                            <Input borderColor={'#d9d9d9'}placeholder="예)"></Input>
                        </Stack>
                    }
                </Stack>
                <Stack p={4} bgColor={'white'}>
                    <Text {...Title_lg}>결제수단</Text>
                    <RadioGroup defaultValue={payment} onChange={(value) => setPayment(value)}>
                        <Stack>
                            <Radio mb={1} colorScheme={'red'} value={'일반 카드 결제'}>일반 카드 결제</Radio>
                            <Radio mb={1} colorScheme={'red'} value={'토스'}>토스</Radio>
                            <Radio mb={1} colorScheme={'red'} value={'네이버페이'}>네이버페이</Radio>
                            <Radio mb={1} colorScheme={'red'} value={'계좌이체 / 무통장 입금'}>계좌이체 / 무통장 입금</Radio>
                            <Radio mb={1} colorScheme={'red'} value={'휴대폰 결제'}>휴대폰 결제</Radio>
                        </Stack>
                    </RadioGroup>
                </Stack>


                <Stack p={4} bgColor={'white'}>
                    <HStack justifyContent={'space-between'}>
                        <Text {...Title_lg}>할인쿠폰</Text>
                        <Button onClick={() => setOpenCoupon(true)} size={'sm'} variant={'ghost'} rightIcon={<ChevronRightIcon />}>{coupon.length}개보유</Button>
                    </HStack>
                    <Text>{couponDiscount.name}</Text>
                    <Modal isOpen={openCoupon} size={"full"} onClose={() => setOpenCoupon(false)}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>할인쿠폰</ModalHeader>
                            <ModalCloseButton />
                            <Stack p={4}>
                                <Text color={fontColor.primary} fontSize={'sm'}>* 중복할인 불가</Text>
                                <VStack>
                                    {coupon.map((value, index) => (
                                        <Center onClick={() => {setCouponDiscount(value); setOpenCoupon(false);}} w="100%" h="140px" bgColor={'gray.200'} borderRadius={'lg'}>
                                            <Text>{value.name}</Text>
                                        </Center>
                                    ))}

                                </VStack>
                            </Stack>

                        </ModalContent>

                    </Modal>
                </Stack>

                <Stack p={4} bgColor={'white'}>
                    <Text {...Title_lg}>플릿포인트</Text>
                    <HStack justifyContent={'space-between'}>

                        <Input borderColor={'#d9d9d9'}type="number" onChange={(e) => setPointDiscount({...pointDiscount, discount : e.target.value})} placeholder={`${pointDiscount.total}원 사용 가능`} maxWidth={'150px'} />
                        <RadioGroup defaultValue={pointDiscount.use} onChange={(value) => setPointDiscount({...pointDiscount, use : value})}>
                            <HStack>
                                <Radio colorScheme="red" mr={2} value="미사용">미사용</Radio>
                                <Radio colorScheme="red" value="사용">사용</Radio>
                            </HStack>
                        </RadioGroup>
                    </HStack>
                </Stack>

                <Stack p={4} bgColor={'white'}>
                    <Text {...Title_lg}>현금영수증</Text>
                    <HStack justifyContent={'flex-end'}>

                        <RadioGroup defaultValue={receipt} onChange={(value) => setReceipt(value)}>
                            <HStack>
                                <Radio colorScheme="red" mr={2} value="미사용">미사용</Radio>
                                <Radio colorScheme="red" value="사용">사용</Radio>
                            </HStack>
                        </RadioGroup>
                    </HStack>
                </Stack>

                <Stack p={4} bgColor={'white'}>
                    <Text {...Title_lg}>결제금액</Text>

                    <Stack>
                        <HStack mb={1} justifyContent={'space-between'}>
                            <Text>주문금액</Text>
                            <Text>{formattedAmount(orderInfo.order.totalCost)}원</Text>
                        </HStack>
                        <HStack mb={1} justifyContent={'space-between'}>
                            <Text>할인쿠폰</Text>
                            <Text>-{formattedAmount(couponDiscount.discount ? couponDiscount.discount : 0)}원</Text>
                        </HStack>
                        <HStack mb={1} justifyContent={'space-between'}>
                            <Text>플릿포인트</Text>
                            <Text>-{formattedAmount(pointDiscount.use === "사용" ? pointDiscount.discount : 0)}원</Text>
                        </HStack>

                        <Box w="100%" h={'2px'} bgColor={'gray.400'} />

                        <HStack marginY={2} justifyContent={'space-between'} fontSize={'lg'}>
                            <Text>총 결제 금액</Text>
                            <Text color={fontColor.primary} fontWeight={'bold'}>{formattedAmount(orderInfo.order.totalCost - (couponDiscount.discount ? couponDiscount.discount : 0) - (pointDiscount.use === "사용" ? pointDiscount.discount : 0))}원</Text>
                        </HStack>

                    </Stack>
                </Stack>

                <Stack p={4}>
                    <CheckboxGroup onChange={(value) => setAgree(value)}>
                        <HStack mb={2} justifyContent={'space-between'}>
                            <Checkbox colorScheme="red" value={'0'}>상품 주의 사항</Checkbox>
                            <Text color={'gray.400'} >보기</Text>
                        </HStack>
                        <HStack mb={2} justifyContent={'space-between'}>

                            <Checkbox colorScheme="red" value={'1'}>개인정보 3자 제공</Checkbox>
                            <Text color={'gray.400'} >보기</Text>
                        </HStack>
                    </CheckboxGroup>

                    <Text textAlign={'center'}>위 내용을 확인하였으며 결제에 동의합니다.</Text>
                </Stack>

            </Stack>

            <Flex borderTop={'1px solid #d9d9d9'} bgColor={'white'} position={'fixed'} w={'100%'} bottom={0} alignSelf={'center'} p={"10px"}>

                <Button isDisabled={agree.length !== 2} onClick={onOpen} w="100%" variant={'outline'} mb={0} colorScheme="red" justifyContent={'space-around'}>
                    <Text w={'100px'}></Text>
                    <Text>{localStorage.getItem('Cart')} 주문하기</Text>
                    <Text w={'100px'}>{formattedAmount(orderInfo.order.totalCost - (couponDiscount.discount ? couponDiscount.discount : 0) - (pointDiscount.use === "사용" ? pointDiscount.discount : 0))}원</Text>
                </Button>
            </Flex>

            <Modal isOpen={isOpen} onClose={() => {console.log('close')}} size={'full'}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalBody>
                        <Center>

                        <Button onClick={() => {onPurchase(); onClose(); navigate('/customer/purchase/complete')}}>결제하기 테스트</Button>
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    )

}
export default Purchase;