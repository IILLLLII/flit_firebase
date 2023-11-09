import { Badge, Box, Button, Card, CardBody, CardHeader, Center, Checkbox, HStack, Image, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, StackDivider, Table, Td, Text, Th, Tr, VStack, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FlitCalendar from "../../../Components/FlitCalendar";
import { addDocument, compareDate, formattedAmount, getAdvertiseList, getDate, getDocument, getShopProductList, getStrDate, parseDate } from "../../../DB/function";
import Calendar from "react-calendar";
import moment from "moment";
import { Title_2xl, Title_lg } from "../../../Style/Typograhy";
import { TBody } from "../../../Style/Table";
import { ChatIcon } from "@chakra-ui/icons";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const AdvertiseAdd = () => {
        const [date, setDate] = useState(localStorage.getItem('adDate') ? parseDate(localStorage.getItem('adDate')) : new Date());
        const [advertise, setAdvertise] = useState(null)
        const {isOpen, onOpen, onClose} = useDisclosure();
        const [productList, setProductList] = useState([]);
        const [selProductId, setSelProductId] = useState('');

        // dummy
        const adSchedule = {
            startDate : '2023-12-01',
            endDate: '2023-12-31',
            closeDate: [
                '2023-12-12'
            ]
        }

        // const adList = [
        //     {
        //         date: '2023-12-01',
        //         ownerId: 'MVYFSUnR2rkphp04q1m4',
        //         productId: "86frImUMvQOq1B9N9edq",
        //         state: '신청 완료',
        //     },
        //     {
        //         date: '2023-12-03',
        //         ownerId: 'MVYFSUnR2rkphp04q1m4',
        //         productId: "86frImUMvQOq1B9N9edq",
        //         state: '신청 완료',
        //     }
        // ]
        useEffect(() => {
            getAdProduct(date)
        }, [date]);

        const getAdProduct = async(date) => {
            let adList = await getAdvertiseList();
            let adInfoList = adList.filter((element) => element.date === getStrDate(date));

            console.log(adInfoList, adInfoList[0])
            let adInfo = {}
            if(adInfoList.length > 0)
                adInfo = adInfoList[0]
            if(adInfo.productId)
            {
                let adProduct = await getDocument('Product', adInfo.productId)
                setAdvertise({...adInfo, adProduct: adProduct})
                console.log(date, {...adInfo, adProduct: adProduct})
            }
            else
            {
                setAdvertise(null)
            }
        }

        const getShopProducts = async() => {
            let productList = await getShopProductList(localStorage.getItem('ownerToken'));
            console.log(productList)
            setProductList(productList)
        }

        const addAdvertise = async() => {
            await addDocument('Advertise', {
                date: getStrDate(date),
                ownerId: localStorage.getItem('ownerToken'),
                productId: selProductId,
                state: '신청 완료',
                regist_date: new Date()
            })

        }
    
    return(
        <Stack flexDirection={{md: 'row', base: 'column'}}>
            <VStack w='100%'>
                        <Box p={4} margin={1} w='100%' minH="200px" bgColor={'white'} border={'1px solid #d9d9d9'} borderRadius={'xl'}>
            {/* <Center>
                <Text fontSize={'2xl'} mb={2}>{date.getMonth() + 1}월</Text>
                </Center> */}
            <Calendar
            // calendarType="Hebrew"
            defaultValue={date}
            onChange={(e) => {setDate(e); getAdProduct(e)}}
            formatDay={(locale, date) => moment(date).format("DD")}
            formatShortWeekday={(locale, date) => moment(date).format("ddd").toUpperCase()}
            formatMonthYear={(locale, date) => moment(date).format("M월")}
            nextLabel={<MdChevronRight style={{ width: "30px", height: "25px" }} />}//">"
            next2Label=""//">>"
            prevLabel={<MdChevronLeft style={{ width: "30px", height: "25px" }} />}//"<"
            prev2Label=""//"<<"
            // showNavigation={false}
            maxDate={new Date(adSchedule.endDate)}
            tileDisabled={({ activeStartDate, date, view }) => adSchedule.closeDate.includes(getStrDate(date))}
        />
            </Box>

            <Box p={4} margin={1} w='100%' minH="200px" bgColor={'white'} border={'1px solid #d9d9d9'} borderRadius={'xl'}>
							<Text {...Title_lg} mb={2}>플릿 광고 공지</Text>
								<VStack  divider={<StackDivider borderColor={"#d9d9d9"} />}>
					
										<Text width={'100%'} p={1}>{'제목'}</Text>
                                        <Text width={'100%'} p={1}>{'제목'}</Text>
                                        <Text width={'100%'} p={1}>{'제목'}</Text>
                                        <Text width={'100%'} p={1}>{'제목'}</Text>
                                        <Text width={'100%'} p={1}>{'제목'}</Text>
								</VStack>

</Box>
            </VStack>
            <Box p={4} margin={1} w='100%' minH="200px" bgColor={'white'} border={'1px solid #d9d9d9'} borderRadius={'xl'}>
            <HStack justifyContent={'space-between'}>
            <Text {...Title_lg} mb={2}>플릿 광고 조회</Text>
            </HStack>
            {advertise ?
            <>
            <Box w='100%' bgColor={'gray.300'} h={'1px'} mb={4}/>
            <Text {...Title_lg} color='#da4359'>{advertise?.state}</Text>
            <HStack spacing={4}>
            <Image w='150px' src={advertise?.adProduct.thumbnail_image}></Image>
            <Stack spacing={4}>
            <HStack>
                <Text fontWeight='bold'>광고 날짜: </Text>
                <Text> {advertise?.date}</Text>
                </HStack>
                <HStack>
                <Text fontWeight='bold'>상품등록일: </Text>
                <Text> {getDate(advertise?.adProduct.regist_date)}</Text>
                </HStack>
                <HStack>
                <Text fontWeight='bold'>상품명: </Text>
                <Text> {advertise?.adProduct.product_name}</Text>
                </HStack>
                <HStack>
                <Text fontWeight='bold'>가격: </Text>
                <Text> <Text>{advertise?.adProduct.discount.set == "설정함" ? 
                advertise?.adProduct.discount.unit == "%" ? 
                `${formattedAmount(advertise?.adProduct.sales_price - advertise?.adProduct.sales_price * 0.01 * advertise?.adProduct.discount.value)}원` 
                : `${formattedAmount(advertise?.adProduct.sales_price - advertise?.adProduct.discount.value)}원` : `${formattedAmount(advertise?.adProduct.sales_price)}원`}</Text></Text>
                </HStack>
            </Stack>
            </HStack>
            </>
            :
            <>
            <Center h='100%'>
                <VStack spacing={10}>
                <Text>
                해당 날짜에 광고 신청 내역이 없습니다.
            </Text>
            {(parseDate(getStrDate(date)) >= parseDate(adSchedule.startDate) && parseDate(getStrDate(date)) <= parseDate(adSchedule.endDate)) &&
                <Button onClick={() => {getShopProducts(); onOpen();}} colorScheme="red">광고 상품 선택하기</Button>
            }
                </VStack>
            </Center>
            </>
}
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} size={{md:'6xl', base: 'full'}} isCentered>
                <ModalOverlay/>
                <ModalContent overflow={'hidden'}>
                    <ModalHeader>광고 상품 선택</ModalHeader>
                    <ModalCloseButton/>
                    <Stack>
                        <Table>
                    {productList.map((value, index) => (compareDate(value.saletime.end) && value.count - value.sales_count > 0 || value.saletime.set == "설정안함") && (
                            <Tr w='100%' alignItems={'center'} justifyContent={'center'} opacity={value.count - value.sales_count > 0 && compareDate(value.saletime.end) || value.saletime.set == "설정안함" ? 1 : 0.5} _hover={{ bgColor: selProductId == value.id ? 'red.200' : 'gray.100' }} bgColor={selProductId == value.id ? "red.200" : 'white'} onClick={() => setSelProductId(value.id)}>
                                <Td {...TBody}>{value.id.slice(0, 10)}</Td>
                                <Td {...TBody}>
                                    <HStack>
                                        <Image src={value.thumbnail_image} w={'40px'} h={'40px'} borderRadius={'full'} />
                                        <Text>{value.product_name}</Text>
                                    </HStack></Td>
                                <Td {...TBody}>
                                    {value.saletime.set == "설정함" ? value.saletime.start + "~" + value.saletime.end : "상시판매"}</Td>
                                <Td {...TBody} >
                                    <HStack justifyContent={'center'}>
                                        <ChatIcon /> <Text>{value.review?.length} </Text> <FaHeart /> <Text>{value.goods.length}</Text>
                                    </HStack></Td>
                                <Td {...TBody}>{formattedAmount(value.sales_price)}원</Td>
                                <Td {...TBody}>
                                    <HStack justifyContent={'center'}>
                                        <Text color="#da4359" fontWeight={'bold'}>{value.discount.set == "설정함" ? `${value.discount.value}${value.discount.unit} ` : ""}</Text>
                                        <Text>{value.discount.set == "설정함" ? (value.discount.unit == "%" ? `${formattedAmount(value.sales_price - value.sales_price * 0.01 * value.discount.value)}원` : `${formattedAmount(value.sales_price - value.discount.value)}원`) : `${formattedAmount(value.sales_price)}원`}</Text>
                                    </HStack>
                                </Td>
                                <Td {...TBody}><HStack justifyContent={'center'}>
                                    <FiShoppingCart /><Text>{value.sales_count} / {value.count}</Text>
                                </HStack></Td>
                                <Td {...TBody}>{getDate(value.regist_date)}</Td>
                            </Tr>
                        ))}
                                                    
                                                    </Table>
                    </Stack>

                    <ModalFooter>
                        <Button colorScheme="red" onClick={() => {addAdvertise(); onClose();}}>신청하기</Button>
                    </ModalFooter>

                </ModalContent>

            </Modal>
        </Stack>
    )

}
export default AdvertiseAdd;