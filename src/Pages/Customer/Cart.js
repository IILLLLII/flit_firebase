import React, { useCallback, useEffect, useState } from "react"
import { Badge, Box, Button, Flex, HStack, Stack, StackDivider, Tag, Text, VStack, Wrap, WrapItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, CloseButton, Center, Checkbox, Image, Input, Avatar } from "@chakra-ui/react"
import { useLocation, useNavigate } from "react-router-dom"
import { compareDate, formattedAmount, getDate, getDocument, getShopProductList, parseDate, updateData } from "../../DB/function";
import { Body_sm, Title_lg, Title_sm, Title_xl, fontColor } from "../../Style/Typograhy";
import MobileStatus from "../../Components/MobileStatus";
import { serverTimestamp } from "firebase/firestore";

const Cart = () => {
    const navigate = useNavigate();
    const [shopProducts, setShopProducts] = useState([]);
    const [product, setProduct] = useState();
    const [tab, setTab] = useState(0);
    const [popupOpen, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [uniqueArr, setUniqueArr] = useState([])
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [totalCount, setTotalCount] = useState(1)
    const [totalCost, setTotalCost] = useState(0)
    const [totalDeliveryCost, setTotalDeliveryCost] = useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalData, setModal] = useState("")

    const [ownerInfo, setOwner] = useState({})
    const [productList, setProductList] = useState(null)
    const [date, setDate] = useState(getDate(new Date))
    const [time, setTime] = useState(`${(new Date).getHours() + 1}:00`)
    const timeList = ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
    useEffect(() => {
        getCartData();
    }, []);

    const getCartData = async () => {
        const user = await getDocument("Customer", localStorage.getItem('customerToken'))
        setUniqueArr(user.cart)
    

        // const owner = await getDocument("Owner", user.cart_data.ownerId)
        // setOwner(owner)

        // let temp_ = []
        // for (var i = 0; i < user.cart_data.products.length; i++) {
        //     const product = await getDocument("Product", user.cart_data.products[i].productId)
        //     temp_.push(product)
        // }
        // setProductList(temp_)

        let totalCost = 0;
        let deliveryCost = 0;
        for (var i = 0; i < user.cart.length; i++) {
            if (user.cart) {
                totalCost += user.cart[i].total_cost;
                deliveryCost += parseInt(user.cart[i].product.delivery_fee);
            }
        }

        setTotalCost(totalCost)
        setTotalDeliveryCost(deliveryCost)
    }

    const sendData = async() => {
        const user = await getDocument("Customer", localStorage.getItem('customerToken'))

        let product = []
        let owner = {}
        for (var i = 0; i < user.cart?.length; i++) {
            product.push(user.cart[i])
            owner = await getDocument("Owner", user.cart[i].product.ownerId)
        }

        console.log({
            order: {
                date: date,
                time: time,
                totalCost: totalCost,
                totalDeliveryCost: totalDeliveryCost
            },
            product: product,
            owner: owner
        })
        
        setOpen(true);
        navigate('/customer/purchase', {state : {
            order: {
                date: date,
                time: time,
                totalCost: totalCost,
                totalDeliveryCost: totalDeliveryCost,
                type: localStorage.getItem('Cart')
            },
            product: product,
            owner: owner,
        }})
    }

    return (
        <Flex bgColor={'white'} flexDirection={'column'} w="100%">
            <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
                <MobileStatus title={`${localStorage.getItem('Cart') ? localStorage.getItem('Cart') : ''} 장바구니`} isHome={true} />
            </Flex>

            <Stack mt={'50px'} mb={'80px'} p={2}>
                <HStack mb={2} justifyContent={'space-between'}>
                    <Checkbox>전체선택</Checkbox>
                    <Button size={'sm'}>선택삭제</Button>
                </HStack>
                {/* <HStack gap={2}>
                        <Avatar src={ownerInfo.profileImage}/>
                        <Text>{ownerInfo.name}</Text>
                    </HStack> */}
                <Stack spacing={4} bgColor={'white'}>
                    {uniqueArr.map((value, index) => (
                        <Stack w="auto" borderRadius={'lg'} bgColor={'gray.50'} p={2}>
                            <HStack mb={2} w="100%" justifyContent={'space-between'}>
                                <Checkbox />
                                <CloseButton />
                            </HStack>
                            <HStack mb={2} w="100%" justifyContent={'space-between'}>

                                <Stack>
                                    <Box>{value.product.product_name}</Box>
                                    <HStack>
                                        <Box color="#da4359" fontWeight={'bold'}>{value.product.discount.value}{value.product.discount.unit}</Box>
                                        <Box color={value.product.discount.set == "설정함" ? '#8c8c8c' : 'black'} textDecoration={value.product.discount.set == "설정함" ? 'line-through' : 'none'}>{formattedAmount(value.product.sales_price)}</Box>
                                        <Box>{formattedAmount((value.product.discount.unit == "%" ? value.product.sales_price - value.product.sales_price * 0.01 * value.product.discount.value : value.product.sales_price - value.product.discount.value) * value.product_count)}원</Box>
                                    </HStack>
                                    <HStack>
                                        <Tag colorScheme={value.type === "픽업" ? 'red' : 'blue'}>{value.type}</Tag>
                                    </HStack>
                                    {value.option.map((option, index) => option && (
                                        <HStack>
                                            <Text color={'#8c8c8c'} fontSize={'sm'}>{option.name}</Text>
                                            <Text color={'#8c8c8c'} fontSize={'sm'}>/</Text>
                                            <Text color={'#8c8c8c'} fontSize={'sm'}>{formattedAmount(option.price)}원</Text>
                                            <Text color={'#8c8c8c'} fontSize={'sm'}>/</Text>
                                            <Text color={'#8c8c8c'} fontSize={'sm'}>{option.count}개</Text>
                                        </HStack>
                                    ))}
                                </Stack>

                                <Image src={value.product.thumbnail_image} w="90px" h="90px" />
                            </HStack>
                            <HStack mb={2} justifyContent={'flex-end'}>
                                <Text {...Title_lg}>{formattedAmount(parseInt(value.total_cost))}원</Text>
                            </HStack>

                        </Stack>
                    ))}
                       
                    <Stack>
                        <Input borderColor={'#d9d9d9'}mb={2} type="date" defaultValue={date} onChange={(e) => setDate(e.target.value)}/>
                        <Flex overflowX='auto' className="scroll">
                            <HStack>
                                {timeList.map((value) => (
                                    <Button onClick={() => setTime(value)} colorScheme={value === time ? 'red' : 'gray'}>{value}</Button>
                                ))}
                            </HStack>
                        </Flex>
                    </Stack>

                    <HStack justifyContent={'flex-end'}>
                        <Text>상품 {formattedAmount(totalCost)}</Text>
                        <Text>+</Text>
                        <Text>배송비 {formattedAmount(localStorage.getItem('Cart') === '픽업' ? 0 : totalDeliveryCost)}</Text>
                        <Text>=</Text>
                        <Text>{formattedAmount(totalCost)}</Text>
                    </HStack>
                </Stack>

                <Stack divider={<StackDivider borderColor={"#d9d9d9"} />} mt={'10px'}>
                    <HStack justifyContent={'space-between'}>
                        <Text>총 상품 금액</Text>
                        <Text>{formattedAmount(totalCost)}원</Text>
                    </HStack>
                    <HStack justifyContent={'space-between'}>
                        <Text>결제 예정 금액</Text>
                        <Text color={fontColor.primary}>{formattedAmount(totalCost)}원</Text>
                    </HStack>
                </Stack>
            </Stack>

            <Center borderTop={'1px solid #d9d9d9'} bgColor={'white'} position={'fixed'} w={'100%'} bottom={0} alignSelf={'center'} p={"10px"}>

                <Button onClick={() => sendData()} w="90%" variant={'outline'} mb={0} colorScheme="red">구매하기</Button>
            </Center>
        </Flex>
    )
}
export default Cart;