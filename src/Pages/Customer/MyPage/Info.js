import { Avatar, Badge, Box, Button, Center, Flex, FormControl, FormLabel, HStack, Input, Stack, StackDivider, Text, VStack, useBoolean } from '@chakra-ui/react'
import React from 'react'
import MobileStatus from '../../../Components/MobileStatus'
import { QuestionIcon } from '@chakra-ui/icons'
import { FaToggleOff, FaToggleOn } from 'react-icons/fa'

function Info() {
    const [mail, setMail] = useBoolean(true);
    const [sms, setSms] = useBoolean(true);
    return (
        <Flex flexDirection={'column'} w="100%">
            <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
                <MobileStatus title={"내 정보 수정"} />

            </Flex>

            <Stack mt='70px' divider={<StackDivider />}>
                <Center>
                    <VStack p={2}>
                        <Avatar size={'lg'} />
                        <HStack>
                            <Badge colorScheme='green'>Green</Badge>
                            <QuestionIcon />
                        </HStack>
                        <Input placeholder='닉네임' />
                    </VStack>
                </Center>
                <Box>
                    <VStack p={2} alignItems={'flex-end'}>
                        <FormControl >
                            <FormLabel>이메일</FormLabel>
                            <Input isReadOnly type='email' />
                        </FormControl>
                        <FormControl >
                            <FormLabel>현재 비밀번호</FormLabel>
                            <Input type='password' />
                        </FormControl>
                        <FormControl >
                            <FormLabel>신규 비밀번호</FormLabel>
                            <Input type='password' />
                        </FormControl>

                        <Button>변경</Button>

                        <FormControl >
                            <FormLabel>휴대폰 번호</FormLabel>
                            <HStack>
                                <Input type='tel' />
                                <Button>재인증</Button>
                            </HStack>
                        </FormControl>
                    </VStack>
                </Box>
                <Box>
                    <VStack p={2}>
                        <Text w='100%'>마케팅 정보 수신 동의</Text>
                        <HStack w='100%' justifyContent={'space-between'}>
                            <Text>메일 수신 동의</Text>
                            {mail ?
                                <FaToggleOn onClick={setMail.toggle} size={'30px'} color='#da4359' /> :
                                <FaToggleOff onClick={setMail.toggle} size={'30px'} color='#b9b9b9' />
                            }
                        </HStack>
                        <HStack w='100%' justifyContent={'space-between'}>
                            <Text>SMS 수신 동의</Text>
                            {sms ?
                                <FaToggleOn onClick={setSms.toggle} size={'30px'} color='#da4359' /> :
                                <FaToggleOff onClick={setSms.toggle} size={'30px'} color='#b9b9b9' />
                            }
                        </HStack>
                    </VStack>
                </Box>


                {/* <Button variant={'unstyled'}>로그아웃</Button>
                <Button variant={'unstyled'}>회원탈퇴</Button> */}

            </Stack>
        </Flex>
    )
}

export default Info