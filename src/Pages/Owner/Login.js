import { Flex, useColorModeValue, Stack, Heading, Checkbox, Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, Image, Container, Menu, MenuButton, HStack, Avatar, VStack, MenuList, MenuItem, MenuDivider, FormErrorMessage } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SecondaryButton } from "../../Style/Button";
import { compareAccount, getAccount, getDocument } from "../../DB/function";

const Login = ({...props}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [account, setAccout] = useState({})

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [inputData, setInputData] = useState({
        id: '',
        password: ''
    })
    const [isError, setError] = useState(false);

    useEffect(() => {
        getAuth()
    }, []);

    const getAuth = async() => {
        console.log(localStorage.getItem('ownerToken'))
        if(localStorage.getItem('ownerToken'))
        {
            let accout_ = await getDocument('Owner', localStorage.getItem('ownerToken'))
            setAccout(accout_)
        }
    }

    const login = async() => {
        // window.location.reload();
        // 이메일로 문서를 가지고와서 비밀번호를 대조
        let accout_ = await getAccount(inputData.id, inputData.password);
        setAccout(accout_)
        if(accout_.email == inputData.id && accout_.password == inputData.password)
        {
            localStorage.setItem('onwerId', inputData.id)
            localStorage.setItem('ownerPw', inputData.password)
            localStorage.setItem('ownerToken', accout_.id)
        
            props.onLogin();
            setError(false);
            onClose();
        }
        else
        {
            setError(true);
        }
    }

    return (
        <>
        {(localStorage.getItem('onwerId') === account.email && localStorage.getItem('ownerPw') === account.password) ?
                       <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  src={
                    account.profileImage
                  }
                  bgColor={'gray.400'}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{account.name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {account.grade}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => {
                localStorage.removeItem('ownerId'); 
                localStorage.removeItem('ownerPw'); 
                localStorage.removeItem('ownerToken'); 
                window.location.reload();
                }}>
                로그아웃
                </MenuItem>
            </MenuList>
          </Menu> :
            <Button {...SecondaryButton} onClick={onOpen}>로그인</Button>
        }
            

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size={'full'}
            >
                <ModalOverlay />
                <ModalContent>

                    <Flex
                        minH={'100vh'}
                        align={'center'}
                        justify={'center'}
                        bg={useColorModeValue('gray.50', 'gray.800')}>
                        <Container maxW={'container.sm'}>
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
                                            <Input type="email" onChange={(e) => setInputData({ ...inputData, id: e.target.value })} />
                                        </FormControl>
                                        <FormControl id="password">
                                            <FormLabel>Password</FormLabel>
                                            <Input type="password" onChange={(e) => setInputData({ ...inputData, password: e.target.value })} />
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
                                    </Stack>
                                </Box>
                            </Stack>
                        </Container>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    )

}
export default Login;