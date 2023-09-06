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
import { isAdmin } from "../../../App";

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
                                <Text ml={2} {...Title_2xl}>포트폴리오 정보</Text>
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
                                <Text {...Title_lg}>상품명</Text>

                                <Text>{product.product_name}</Text>
                            </Box>
                            {!isAdmin &&
                            <HStack mt={6} justifyContent={'center'}>
                            <Button onClick={() => navigate('/portfolio/add', { state : product})}>수정하기</Button>
                            <ConfirmButton collection={'Portfolio'} type={'삭제'} data={product}/>
                            {/* <Button onClick={() => deleteProduct()}>삭제</Button> */}
                        </HStack>
}
                        </Stack>

                    </Box>
                </Stack>
            }
        </Box>
    )

}
export default PortfolioView;