import { Avatar, Box, Button, Checkbox, CheckboxGroup, Flex, HStack, Input, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MobileStatus from "../../Components/MobileStatus";
import { Title_lg, fontColor } from "../../Style/Typograhy";
import { ArrowRightIcon, CalendarIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { getDate, getDocument, parseDate } from "../../DB/function";
import { Link } from "react-router-dom";
const Purchase = () => {
    const days = ['일', '월', '화', '수', '목', '금', '토']
    const [date, setDate] = useState('2023-07-29')
    const [time, setTime] = useState('12:00')
    const [userInfo, setUserInfo] = useState({})
    const [openDate, setOpenDate] = useState(false)
    const [openCoupon, setOpenCoupon] = useState(false)
    const [coupon, setCoupon] = useState([0, 1, 2, 3,])

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        const user = await getDocument("Customer", localStorage.getItem('customerToken'))
        setUserInfo(user);
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

                        <HStack justifyContent={'space-between'}>
                            <HStack>
                                <CalendarIcon />
                                <Text>{parseDate(date).getMonth() + 1}/{parseDate(date).getDate()}({days[parseDate(date).getDay()]})</Text>
                                <Text>{time}</Text>
                            </HStack>
                            <Button size={'sm'}>변경</Button>
                        </HStack>
                    </Stack>
                }
                {localStorage.getItem('Cart') === "배송" &&
                    <Stack p={4} bgColor={'white'}>
                        <Text {...Title_lg}>배송정보</Text>

                        <HStack justifyContent={'space-between'}>
                            <HStack>
                                <CalendarIcon />
                                <Text>{parseDate(date).getMonth() + 1}/{parseDate(date).getDate()}({days[parseDate(date).getDay()]})</Text>
                                <Text>{time}</Text>
                            </HStack>
                            <Button size={'sm'} onClick={() => setOpenDate(!openDate)}>변경</Button>
                        </HStack>
                        {openDate &&
                            <Stack>
                                <Input type="date" defaultValue={getDate(new Date())} />
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
                        <Input mb={1} w='auto' defaultValue={userInfo.number} />
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
                        <Input defaultValue={userInfo.detail_address} />
                    </Stack>
                }
                {localStorage.getItem('Cart') === "배송" &&
                    <Stack p={4} bgColor={'white'} spacing={4}>
                        <Stack>
                            <Text {...Title_lg}>받는 분</Text>

                            <Input placeholder="이름"></Input>
                            <Input placeholder="핸드폰 번호"></Input>
                        </Stack>
                        <Stack>

                            <Text {...Title_lg}>보내는 분</Text>
                            <Input defaultValue={userInfo.nickname}></Input>
                            <Checkbox colorScheme="red" defaultChecked={true}>닉네임 사용</Checkbox>
                        </Stack>
                    </Stack>
                }
                <Stack p={4} bgColor={'white'}>
                    <Text {...Title_lg}>요청사항</Text>
                    <Stack>
                        <Text mb={1}>가게 사장님께</Text>
                        <Input w='auto' placeholder="예)"></Input>
                    </Stack>
                    {localStorage.getItem('Cart') === "배송" &&
                        <Stack>
                            <Text>라이더님께</Text>
                            <Input placeholder="예)"></Input>
                        </Stack>
                    }
                </Stack>
                <Stack p={4} bgColor={'white'}>
                    <Text {...Title_lg}>결제수단</Text>
                    <RadioGroup defaultValue={'일반 카드 결제'}>
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
                    <Modal isOpen={openCoupon} size={"full"} onClose={() => setOpenCoupon(false)}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>할인쿠폰</ModalHeader>
                            <ModalCloseButton />
                            <Stack p={4}>
                                <Text color={fontColor.primary} fontSize={'sm'}>* 중복할인 불가</Text>
                                <VStack>
                                    {coupon.map((value, index) => (
                                        <Flex w="100%" h="140px" bgColor={'gray.200'} borderRadius={'lg'} />
                                    ))}

                                </VStack>
                            </Stack>

                        </ModalContent>

                    </Modal>
                </Stack>

                <Stack p={4} bgColor={'white'}>
                    <Text {...Title_lg}>플릿포인트</Text>
                    <HStack justifyContent={'space-between'}>

                        <Input placeholder="3000원 사용 가능" maxWidth={'150px'} />
                        <RadioGroup defaultValue="미사용">
                            <HStack>
                                <Radio mr={2} value="미사용">미사용</Radio>
                                <Radio value="사용">사용</Radio>
                            </HStack>
                        </RadioGroup>
                    </HStack>
                </Stack>

                <Stack p={4} bgColor={'white'}>
                    <Text {...Title_lg}>현금영수증</Text>
                    <HStack justifyContent={'flex-end'}>

                        <RadioGroup defaultValue="미사용">
                            <HStack>
                                <Radio mr={2} value="미사용">미사용</Radio>
                                <Radio value="사용">사용</Radio>
                            </HStack>
                        </RadioGroup>
                    </HStack>
                </Stack>

                <Stack p={4} bgColor={'white'}>
                    <Text {...Title_lg}>결제금액</Text>

                    <Stack>
                        <HStack mb={1} justifyContent={'space-between'}>
                            <Text>주문금액</Text>
                            <Text>16,800원</Text>
                        </HStack>
                        <HStack mb={1} justifyContent={'space-between'}>
                            <Text>할인쿠폰</Text>
                            <Text>-1,000원</Text>
                        </HStack>
                        <HStack mb={1} justifyContent={'space-between'}>
                            <Text>플릿포인트</Text>
                            <Text>-2,000원</Text>
                        </HStack>

                        <Box w="100%" h={'2px'} bgColor={'gray.400'} />

                        <HStack marginY={2} justifyContent={'space-between'} fontSize={'lg'}>
                            <Text>총 결제 금액</Text>
                            <Text color={fontColor.primary} fontWeight={'bold'}>13,800원</Text>
                        </HStack>

                    </Stack>
                </Stack>

                <Stack p={4}>
                    <CheckboxGroup>
                        <HStack mb={2} justifyContent={'space-between'}>
                            <Checkbox>상품 주의 사항</Checkbox>
                            <Text color={'gray.400'} >보기</Text>
                        </HStack>
                        <HStack mb={2} justifyContent={'space-between'}>

                            <Checkbox>개인정보 3자 제공</Checkbox>
                            <Text color={'gray.400'} >보기</Text>
                        </HStack>
                    </CheckboxGroup>

                    <Text textAlign={'center'}>위 내용을 확인하였으며 결제에 동의합니다.</Text>
                </Stack>

            </Stack>

            <Flex borderTop={'1px solid #d9d9d9'} bgColor={'white'} position={'fixed'} w={'100%'} bottom={0} alignSelf={'center'} p={"10px"}>

                <Button w="100%" variant={'outline'} mb={0} colorScheme="red" justifyContent={'space-around'}>
                    <Text w={'100px'}></Text>
                    <Text>{localStorage.getItem('Cart')} 주문하기</Text>
                    <Text w={'100px'}>13,800원</Text>
                </Button>
            </Flex>
        </Flex>
    )

}
export default Purchase;