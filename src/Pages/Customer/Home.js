import React from "react";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        // <Container maxW={'container.sm'} bgColor={'gray.200'} h={'100%'}>
            <Box p={2}>
                <Text>홈</Text>
                <SimpleGrid columns={4} gap={2}>
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
                </SimpleGrid>

            </Box>
        // </Container>
    )
}
export default Home;