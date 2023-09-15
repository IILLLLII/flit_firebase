import React, { useEffect, useState } from "react"
import { Badge, Box, Button, Flex, HStack, Stack, StackDivider, Tag, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import ImageSlider from "../../../Components/ImageSlider";
import MobileStatus from "../../../Components/MobileStatus";
import { compareDate, formattedAmount, getDate, getShopProductList, parseDate } from "../../../DB/function";
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

    useEffect(() => {
        getShopProduct();
    }, []);

    const getShopProduct = async () => {
        let shopProducts = await getShopProductList(location.state.ownerId)
        setShopProducts(shopProducts);
    }

    return (
        <Flex bgColor={'white'}>
                            <Flex bgColor='white' w='100%' position="fixed" zIndex={9999} borderBottom={'1px solid #d9d9d9'}>
                <MobileStatus title={''} />
                </Flex>
            <Stack direction={'column'} w='100%' mt={20}>
                <ImageSlider mt={'30px'} images={[product.thumbnail_image, ...product.product_image]} />

                <HStack w='100%' justifyContent={'center'} mt={4} borderBottom={'1px solid #8c8c8c'}>
                    <Button w='25%' onClick={() => setTab(0)} variant={'unstyled'} color={tab == 0 ? `${fontColor.primary}` : 'black'} borderRadius={0} borderBottom={tab == 0 ? `5px solid ${fontColor.primary}` : 'none'}>상품조회</Button>
                    <Button w='25%' onClick={() => setTab(1)} variant={'unstyled'} color={tab == 1 ? `${fontColor.primary}` : 'black'} borderRadius={0} borderBottom={tab == 1 ? `5px solid ${fontColor.primary}` : 'none'}>리뷰 {product.review.length}</Button>
                </HStack>

                <Box p={2} display={tab == 0 ? 'block' : 'none'}>
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
                                    <Box w='35vw' mr={1} flexShrink="0" p={2}>
                                        <ProductItem data={value} state={'판매중'}/>
                                    </Box>
                            ))}
</Flex>

<SplitLine />
                        <Text {...Title_lg}>연관상품</Text>


          </Stack>

                </Box>
            </Stack>
        </Flex>
    )
}
export default ProductView;