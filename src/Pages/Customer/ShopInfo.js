import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Alert, AlertIcon, Badge, Box, Button, ButtonGroup, Card, CardHeader, Center, Checkbox, CheckboxGroup, Circle, Container, Flex, HStack, Heading, IconButton, Image, Input, InputGroup, InputRightAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Stack, Tag, TagCloseButton, TagRightIcon, Text, Textarea, VStack, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { Body_lg, Body_sm, Title_2xl, Title_lg, Title_sm } from "../../Style/Typograhy";
import { addDocument, formattedAmount, getDocument, getShop, updateData } from "../../DB/function";
import { Label } from '../../Components/Label'
import { useLocation, useNavigate } from "react-router-dom";
import MobileStatus from "../../Components/MobileStatus";
import { ChatIcon } from "@chakra-ui/icons";

const ShopInfo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [account, setAccout] = useState(location.state.account ? location.state.account : {});
    const [onlyweek, setOnlyWeek] = useState(false);
    const [onlyweekend, setOnlyWeekend] = useState(false);
    const [shopInfo, setShopInfo] = useState(location.state.shopInfo ? location.state.shopInfo : {
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
        email: '',
        comment: ''
    })

    useEffect(() => {
        if (location.state) {
            setShopInfo(location.state.shopInfo)
            setAccout(location.state.account)
        }
    }, []);

    return (
        <Flex bgColor={'white'} flexDirection={'column'} w="100%">
            <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
                <MobileStatus title={"상점정보"} />
            </Flex>
            <Flex maxW={'container.sm'} w='100%' justifyContent={'center'}>

                <Flex mt={'50px'} display={'block'} bgColor={'white'}>
                    {/* <Text w="100%" textAlign={'center'} p={2} color={'gray.500'}>미리보기</Text> */}
                    {account.profileImage ? <Image src={account.profileImage} bgColor={'gray.300'} w='400px' h='400px' /> : <Box w={'400px'} h={'400px'} bgColor={'gray.300'} />}
                    <Center mt={"-150px"}>
                        <Circle w={'300px'} h="300px" bgColor={'white'}>
                            <VStack spacing={0} mt={'-100px'}>
                                <HStack alignItems={'center'}>
                                    <Badge mr={2} variant={'outline'}>{account.grade}</Badge>
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

                                    {shopInfo.sns.map((value, index) => (
                                        <Text {...Body_sm} mx={-1}>{value.site} {" | "} {value.account}</Text>
                                    ))}
                                </Stack>
                            }
                        />
                        <Label title={'Email'} text={shopInfo.email} />
                        <Label title={'소개'} text={shopInfo.comment} />
                    </Box>

                    <ButtonGroup w='100%' px={6}>
                        <HStack w='100%' justifyContent={'flex-end'}>
                        <IconButton icon={<ChatIcon/>} onClick={() => navigate('/customer/chat', {state: account})}/>
                        </HStack>
                    </ButtonGroup>

                </Flex>

            </Flex>
        </Flex>
    )
}
export default ShopInfo;