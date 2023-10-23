import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Alert, AlertIcon, Badge, Box, Button, Card, CardHeader, Center, Checkbox, CheckboxGroup, Circle, Flex, HStack, Heading, Image, Input, InputGroup, InputRightAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Stack, Tag, TagCloseButton, TagRightIcon, Text, Textarea, VStack, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { Body_lg, Body_sm, Title_2xl, Title_lg, Title_sm } from "../../../Style/Typograhy";
import { addDocument, formattedAmount, getDocument, getShop, updateData } from "../../../DB/function";
import { Label } from "../../../Components/Label";
import ImageUploader from "../../../Components/ImageUploader";
import { CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";
import Login from "../Login";
import PopupPostCode from "../../../Components/PopupPostCode";
import { MailInput, TextInput } from "../../../Components/Form";

const category = [
    '꽃 > 꽃다발', '꽃 > 꽃바구니', '꽃 > 플라워박스', '꽃 > 화병꽂이',
    '식물 > 동양난 | 서양난', '식물 > 다육 | 화분', '식물 > 공기정화 | 관엽',
    '화환 > 축하화환', '화환 > 근조화환', '화환 > 디자인화환',
    '조경 > 플랜테리어(실내조경)', '조경 > 가드닝(실외조경)',
    '프리미엄 > 웨딩 | 리마인드', '프리미엄 > 생일 | 파티 | 프로포즈', '프리미엄 > 백일 | 돌상', '프리미엄 > 애견', '프리미엄 > 시즌 | 행사'
]

const ShopView = () => {
    const [onlyweek, setOnlyWeek] = useState(false);
    const [onlyweekend, setOnlyWeekend] = useState(false);
    const [account, setAccout] = useState({});
    const [password, setPassword] = useState({
        oldPassword: '',
        newPassword: '',
        confirnPassword: ''
    })
    const [passwordError, setPasswordError] = useState(false)

    const [snsSite, setSite] = useState("Instagram");
    const [snsId, setSnsId] = useState("")

    // const [passwordSuccess, setPasswordSuccess] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [shopInfo, setShopInfo] = useState({
        shopname: '',
        nickname: '',
        follower: [],
        review: [],
        category: [],
        delivery: ['픽업', '배송'],
        use_bundle_delivery: false,
        bundle_delivery: 0,
        operate_time: {
            week_open: '09:00',
            week_close: '18:00',
            weekend_open: '09:00',
            weekend_close: '18:00',
        },
        reserve_time: {
            week_open: '09:00',
            week_close: '18:00',
            weekend_open: '09:00',
            weekend_close: '18:00',
        },
        break_time: {
            week_open: '09:00',
            week_close: '18:00',
            weekend_open: '09:00',
            weekend_close: '18:00',
        },
        holiday: [],
        sns: [],
        email: account.email,
        comment: ''
    })

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY)
    }, []);

    useEffect(() => {
        window.addEventListener('mousewheel', handleScroll);
        return () => {
            window.removeEventListener('mousewheel', handleScroll);
        };
    }, [handleScroll]);

    const [selTags, setTags] = useState(shopInfo.category)

    useEffect(() => {
        getAuth();
        getShopInfo();
    }, []);

    const getAuth = async () => {
        if (localStorage.getItem('ownerToken')) {
            console.log(localStorage.getItem('ownerToken'))
            let accout_ = await getDocument('Owner', localStorage.getItem('ownerToken'))
            setAccout(accout_)
        }
    }

    const getShopInfo = async () => {
        if (localStorage.getItem('ownerToken')) {
            let shop_ = await getShop(localStorage.getItem('ownerToken'))
            if(shop_.shopname)
                setShopInfo(shop_)
        }
    }

    const changePassword = async() => {
        if (password.oldPassword == account.password) {
            if (password.newPassword == password.confirnPassword) {
                setAccout({ ...account, password: password.newPassword })
                setPassword({
                    oldPassword: '',
                    newPassword: '',
                    confirnPassword: ''
                })
                localStorage.removeItem('ownerId');
                localStorage.removeItem('ownerPw');
                localStorage.removeItem('ownerToken');
                setPasswordError(false);
                onOpen();
                await updateData('Owner', account.id, { ...account, password: password.newPassword });
            }
            else {
                setPasswordError(true)
            }
        }
        else {
            setPasswordError(true)
        }
    }

    const addTag = (value) => {
        if (!selTags.includes(value))
            setTags([...selTags, value])

        setShopInfo({ ...shopInfo, category: [...selTags, value] })

    }

    const delTag = (value) => {
        let filtered = selTags.filter((element) => element !== value);
        setTags(filtered);

        setShopInfo({ ...shopInfo, category: filtered })
    }

    const submit = async() => {
        if (localStorage.getItem('ownerToken')) {
            let shop_ = await getShop(localStorage.getItem('ownerToken'))
            // if(shop_.shopname)
            await updateData('Shop', account.id, {...shopInfo, ownerId : account.id})
            // else
            // await addDocument('Shop', {...shopInfo, ownerId : account.id})
        }
    }

    return (
        
        <Box>
            {account &&
                <HStack width={'100%'} alignItems={'flex-start'}>
                    <Flex h={"100%"} minW={'410px'} display={{ base: 'none', md: 'block' }} bgColor={'white'} position={'fixed'}>
                        {/* <Text w="100%" textAlign={'center'} p={2} color={'gray.500'}>미리보기</Text> */}
                        {account.profileImage ? <Image src={account.profileImage} bgColor={'gray.300'} w='400px' h='400px' /> : <Box w={'400px'} h={'400px'} bgColor={'gray.300'} />}
                        <Center mt={"-150px"}>
                            <Circle w={'300px'} h="300px" bgColor={'white'}>
                                <VStack spacing={0} mt={'-100px'}>
                                    <HStack alignItems={'center'}>
                                        <Badge variant={'outline'}>{account.grade}</Badge>
                                        <Text {...Title_lg} mb={0}>{shopInfo.shopname}</Text>
                                    </HStack>
                                    <Text {...Body_lg}>{shopInfo.nickname}</Text>

                                    <HStack alignItems={'center'}>
                                        <Text {...Body_lg}>팔로워 {shopInfo.follower ? shopInfo.follower.length : 0} | 리뷰 {shopInfo.review?.length}</Text>
                                    </HStack>
                                </VStack>
                            </Circle>
                        </Center>
                        <Box bgColor={'white'} mt={'-150px'} p={4}>
                            <Label title={'카테고리'} description={shopInfo.category} />
                            <Label title={'배송'} description={shopInfo.delivery} />
                            {shopInfo.use_bundle_delivery && <Label title={'묶음배송'} text={formattedAmount(shopInfo.bundle_delivery) + "원 까지 묶음배송"} />}
                            <Label title={'위치'} text={account.address + " " + account.detail_address} />
                            <Label title={'운영시간'} text={(!onlyweekend ? "평일 " + shopInfo.operate_time.week_open + "~" + shopInfo.operate_time.week_close : "") + (!onlyweek && !onlyweekend ? " | " : "") + (!onlyweek ? ("주말 " + shopInfo.operate_time.weekend_open + "~" + shopInfo.operate_time.weekend_close) : "")} />
                            <Label title={'예약시간'} text={(!onlyweekend ? "평일 " + shopInfo.reserve_time.week_open + "~" + shopInfo.reserve_time.week_close : "") + (!onlyweek && !onlyweekend ? " | " : "") + (!onlyweek ? ("주말 " + shopInfo.reserve_time.weekend_open + "~" + shopInfo.reserve_time.weekend_close) : "")} />
                            <Label title={'브레이크타임'} text={(!onlyweekend ? "평일 " + shopInfo.break_time.week_open + "~" + shopInfo.break_time.week_close : "") + (!onlyweek && !onlyweekend ? " | " : "") + (!onlyweek ? ("주말 " + shopInfo.break_time.weekend_open + "~" + shopInfo.break_time.weekend_close) : "")} />
                            <Label title={'휴무일'} description={shopInfo.holiday} />
                            <Label title={'SNS'} children=
                                {
                                    <Stack direction={'column'} spacing={0}>

                                        {shopInfo.sns && shopInfo.sns.map((value, index) => (
                                            <Text {...Body_sm} mx={-1}>{value.site} {" | "} {value.account}</Text>
                                        ))}
                                    </Stack>
                                }
                            />
                            <Label title={'Email'} text={shopInfo.email} />
                            <Label title={'소개'} text={shopInfo.comment} />
                        </Box>

                    </Flex>

                    <Box w={'100%'} bgColor={'white'} ml={{base: '0px', md: '420px'}} borderLeft={{ md : '1px solid #d9d9d9', base: 'none'}}>
                    <Text {...Title_2xl} ml={4} color={'gray.800'}>
                상점 정보
            </Text>
                        <Accordion allowMultiple defaultIndex={[0, 1, 2, 3, 4, 5, 6, 7]}>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            <Text {...Title_lg}>프로필 설정</Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <HStack w={"100%"}>

                                        <ImageUploader w={'200px'} h={'200px'} src={account.profileImage} setUrl={(value) => setAccout({ ...account, profileImage: value })} />
                                        <VStack alignItems={'flex-start'} w={"100%"} p={6}>
                                            <Text>Shop 이름</Text>
                                            <Input maxLength={15} defaultValue={shopInfo.shopname} onChange={(e) => setShopInfo({ ...shopInfo, shopname: e.target.value })}></Input>
                                            <Text>닉네임</Text>
                                            <Input maxLength={15} defaultValue={shopInfo.nickname} onChange={(e) => setShopInfo({ ...shopInfo, nickname: e.target.value })}></Input>
                                        </VStack>
                                    </HStack>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            <Text {...Title_lg}>비밀번호 변경</Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <VStack alignItems={'flex-end'}>
                                        <Input value={password.oldPassword} type="password" placeholder="기존 비밀번호" onChange={(e) => setPassword({ ...password, oldPassword: e.target.value })} />
                                        <Input value={password.newPassword} type="password" placeholder="재설정할 비밀번호를 입력해주세요" onChange={(e) => setPassword({ ...password, newPassword: e.target.value })} />
                                        <Input value={password.confirnPassword} type="password" placeholder="비밀번호를 재입력해주세요" onChange={(e) => setPassword({ ...password, confirnPassword: e.target.value })} />
                                        {passwordError && <Alert status="error"><AlertIcon />{"입력한 정보를 다시 확인해주세요."}</Alert>}
                                        <Button colorScheme="red" onClick={() => changePassword()}>변경</Button>
                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            <Text {...Title_lg}>카테고리 설정</Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Select onChange={(e) => addTag(e.target.value)}>
                                        {category.map((value) => (
                                            <option value={value}>{value}</option>
                                        ))}
                                    </Select>

                                    <Wrap mx={1} my={4}>
                                        {selTags.map((value) => (
                                            <WrapItem>
                                                <Tag>
                                                    {value}
                                                    <TagCloseButton onClick={() => delTag(value)} />
                                                </Tag>
                                            </WrapItem>
                                        ))

                                        }
                                    </Wrap>
                                    <Text {...Body_sm} color={'gray.500'} mx={2}>상품과 맞지 않는 카테고리에 등록할 경우 강제 이동되거나 판매중지, 판매 금지 될 수 있습니다.</Text>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            <Text {...Title_lg}>배송 설정</Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>

                                    <Stack direction={'column'} spacing={2}>

                                        <HStack alignItems={'flex-start'}>
                                            <Text w={'150px'}>상품수령</Text>
                                            <CheckboxGroup defaultValue={shopInfo.delivery} onChange={(value) => setShopInfo({ ...shopInfo, delivery: value })}>
                                                <HStack w="100%">
                                                    <Checkbox value={'픽업'} colorScheme="red">픽업</Checkbox>
                                                    <Checkbox value={'배송'} colorScheme="red">배송</Checkbox>
                                                </HStack>
                                            </CheckboxGroup>
                                        </HStack>
                                        <HStack alignItems={'flex-start'}>
                                            <Text w={'150px'}>위치</Text>

                                            <VStack w="100%" alignItems={'flex-start'}>
                                                <HStack w="100%" >
                                                    <TextInput defaultValue={account.address} disabled={true} />
                                                    <Button onClick={() => setIsPopupOpen(true)}>주소검색</Button>
                                                </HStack>

                                                <Input defaultValue={account.detail_address} placeholder="상세주소를 입력하세요" onChange={(e) => setAccout({ ...account, detail_address: e.target.value })} />
                                            </VStack>

                                        </HStack>
                                        <HStack alignItems={'flex-start'}>
                                            <Text w={'150px'}>묶음배송</Text>
                                            <VStack w="100%" alignItems={'flex-start'}>
                                                    <Checkbox isChecked={shopInfo.use_bundle_delivery} onChange={(e) => setShopInfo({ ...shopInfo, use_bundle_delivery: e.target.checked })} value={'묶음배송'} minW={'200px'} colorScheme="red">묶음배송 배송비 부과 기준</Checkbox>
                                                <InputGroup w={'100%'} >

                                                    <Input type='number' value={shopInfo.bundle_delivery} placeholder="금액을 입력하세요." onChange={(e) => setShopInfo({ ...shopInfo, bundle_delivery: e.target.value })} />
                                                    <InputRightAddon>원</InputRightAddon>
                                                </InputGroup>
                                            </VStack>
                                        </HStack>


                                        <Text {...Body_sm} color={'gray.500'} mx={2}>유료 배송 상품 여러 개가 묶음배송 될 경우, 가장 큰 유료 배송비로 결제됩니다.</Text>

                                    </Stack>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            <Text {...Title_lg}>운영 정보 설정</Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Stack direction={'column'} spacing={2}>

                                        <HStack alignItems={'center'} mb={3}>
                                            <Text w={'150px'}>휴무일</Text>
                                            <CheckboxGroup value={shopInfo.holiday} onChange={(value) => {
                                                if (value.includes('토요일') && value.includes('일요일')) {
                                                    setOnlyWeek(true)
                                                }
                                                else {
                                                    setOnlyWeek(false)
                                                }

                                                if (value.includes('월요일') && value.includes('화요일') && value.includes('수요일') && value.includes('목요일') && value.includes('금요일')) {
                                                    setOnlyWeekend(true)
                                                }
                                                else {
                                                    setOnlyWeekend(false)
                                                }

                                                setShopInfo({ ...shopInfo, holiday: value });
                                            }
                                            }>
                                                <HStack w="100%">
                                                    <Checkbox colorScheme="red" value={'월요일'}>월</Checkbox>
                                                    <Checkbox colorScheme="red" value={'화요일'}>화</Checkbox>
                                                    <Checkbox colorScheme="red" value={'수요일'}>수</Checkbox>
                                                    <Checkbox colorScheme="red" value={'목요일'}>목</Checkbox>
                                                    <Checkbox colorScheme="red" value={'금요일'}>금</Checkbox>
                                                    <Checkbox colorScheme="red" value={'토요일'}>토</Checkbox>
                                                    <Checkbox colorScheme="red" value={'일요일'}>일</Checkbox>
                                                </HStack>
                                            </CheckboxGroup>
                                        </HStack>

                                        <HStack alignItems={'flex-start'}>
                                            <Text w={'150px'} mt={2}>운영시간</Text>
                                            <VStack w={'100%'}>
                                                <HStack w="100%">
                                                    <Text w={'100px'}>평일</Text>
                                                    <Input type="time" defaultValue={shopInfo.operate_time.week_open} onChange={(e) => setShopInfo({ ...shopInfo, operate_time: { ...shopInfo.operate_time, week_open: e.target.value } })} />
                                                    <Text>~</Text>
                                                    <Input type="time" defaultValue={shopInfo.operate_time.week_close} onChange={(e) => setShopInfo({ ...shopInfo, operate_time: { ...shopInfo.operate_time, week_close: e.target.value } })} />
                                                </HStack>
                                                <HStack w="100%">
                                                    <Text w={'100px'}>주말</Text>
                                                    <Input type="time" defaultValue={shopInfo.operate_time.weekend_open} onChange={(e) => setShopInfo({ ...shopInfo, operate_time: { ...shopInfo.operate_time, weekend_open: e.target.value } })} />
                                                    <Text>~</Text>
                                                    <Input type="time" defaultValue={shopInfo.operate_time.weekend_close} onChange={(e) => setShopInfo({ ...shopInfo, operate_time: { ...shopInfo.operate_time, weekend_close: e.target.value } })} />
                                                </HStack>
                                            </VStack>
                                        </HStack>
                                        <HStack alignItems={'flex-start'}>
                                            <Text w={'150px'} mt={2}>예약시간</Text>
                                            <VStack w={'100%'}>
                                                <HStack w="100%">
                                                    <Text w={'100px'}>평일</Text>
                                                    <Input type="time" defaultValue={shopInfo.reserve_time.week_open} onChange={(e) => setShopInfo({ ...shopInfo, reserve_time: { ...shopInfo.reserve_time, week_open: e.target.value } })} />
                                                    <Text>~</Text>
                                                    <Input type="time" defaultValue={shopInfo.reserve_time.week_close} onChange={(e) => setShopInfo({ ...shopInfo, reserve_time: { ...shopInfo.reserve_time, week_close: e.target.value } })} />
                                                </HStack>
                                                <HStack w="100%">
                                                    <Text w={'100px'}>주말</Text>
                                                    <Input type="time" defaultValue={shopInfo.reserve_time.weekend_open} onChange={(e) => setShopInfo({ ...shopInfo, reserve_time: { ...shopInfo.reserve_time, weekend_open: e.target.value } })} />
                                                    <Text>~</Text>
                                                    <Input type="time" defaultValue={shopInfo.reserve_time.weekend_close} onChange={(e) => setShopInfo({ ...shopInfo, reserve_time: { ...shopInfo.reserve_time, weekend_close: e.target.value } })} />
                                                </HStack>
                                            </VStack>

                                        </HStack>
                                        <HStack alignItems={'flex-start'}>
                                            <Text w={'150px'} mt={2}>브레이크타임</Text>
                                            <VStack w={'100%'}>
                                                <HStack w="100%">
                                                    <Text w={'100px'}>평일</Text>
                                                    <Input type="time" defaultValue={shopInfo.break_time.week_open} onChange={(e) => setShopInfo({ ...shopInfo, break_time: { ...shopInfo.break_time, week_open: e.target.value } })} />
                                                    <Text>~</Text>
                                                    <Input type="time" defaultValue={shopInfo.break_time.week_close} onChange={(e) => setShopInfo({ ...shopInfo, break_time: { ...shopInfo.break_time, week_close: e.target.value } })} />
                                                </HStack>
                                                <HStack w="100%">
                                                    <Text w={'100px'}>주말</Text>
                                                    <Input type="time" defaultValue={shopInfo.break_time.weekend_open} onChange={(e) => setShopInfo({ ...shopInfo, break_time: { ...shopInfo.break_time, weekend_open: e.target.value } })} />
                                                    <Text>~</Text>
                                                    <Input type="time" defaultValue={shopInfo.break_time.weekend_close} onChange={(e) => setShopInfo({ ...shopInfo, break_time: { ...shopInfo.break_time, weekend_close: e.target.value } })} />
                                                </HStack>
                                            </VStack>
                                        </HStack>
    
                                    </Stack>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            <Text {...Title_lg}>SNS 설정</Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <VStack alignItems={'flex-start'}>
                                        <HStack w={'100%'}>
                                            <Select w={'50%'} onChange={(e) => setSite(e.target.value)}>
                                                <option value={'Instagram'}>Instagram</option>
                                                <option value={'Twitter'}>Twitter</option>
                                                <option value={'Facebook'}>Facebook</option>
                                                <option value={'Kakao'}>Kakao</option>
                                            </Select>
                                            <Input onChange={(e) => setSnsId(e.target.value)}></Input>
                                            <Button colorScheme="red" onClick={() => setShopInfo({ ...shopInfo, sns: [...shopInfo.sns, { site: snsSite, account: snsId }] })}>등록</Button>
                                            {/**setShopInfo({...shopInfo, sns : [...shopInfo.sns, {site: snsSite, account: snsId}]}) */}
                                        </HStack>

                                        <Wrap mx={1} my={4}>
                                            {shopInfo.sns && shopInfo.sns.map((value, index) => (
                                                <WrapItem>
                                                    <Tag>
                                                        {value.site} {" | "} {value.account}
                                                        <TagCloseButton onClick={() => {
                                                            let filtered = shopInfo.sns.filter((element) => (shopInfo.sns[index].account !== element.account || shopInfo.sns[index].site !== element.site));
                                                            setShopInfo({ ...shopInfo, sns: filtered })
                                                        }} />
                                                    </Tag>
                                                </WrapItem>
                                            ))

                                            }
                                        </Wrap>

                                        <Text {...Body_sm} color={'gray.500'} mx={2}>최대 2개까지 입력 가능합니다.</Text>
                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            <Text {...Title_lg}>이메일 설정</Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <MailInput defaultValue={shopInfo.email} isError={shopInfo.email && (shopInfo.email === "" || !(shopInfo.email.includes('@') && shopInfo.email.includes('.')))} onChange={(value) => setShopInfo({ ...shopInfo, email: value })} />
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            <Text {...Title_lg}>소개</Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Textarea w={'100%'} defaultValue={shopInfo.comment} onChange={(e) => setShopInfo({ ...shopInfo, comment: e.target.value })} />
                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>

                        <Center m={4}>
                            <HStack>
                            <Button onClick={() => window.location.reload()}>취소</Button>
                            <Button colorScheme="red" onClick={() => submit()}>저장</Button>
                            </HStack>
                        </Center>


                    </Box>
                </HStack>
            }

            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />

                    <Box textAlign="center" py={10} px={6}>
                        <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
                        <Heading as="h2" size="xl" mt={6} mb={2}>
                            비밀번호가 변경되었습니다.
                        </Heading>
                        <Text color={'gray.500'} whiteSpace={'pre-wrap'} m={6}>
                            {'로그인 화면으로 이동합니다.\n변경된 비밀번호로 다시 로그인해주세요.'}
                        </Text>
                        <Login onLogin={() => onClose()} />
                    </Box>
                </ModalContent>

            </Modal>

            <Modal isOpen={isPopupOpen} size={'xl'} onClose={() => setIsPopupOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>주소검색</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <PopupPostCode onClose={() => setIsPopupOpen(false)} onChange={(value) => setAccout({ ...account, address: value })} />
                    </ModalBody>
                </ModalContent>
            </Modal>

        </Box>
    )

}
export default ShopView;