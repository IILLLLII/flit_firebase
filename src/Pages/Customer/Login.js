import { Box, FormControl, FormLabel, Heading, Image, Input, Stack, Text, useColorModeValue, Button, Center, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getAccount, getDocument } from "../../DB/function";
import { Link, useNavigate } from "react-router-dom";
import Find from "./Find";

const Login = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        id: localStorage.getItem('customerId'),
        password: localStorage.getItem('customerPw')
    })
    const [isError, setError] = useState(false);

    // useEffect(() => {
    //     getAuth()
    // }, []);

    // const getAuth = async () => {
    //     console.log(localStorage.getItem('customerToken'))
    //     if (localStorage.getItem('customerToken')) {
    //         let accout_ = await getDocument('Customer', localStorage.getItem('customerToken'))
    //         setAccout(accout_)
    //     }
    // }

    const login = async () => {
        // window.location.reload();
        // 이메일로 문서를 가지고와서 비밀번호를 대조
        let accout_ = await getAccount('Customer', inputData.id.includes('@') ? 'email' : 'number', inputData.id, inputData.password);
        // setAccout(accout_)
        if (accout_.email == inputData.id && accout_.password == inputData.password) {
            localStorage.setItem('customerId', inputData.id)
            localStorage.setItem('customerPw', inputData.password)
            localStorage.setItem('customerToken', accout_.id)
            setError(false);
            navigate('/customer');
        }
        else {
            setError(true);
        }
    }

    return (
        <Center h={'100vh'} alignItems={'center'} bgColor={'white'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'} spacing={4}>
                    <Image src={require('../../Asset/Logo.png')} width={'100px'} />
                    <Heading fontSize={'3xl'}>로그인</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                    w={'100%'}
                >
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" defaultValue={inputData.id} onChange={(e) => setInputData({ ...inputData, id: e.target.value })} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" defaultValue={inputData.password}  onChange={(e) => setInputData({ ...inputData, password: e.target.value })} />
                            {isError && <Text color='red.500'>로그인 정보를 다시 확인해주세요.</Text>}
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={() => login()}
                            >
                                로그인
                            </Button>
                        </Stack>
                        <Stack spacing={10}>
                            <Button
                                colorScheme="blue"
                                variant={'outline'}
                                onClick={() => navigate('/customer/submit')}
                            >
                                회원가입
                            </Button>
                        </Stack>
                    </Stack>
                </Box>

                <HStack justifyContent={'space-between'}>
                    <Find title={'아이디찾기'}/>
                    <Find title={'비밀번호찾기'}/>
                </HStack>
            </Stack>
        </Center>
    )

}

export default Login;