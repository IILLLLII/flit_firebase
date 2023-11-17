import React, { useCallback, useEffect, useState } from "react";
import { Avatar, Box, Button, Center, Container, Flex, HStack, IconButton, Image, SimpleGrid, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BellIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import ImageSlider from "../../Components/ImageSlider";
import Banner1 from "../../Asset/Banner1.png"
import Banner2 from "../../Asset/Banner2.png"
import Banner3 from "../../Asset/Banner3.png"
import Banner4 from "../../Asset/Banner4.png"
import Banner5 from "../../Asset/Banner5.png"
import Banner6 from "../../Asset/Banner6.png"

import Button1 from "../../Asset/Button1.png"
import Button2 from "../../Asset/Button2.png"
import Button3 from "../../Asset/Button3.png"
import Button4 from "../../Asset/Button4.png"
import Button5 from "../../Asset/Button5.png"

import Event from "../../Asset/Event.png"
import Event1 from "../../Asset/Event1.png"

import { getAdvertiseList, getDocument, getList, getOwner, getShop } from "../../DB/function";
import { Title_lg } from "../../Style/Typograhy";
import ProductItem from "../../Components/ProductItem";
import ProductHorizontal from "../../Components/ProductHorizontal";
import { MdHome, MdLocationPin } from "react-icons/md";
import MobileStatus from "../../Components/MobileStatus";
import { FiGrid, FiHome, FiSearch, FiUser } from "react-icons/fi";
import Footer from "../../Components/Footer";
import CustomerNavBar from "../../Components/CustomerNavBar";


const Home = () => {
    const navigate = useNavigate();
    const [adList, setAdList] = useState([]);
    const [ownerList, setOwnerList] = useState([]);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    useEffect(() => {
        window.scrollTo(0, 0);
        getAdList();
        getShopList();
    }, []);

    const getShopList = async () => {
        // 지역에 따라서 이 목록이 필터링 되어야함 - 현진
        let temp = await getList('Owner', 'all')
        setOwnerList(temp)
    }

    const getAdList = async () => {
        // 지역에 따라서 이 목록이 필터링 되어야함(최대 20개) - 현진
        let temp = await getList('Advertise', 'all')
        console.log(temp)

        let _adList = [];
        let adData = {};
        temp.map(async (element) => {
            adData.owner = await getOwner(element.ownerId);
            adData.shop = await getShop(element.ownerId)
            adData.product = await getDocument('Product', element.productId)
            _adList.push(adData)


            if (temp.length == _adList.length)
                setAdList(_adList)
        })
    }

    return (
        <Container maxW={'100vw'} overflowX={'hidden'} h={'100%'} overflowY={'scroll'} className="scroll">
                    <Center position={'fixed'} w='100%' top={0} left={0} zIndex={999}>
        <Flex w='100%' maxW={'container.sm'} bgColor={'white'} justifyContent={'space-between'} alignItems={'center'} px={4} py={1}>
            <HStack w='100%' px={2} py={2}>
                    <Button borderRadius={'full'} variant={'outline'} borderColor={'gray.300'} w='100%' leftIcon={<MdLocationPin size={'20px'}/>} textAlign={'left'} justifyContent={'flex-start'}>
                        <Text color={'gray.500'}>위치를 설정해주세요</Text>
                        </Button>
                    {/* <IconButton variant={'unstyled'} onClick={() => navigate('/customer/notice')} icon={<BellIcon boxSize={'30px'}/>} /> */}
                    <IconButton variant={'unstyled'} onClick={() => navigate('/customer/category')} icon={<HamburgerIcon boxSize={'30px'}/>} />
                </HStack>
                </Flex>
                </Center>
            <Box p={2} mb={'8vh'} mt='50px'>
                <ImageSlider images={[Banner6, Banner1, Banner2, Banner3, Banner4, Banner5]} isHome={true} />
                <HStack justifyContent={'space-between'}>
                    <VStack onClick={() => navigate(`/customer/product/${0}`, { state: { category1: 0, category2: '전체' } })}>
                        <Image src={Button1} boxSize={'60px'}></Image>
                        <Text>꽃</Text>
                    </VStack>
                    <VStack onClick={() => navigate(`/customer/product/${1}`, { state: { category1: 1, category2: '전체' } })}>
                        <Image src={Button2} boxSize={'60px'}></Image>
                        <Text>식물</Text>
                    </VStack>
                    <VStack onClick={() => navigate(`/customer/product/${2}`, { state: { category1: 2, category2: '전체' } })}>
                        <Image src={Button3} boxSize={'60px'}></Image>
                        <Text>화환</Text>
                    </VStack>
                    <VStack onClick={() => navigate(`/customer/product/${3}`, { state: { category1: 3, category2: '전체' } })}>
                        <Image src={Button4} boxSize={'60px'}></Image>
                        <Text>조경</Text>
                    </VStack>
                    <VStack onClick={() => navigate(`/customer/product/${4}`, { state: { category1: 4, category2: '전체' } })}>
                        <Image src={Button5} boxSize={'60px'}></Image>
                        <Text>프리미엄</Text>
                    </VStack>
                </HStack>
                <ImageSlider images={[Event1, Event]} />
                <Box mt={4} display={'block'}>
                    <Stack direction={'column'} divider={<StackDivider borderColor={"#d9d9d9"} />}>


                        <Box>
                            <Text {...Title_lg}>Flit의 추천</Text>


                            <Flex overflowX='auto' className="scroll" mx={-4} my={-2}>
                                {adList.map(({ product }, index) => (
                                    <Box w='40%' flexShrink="0" mr={1}>
                                        <ProductItem data={product} />
                                    </Box>
                                ))}
                            </Flex>
                        </Box>
                    </Stack>

                </Box>

                <Box mt={4} display={'block'}>
                    <Stack direction={'column'} divider={<StackDivider borderColor={"#d9d9d9"} />}>


                        <Box>
                            <Text {...Title_lg}>상품 BEST</Text>


                            <Flex overflowX='auto' className="scroll" mx={-4} my={-2}>
                                {adList.map(({ product }, index) => (

                                    <Box border={'1px solid #f1f1f1'} mr={4} mb={4} rounded={'lg'} bgColor={'white'} p={4} boxShadow={'lg'} w='80%' flexShrink="0">
                                        <ProductHorizontal data={product} />
                                    </Box>
                                ))}
                            </Flex>
                        </Box>
                    </Stack>

                </Box>

                <Box mt={4} mb={4} display={'block'}>
                    <Stack direction={'column'} divider={<StackDivider borderColor={"#d9d9d9"} />}>
                        <Box>
                            <Text {...Title_lg}>우리동네 BEST</Text>
                            <Flex overflowX='auto' className="scroll" mx={-4} my={2}>
                            {ownerList.map((value, index) => (
                                    <VStack w='40%' flexShrink="0" mr={1}>
                                        <Avatar size={'2xl'} src={value.profileImage} alt={value.name} />
                                        <Text>{value.name}</Text>
                                        <Button variant={'outline'} size={'xs'}>팔로우</Button>
                                    </VStack>
                                ))}
                            </Flex>
                        </Box>
                    </Stack>

                </Box>
                {/* <Button onClick={() => navigate('/customer/login')}>로그인</Button> */}
                {/* <SimpleGrid columns={4} gap={2}>
                    <Button onClick={() => navigate('/customer/category')}>카테고리</Button>
                    <Button onClick={() => navigate('/customer/submit')}>회원가입</Button>
                    <Button onClick={() => navigate('/customer/login')}>로그인</Button>
                    <Button onClick={() => navigate('/customer/cart')}>장바구니</Button>
                    <Button onClick={() => navigate('/customer/purchase')}>구매하기</Button>
                    <Button onClick={() => navigate('/customer/notice')}>공지</Button>
                    <Button onClick={() => navigate('/customer/event')}>이벤트</Button>
                    <Button onClick={() => navigate('/customer/review')}>리뷰작성</Button>
                    <Button onClick={() => navigate('/customer/info')}>정보수정</Button>
                    <Button onClick={() => navigate('/customer/order')}>주문관리</Button>
                </SimpleGrid> */}
                <Box mx={-6}>
                <Footer/>
                </Box>
            </Box>

            <CustomerNavBar/>

            {/* <Box position={'fixed'} bottom={0} right={0} zIndex={999} w='100%' h='8vh' bgColor={'white'} px={4}>
                <HStack alignItems={'center'} justifyContent={'space-between'} h={'100%'}>
                    <IconButton onClick={() => navigate('/customer')} variant={'unstyled'} size={'lg'} icon={<FiHome size={'40px'}/>}/>
                    <IconButton variant={'unstyled'} size={'lg'} icon={<FiSearch size={'40px'}/>}/>
                    <IconButton variant={'unstyled'} size={'lg'} icon={<Image src={require('../../Asset/Logo.png')} boxSize={'40px'}/>}/>
                    <IconButton onClick={() => navigate('/customer/mypage')} variant={'unstyled'} size={'lg'} icon={<FiUser size={'40px'}/>}/>
                    <IconButton variant={'unstyled'} size={'lg'} icon={<FiGrid size={'40px'}/>}/>
                </HStack>
            </Box> */}
        </Container>
    )
}
export default Home;