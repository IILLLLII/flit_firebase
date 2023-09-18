import React from "react";
import { Box, Button, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <Container maxW={'container.sm'} bgColor={'gray.200'} h={'100%'}>
            <Box>
                <Text>홈</Text>
                <SimpleGrid columns={5} gap={2}>
                    <Button onClick={() => navigate('/customer/category')}>카테고리</Button>
                    <Button onClick={() => navigate('/customer/submit')}>회원가입</Button>
                    <Button onClick={() => navigate('/customer/login')}>로그인</Button>
                </SimpleGrid>

            </Box>
        </Container>
    )
}
export default Home;