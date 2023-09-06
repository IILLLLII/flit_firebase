import { Badge, Box, Button, HStack, Stack, StackDivider, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import ImageSlider from "../../../Components/ImageSlider";
import { deleteDocument, formattedAmount, getDate, parseDate } from "../../../DB/function";
import { Title_2xl, Title_lg, Title_sm } from "../../../Style/Typograhy";
import { FaHeart } from "react-icons/fa";
import { ChatIcon } from "@chakra-ui/icons";
import ConfirmButton from "../../../Components/ConfirmButton";

const PortfolioView = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [product, setProduct] = useState()

    useEffect(() => {
        if (location.state) {
            setProduct(location.state)
        }
    }, []);

    return (
        <Box w='100%' minW={{ base: '100%', md: '1000px' }}>

            {product &&
                <Stack direction={{ base: 'column', md: 'row' }}>
                    <Box w={{ base: '100%', md: '500px' }} >

                        <ImageSlider images={product.product_image} />
                    </Box>
                    <Box w={'100%'} borderLeft={'1px solid #d9d9d9'}>
                        <Stack direction={'column'} divider={<StackDivider />}>
                            <HStack justifyContent={'space-between'}>
                                <Text ml={2} {...Title_2xl}>상품정보</Text>
                                <HStack>
                                    <Button leftIcon={<ChatIcon />} >리뷰 {product.review.length}</Button>
                                    <Button leftIcon={<FaHeart />}>관심 {product.goods.length}</Button>

                                </HStack>
                            </HStack>
                            <Box p={2}>
                                <Text mb={4} color={'#8c8c8c'}>{product.regist_date ? getDate(product.regist_date) : ''}</Text>
                                <Text>{product.comment}</Text>
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>검색필터</Text>
                                <HStack pb={4}>
                                    {
                                        product.tag.map((value) => (
                                            <Badge>{value}</Badge>
                                        ))
                                    }
                                </HStack>
                                <HStack >
                                    {
                                        product.color.map((value) => (
                                            <Box w={'20px'} h={'20px'} borderRadius={'md'} bgColor={value}></Box>
                                        ))
                                    }
                                </HStack>
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>배송형태</Text>
                                <HStack>
                                    {product.delivery.map((value) => (
                                        <Badge>{value}</Badge>
                                    ))}
                                </HStack>
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>상품 카테고리</Text>

                                <Text>{product.category1} {'>'} {product.category2} </Text>
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>상품명</Text>

                                <Text>{product.product_name}</Text>
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>판매가</Text>

                                <Text>{product.discount.set == "설정함" ? product.discount.unit == "%" ? `${formattedAmount(product.sales_price - product.sales_price * 0.01 * product.discount.value)}원` : `${formattedAmount(product.sales_price - product.discount.value)}원` : ""}</Text>
                                <HStack>
                                    <Text color="#da4359" fontWeight={'bold'}>{product.discount.set == "설정함" ? `${product.discount.value}${product.discount.unit} ` : ""}</Text>
                                    <Text color={product.discount.set == "설정함" ? '#8c8c8c' : 'black'} textDecoration={product.discount.set == "설정함" ? 'line-through' : 'none'}>{formattedAmount(product.sales_price)}원</Text>
                                </HStack>
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>포인트</Text>
                                {product.point.buy.set &&
                                    <HStack alignItems={'center'}>
                                        <Text>상품 구매시</Text>
                                        <Badge colorScheme="yellow">P</Badge>
                                        <Text>{product.point.buy.value}{product.point.buy.unit}</Text>
                                    </HStack>
                                }
                                {product.point.review.set &&
                                    <HStack alignItems={'center'}>
                                        <Text>리뷰 작성시</Text>
                                        <Badge colorScheme="yellow">P</Badge>
                                        <Text>{product.point.review.value}{product.point.review.unit}</Text>
                                    </HStack>
                                }
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>판매기간</Text>
                                {product.saletime && <Text>{product.saletime.set == "설정안함" ? "상시판매" : product.saletime.start + " ~ " + product.saletime.end}</Text>}
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>옵션설정</Text>
                                {product.option.item.map((value, index) => (
                                    <HStack>
                                        <Text>{index + 1}. </Text>
                                        <Text>{value.name}</Text>
                                        <Text>(+{formattedAmount(value.price)}원)</Text>
                                    </HStack>
                                ))}

                            </Box>
                            <HStack mt={6} justifyContent={'center'}>
                            <Button onClick={() => navigate('/product/add', { state : product})}>수정하기</Button>
                            <ConfirmButton collection={'Product'} type={'삭제'} data={product}/>
                            {/* <Button onClick={() => deleteProduct()}>삭제</Button> */}
                        </HStack>
                        </Stack>

                    </Box>
                </Stack>
            }
        </Box>
    )

}
export default PortfolioView;