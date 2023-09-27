import React, { useCallback, useEffect, useState } from "react"
import { Badge, Box, Button, Flex, HStack, Stack, StackDivider, Tag, Text, VStack, Wrap, WrapItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, CloseButton, Center, Checkbox, Image, Input } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import { compareDate, formattedAmount, getDate, getDocument, getShopProductList, parseDate, updateData } from "../../DB/function";
import { Body_sm, Title_lg, Title_sm, Title_xl, fontColor } from "../../Style/Typograhy";
import MobileStatus from "../../Components/MobileStatus";

const Cart = () => {
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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalData, setModal] = useState("")
    useEffect(() => {
        getCartData();
    }, []);

    const getCartData = async () => {
        const user = await getDocument("Customer", localStorage.getItem('customerToken'))
        setUniqueArr(user.cart)

        let totalCost = 0;
        for (var i = 0; i < user.cart.length; i++) {
            if (user.cart) {
                totalCost += user.cart[i].total_cost;
            }
        }

        setTotalCost(totalCost)
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
                <Stack spacing={4} bgColor={'white'} divider={<StackDivider />}>
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
                        <Input mb={2} type="date" defaultValue={getDate(new Date())} />
                        <Flex overflowX='auto' className="scroll">
                            <HStack>
                                <Button m={1}>11:00</Button>
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

                    <HStack justifyContent={'flex-end'}>
                        <Text>상품 {formattedAmount(totalCost)}</Text>
                        <Text>+</Text>
                        <Text>배송비 {formattedAmount(0)}</Text>
                        <Text>=</Text>
                        <Text>{formattedAmount(totalCost)}</Text>
                    </HStack>
                </Stack>

                <Stack divider={<StackDivider borderWidth={2} borderColor={'gray.700'} />} mt={'10px'}>
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

                <Button onClick={() => setOpen(true)} w="90%" variant={'outline'} mb={0} colorScheme="red">구매하기</Button>
            </Center>
        </Flex>
    )
}
export default Cart;