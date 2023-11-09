import { Flex, useColorModeValue, Stack, Heading, Checkbox, Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, Image, Container, Menu, MenuButton, HStack, Avatar, VStack, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";
import React, { useState } from "react";
import { SecondaryButton } from "../../Style/Button";

const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const adminAccout = {
        id: 'illi@illi.kr',
        password: 'illi0606!'
    }

    const [inputData, setInputData] = useState({
        id: '',
        password: ''
    })

    const login = () => {
        if (adminAccout.id === inputData.id && adminAccout.password === inputData.password) {
            localStorage.setItem('adminId', inputData.id)
            localStorage.setItem('adminPw', inputData.password)
            onClose();
        }
    }

    return (
        <>
        {(localStorage.getItem('adminId') === adminAccout.id && localStorage.getItem('adminPw') === adminAccout.password) ?
                       <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Image
                    h={'40px'}
                  src={
                    'http://www.illi.kr/static/img/mainlogo.png'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">일리</Text>
                  <Text fontSize="xs" color="gray.600">
                    관리자
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => {localStorage.removeItem('adminId'); localStorage.removeItem('adminPw'); window.location.reload();}}>로그아웃</MenuItem>
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
                                    <Heading fontSize={'3xl'}>관리자 로그인</Heading>
                                    <Text color={'blue.400'}>오늘도 화이팅 ✌️</Text>
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
                                            <Input borderColor={'#d9d9d9'}type="email" onChange={(e) => setInputData({ ...inputData, id: e.target.value })} />
                                        </FormControl>
                                        <FormControl id="password">
                                            <FormLabel>Password</FormLabel>
                                            <Input borderColor={'#d9d9d9'}type="password" onChange={(e) => setInputData({ ...inputData, password: e.target.value })} />
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