import React, { useCallback, useEffect, useState } from "react"
import { Badge, Box, Button, Flex, HStack, Stack, StackDivider, Tag, Text, VStack, Wrap, WrapItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, CloseButton, Center } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import ImageSlider from "../../../Components/ImageSlider";
import MobileStatus from "../../../Components/MobileStatus";
import { compareDate, formattedAmount, getDate, getDocument, getShopProductList, parseDate, updateData } from "../../../DB/function";
import { serverTimestamp } from "firebase/firestore";
import { Body_sm, Title_lg, Title_sm, fontColor } from "../../../Style/Typograhy";
import ProductItem from "../../../Components/ProductItem";

const SplitLine = () => {
    return (
        <Box w="100%" h="1px" backgroundColor={'gray.300'} marginY={2} />
    )
}

const ProductView = () => {
    const location = useLocation();
    const [shopProducts, setShopProducts] = useState([]);
    const [product, setProduct] = useState(location.state);
    const [tab, setTab] = useState(0);
    const [popupOpen, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [uniqueArr, setUniqueArr] = useState([])
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [totalCount, setTotalCount] = useState(1)
    const [totalCost, setTotalCost] = useState(product.discount.unit == "%" ? product.sales_price - product.sales_price * 0.01 * product.discount.value : product.sales_price - product.discount.value)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalData, setModal] = useState("")
    useEffect(() => {
        getShopProduct();
    }, []);

    const getShopProduct = async () => {
        let shopProducts = await getShopProductList(location.state.ownerId)
        console.log(product)
        setShopProducts(shopProducts);
    }

    const addOption = (option) => {
        if (option < 0) return 0;

        var tempArr = [...options, { ...product.option.item[option] }]
        setOptions(tempArr)
        console.log(tempArr)

        var filter = tempArr.filter((element) => element.name == product.option.item[option].name)
        console.log(filter)

        var optionList = uniqueArr ? uniqueArr : new Array(product.option.item[option].length).fill({})
        optionList[option] = { ...product.option.item[option], count: filter.length }
        console.log("unique : ", optionList)
        setUniqueArr(optionList)

        getTotalCost(totalCount, optionList);
    }

    const delOption = (option) => {
        var optionList = uniqueArr ? uniqueArr : new Array(product.option.item[option].length)
        optionList[option] = null
        console.log(optionList)
        setUniqueArr(optionList)
        forceUpdate()

        getTotalCost(totalCount, optionList);
    }

    const getTotalCost = (totalCount_, optionList) => {
        let totalCost = (product.discount.unit == "%" ? product.sales_price - product.sales_price * 0.01 * product.discount.value : product.sales_price - product.discount.value) * totalCount_;
        console.log(totalCost)
        for (var i = 0; i < optionList.length; i++) {
            if (optionList[i]) {
                totalCost += parseInt(optionList[i].price * optionList[i].count)
            }
        }
        setTotalCost(totalCost)
    }

    const openCartModal = () => {
        setOpen(false)
        if (product.delivery.includes('픽업') && product.delivery.includes('배송')) {
            setModal("상품 픽업과 배송 모두 가능한 상품입니다.\n상품 수령 방법을 선택하세요.")
        }
        else if (product.delivery.includes('픽업') && !product.delivery.includes('배송')) {
            setModal("상품 픽업만 가능한 상품입니다.\n상품 수령 방법을 선택하세요.")
        }
        else if (!product.delivery.includes('픽업') && product.delivery.includes('배송')) {
            setModal("상품 배송만 가능한 상품입니다.\n상품 수령 방법을 선택하세요.")
        }
        else {
            setModal("수령할 수 없는 상품입니다.\n판매자 문의 요망.")
        }

        onOpen()
    }

    const addCart = async (type) => {

        const user = await getDocument("Customer", localStorage.getItem('customerToken'))
        if (localStorage.getItem("Cart") && localStorage.getItem("Cart") !== type && user.cart && user.cart.length > 0) {
            setModal(`${localStorage.getItem("Cart")} 상품이 장바구니에 존재합니다.\n장바구니를 확인해주세요.`)
            return
        }
        let cart = user.cart ? [...user.cart, { product: product, total_cost: totalCost, product_count: totalCount, option: uniqueArr, type: type }] : [{ product: product, total_cost: totalCost, product_count: totalCount, option: uniqueArr, type: type }]
        console.log(cart, type, totalCost)
        onClose();
        const addCartUser = { ...user, cart };
        console.log(addCartUser)

        localStorage.setItem("Cart", type)

        await updateData("Customer", localStorage.getItem('customerToken'), addCartUser)
    }

    const clearCart = async () => {
        let type = localStorage.getItem("Cart") == "픽업" ? "배송" : "픽업"
        const user = await getDocument("Customer", localStorage.getItem('customerToken'))
        let cart = [{ product: product, product_count: totalCount, option: uniqueArr, type: type }]
        console.log(cart, type)
        onClose();
        const addCartUser = { ...user, cart };
        console.log(addCartUser)

        localStorage.setItem("Cart", type)

        await updateData("Customer", localStorage.getItem('customerToken'), addCartUser)
    }

    return (
        <Flex bgColor={'white'}>
            <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
                <MobileStatus title={'상품상세'} isCart={true} />
            </Flex>
            <Stack direction={'column'} w='100%' mt={'50px'}>
                <ImageSlider images={[product.thumbnail_image, ...product.product_image]} />

                <HStack w='100%' justifyContent={'center'} mt={6} borderBottom={'1px solid #d9d9d9'}>
                    <Button w='25%' onClick={() => setTab(0)} variant={'unstyled'} color={tab == 0 ? `${fontColor.primary}` : 'black'} borderRadius={0} borderBottom={tab == 0 ? `5px solid ${fontColor.primary}` : 'none'}>상품조회</Button>
                    <Button w='25%' onClick={() => setTab(1)} variant={'unstyled'} color={tab == 1 ? `${fontColor.primary}` : 'black'} borderRadius={0} borderBottom={tab == 1 ? `5px solid ${fontColor.primary}` : 'none'}>리뷰 {product.review.length}</Button>
                </HStack>

                <Box m={4} display={tab == 0 ? 'block' : 'none'}>
                    <Stack direction={'column'}>
                        <HStack>
                            <Text {...Title_lg} mb={0}>{product.product_name}</Text>
                            {parseDate(getDate(serverTimestamp())).getDate() - parseDate(getDate(product.regist_date)).getDate() < 7 && <Badge colorScheme="yellow">new</Badge>}
                            {product.sales_count > 0 && <Badge colorScheme="red">Hot</Badge>}
                        </HStack>
                        <HStack mb={-1}>
                            <Text fontWeight={'900'} color='#da4359'>{product.discount.value}{product.discount.unit}</Text>
                            <Text {...Title_lg} mb={0}>{product.discount.unit == "%" ? formattedAmount(product.sales_price - product.sales_price * 0.01 * product.discount.value) : formattedAmount(product.sales_price - product.discount.value)}원</Text>
                        </HStack>
                        <Text textDecoration={'line-through'} color='#8c8c8c' mb={-2}>{formattedAmount(product.sales_price)}원</Text>

                        <SplitLine />

                        <Box>
                            {product.point.set == "설정함" &&
                                <Stack direction={'column'}>
                                    <Text {...Title_lg}>포인트 적립</Text>
                                    {product.point.buy.set &&
                                        <HStack>
                                            <Text>상품구매시</Text>
                                            <Badge colorScheme="yellow">P</Badge>
                                            <Text>{product.point.buy.value}{product.point.buy.unit}</Text>
                                        </HStack>
                                    }
                                    {product.point.review.set &&
                                        <HStack>
                                            <Text>리뷰작성시</Text>
                                            <Badge colorScheme="yellow">P</Badge>
                                            <Text>{product.point.review.value}{product.point.review.unit}</Text>
                                        </HStack>
                                    }
                                </Stack>
                            }
                        </Box>
                        <SplitLine />
                        <Text {...Title_lg}>배송 형태</Text>
                        <Wrap>
                            {product.delivery.map((value, index) => (
                                <WrapItem>
                                    <Tag variant={'outline'} colorScheme={value == "배송" ? 'blue' : 'red'}>
                                        {value}
                                    </Tag>
                                </WrapItem>
                            ))

                            }
                        </Wrap>
                        <SplitLine />
                        <Text {...Title_lg}>상세 설명</Text>
                        <Text whiteSpace={'pre-wrap'}>{product.comment}</Text>

                        <SplitLine />
                        <Text {...Title_lg}>태그</Text>
                        <Wrap >
                            {product.tag.map((value, index) => (
                                <WrapItem>
                                    <Tag>
                                        #{value}
                                    </Tag>
                                </WrapItem>
                            ))

                            }
                        </Wrap>

                        <SplitLine />
                        <Text {...Title_lg}>색상</Text>
                        <HStack >
                            {
                                product.color.map((value) => (
                                    <Box w={'20px'} h={'20px'} borderRadius={'md'} bgColor={value}></Box>
                                ))
                            }
                        </HStack>

                        <SplitLine />
                        <Text {...Title_lg}>Shop 상품 더보기</Text>


                        <Flex overflowX='auto' className="scroll">
                            {shopProducts.map((value) => (
                                <Box w='40vw' flexShrink="0">
                                    <ProductItem data={value} state={'판매중'} />
                                </Box>
                            ))}
                        </Flex>

                        <SplitLine />
                        <Text {...Title_lg}>연관상품</Text>


                    </Stack>

                </Box>
                <Center bgColor={'white'} w="100vw" position={'fixed'} bottom={0} alignSelf={'center'} p={"10px"}>

                    <Button onClick={() => setOpen(true)} w="100%" variant={'outline'} colorScheme="red">구매하기</Button>
                </Center>
            </Stack>

            {popupOpen &&
                <Flex zIndex={9999} bgColor={"rgba(0, 0, 0, 0.5)"} position={'fixed'} w={'100%'} h={"100%"} left={0} bottom={0} alignSelf={'center'} p={"10px"}>
                    <Flex bgColor={'white'} position={'fixed'} w={'100%'} left={0} bottom={0} alignSelf={'center'} p={"20px"} borderTopRadius={'xl'}>
                        <VStack w="100%" alignItems={'flex-end'} mb={'80px'}>
                            <CloseButton color={'#8c8c8c'} onClick={() => setOpen(false)} />
                            <Select onChange={(e) => addOption(e.target.value)}>
                                <option value={-1}>{'옵션없음'}</option>
                                {product.option.item.map((value, index) => (
                                    <option value={index}>{value.name}</option>
                                ))}
                            </Select>
                            <Stack w={"100%"} maxHeight={'200px'} overflowY={'scroll'} direction={'column'}>
                                <Flex w={"100%"} bgColor={'#f1f1f1'} padding={"10px"} borderRadius={'lg'}>
                                    <VStack w={"100%"}>
                                        <HStack w={"100%"} justifyContent={'space-between'}>
                                            <Text>{product.product_name}</Text>
                                            {/* <CloseButton color={'#8c8c8c'}/> */}
                                        </HStack>
                                        <HStack w={"100%"} justifyContent={'space-between'}>
                                            <NumberInput defaultValue={totalCount} min={1} max={100} w={"100px"} bgColor={'white'}>
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper onClick={() => { if (totalCount < 100) setTotalCount(totalCount + 1); getTotalCost(totalCount + 1, uniqueArr); forceUpdate(); }} />
                                                    <NumberDecrementStepper onClick={() => { if (totalCount > 1) setTotalCount(totalCount - 1); getTotalCost(totalCount - 1, uniqueArr); forceUpdate(); }} />
                                                </NumberInputStepper>
                                            </NumberInput>
                                            <Text>{product.discount.unit == "%" ? formattedAmount((product.sales_price - product.sales_price * 0.01 * product.discount.value) * totalCount) : formattedAmount((product.sales_price - product.discount.value) * totalCount)}원</Text>
                                        </HStack>
                                    </VStack>
                                </Flex>

                                {uniqueArr && uniqueArr.map((value, index) => value && (
                                    <Flex w={"100%"} bgColor={'#f1f1f1'} padding={"10px"} borderRadius={'lg'}>
                                        <VStack w={"100%"}>
                                            <HStack w={"100%"} justifyContent={'space-between'}>
                                                <Text>{value.name}</Text>
                                                <CloseButton onClick={() => delOption(index)} color={'#8c8c8c'} />
                                            </HStack>
                                            <HStack w={"100%"} justifyContent={'space-between'}>
                                                <NumberInput value={value.count} min={1} max={100} w={"100px"} bgColor={'white'}>
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper onClick={() => { if (uniqueArr[index].count < 100) uniqueArr[index].count = uniqueArr[index].count + 1; setUniqueArr(uniqueArr); getTotalCost(totalCount, uniqueArr); forceUpdate(); }} />
                                                        <NumberDecrementStepper onClick={() => { if (uniqueArr[index].count > 1) uniqueArr[index].count = uniqueArr[index].count - 1; setUniqueArr(uniqueArr); getTotalCost(totalCount, uniqueArr); forceUpdate(); }} />
                                                    </NumberInputStepper>
                                                </NumberInput>

                                                <Text>{formattedAmount(parseInt(value.price) * value.count)}원</Text>
                                            </HStack>
                                        </VStack>
                                    </Flex>
                                ))}
                            </Stack>
                            <SplitLine />
                            <HStack >
                                <Text>총 상품금액</Text>
                                <Text fontSize={'xl'} fontWeight={'bold'} color={fontColor.primary}>{formattedAmount(totalCost)}원</Text>
                            </HStack>
                            <HStack w="100%" position={'fixed'} left={0} bottom={0} py={10} px={4}>
                                <Button w="100%" colorScheme="red" variant={'outline'} onClick={() => openCartModal()}>장바구니</Button>
                                <Button w="100%" colorScheme="red">바로구매</Button>
                            </HStack>

                        </VStack>
                    </Flex>
                </Flex>
            }

            <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xs'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>장바구니 담기</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody whiteSpace={'pre-wrap'}>
                        <Text>{modalData}</Text>
                    </ModalBody>

                    <ModalFooter justifyContent={'center'} w="100%">
                        {modalData.includes('상품이 장바구니에 존재합니다.') &&
                            <HStack w="100%">
                                {<Button onClick={clearCart} w="100%" colorScheme="red">초기화하고 담기</Button>}
                                {<Button onClick={onClose} w="100%" colorScheme="red" variant={'outline'}>취소하기</Button>}
                            </HStack>
                        }
                        {!modalData.includes('상품이 장바구니에 존재합니다.') &&
                            <HStack w="100%">
                                {product.delivery.includes('픽업') && <Button onClick={() => addCart('픽업')} w="100%" colorScheme="red">픽업하기</Button>}
                                {product.delivery.includes('배송') && <Button onClick={() => addCart('배송')} w="100%" colorScheme="blue">배송하기</Button>}
                            </HStack>
                        }
                    </ModalFooter>
                </ModalContent>

            </Modal>

        </Flex>
    )
}
export default ProductView;