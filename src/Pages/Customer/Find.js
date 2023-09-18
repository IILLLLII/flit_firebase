import { Box, Button, Center, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../DB/firebase-config";
import { updateData } from "../../DB/function";

const Find = ({ ...props }) => {
    const toast = useToast();
    const [title, setTitle] = useState(props.title)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [inputData, setInputData] = useState({
        division: '개인',
        certification: '휴대전화',
        name: '',
        number: ''
    })
    const [auth, setAuth] = useState({})
    const [findId, setFindId] = useState('')
    const [findPw, setFindPw] = useState(false)

    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [inputPassword, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function validatePassword(password) {
        // 비밀번호 길이가 8~32자 사이인지 확인
        if (password.length < 8 || password.length > 32) {
            setIsPasswordValid(false);
        }

        // 영문 대문자, 영문 소문자, 숫자, 특수 문자 중 2가지 이상을 조합한 패턴 검사
        var patternCount = 0;

        // 영문 대문자 확인
        if (/[A-Z]/.test(password)) {
            patternCount++;
        }

        // 영문 소문자 확인
        if (/[a-z]/.test(password)) {
            patternCount++;
        }

        // 숫자 확인
        if (/\d/.test(password)) {
            patternCount++;
        }

        // 특수 문자 확인
        if (/[$@$!%*?&#]/.test(password)) {
            patternCount++;
        }
        setIsPasswordValid(patternCount >= 2);
    }

    const find = async () => {
        console.log('find')
        if (!(inputData.number.length > 0 && inputData.name.length > 0)) return
        const q = query(collection(db, 'Customer'), where('number', "==", inputData.number), where('name', '==', inputData.name));
        const querySnapshot = await getDocs(q);
        let result = {};
        querySnapshot.forEach((doc) => {
            result = { ...doc.data(), id: doc.id };
            setAuth(result)
            setFindId(result.email);
            setFindPw(true);
        })
    }

    const changePw = async () => {
        console.log('change!')
        if (!(isPasswordValid && inputPassword.length > 0 && confirmPassword.length > 0)) {
            toast({
                status: 'warning',
                title: `영문 대문자, 영문 소문자, 숫자, 특수 문자 중 2가지 이상을 조합해주세요`,
                duration: 1000,
            })
            return;
        }
        else if (confirmPassword !== inputPassword) {
            toast({
                status: 'error',
                title: `패스워드가 일치하지 않습니다.`,
                duration: 1000,
            })
            return
        }

        await updateData('Customer', auth.id, { ...auth, password: inputPassword })
        onClose();

    }

    return (
        <>
            <Link onClick={() => onOpen()}>{title}</Link>
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                size={'full'}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <Text>회원유형</Text>
                            <HStack>
                                <Button onClick={() => setInputData({ ...inputData, division: '개인' })} w='100%' colorScheme={inputData.division == "개인" ? 'red' : 'gray'}>개인</Button>
                                <Button onClick={() => setInputData({ ...inputData, division: '기업' })} w='100%' colorScheme={inputData.division == "기업" ? 'red' : 'gray'}>기업</Button>
                            </HStack>

                            {/* <Text>인증방식</Text>
                        <HStack>
                            <Button onClick={() => setInputData({...inputData, certification : '휴대전화'})} w='100%' colorScheme={inputData.certification == "휴대전화" ? 'red' : 'gray'}>휴대전화</Button>
                            <Button onClick={() => setInputData({...inputData, certification : '이메일'})} w='100%' colorScheme={inputData.certification == "이메일" ? 'red' : 'gray'}>이메일</Button>
                        </HStack> */}

                            <Text>이름</Text>
                            <Input onChange={(e) => setInputData({ ...inputData, name: e.target.value })} />

                            {inputData.certification == "휴대전화" &&
                                <>
                                    <Text>휴대전화</Text>
                                    <HStack>
                                        <Input value={inputData.number} maxLength={11} onChange={(e) => setInputData({ ...inputData, number: e.target.value.replaceAll('-', '') })} />
                                        <Button>인증하기</Button>
                                    </HStack>
                                </>
                            }

                            {(findPw && title == "비밀번호찾기") &&
                                <Center p={4} bgColor={'gray.100'}>
                                    <Stack w="100%">
                                        <Input bgColor="white" type="password" placeholder="변경할 비밀번호 입력" onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value) }} />
                                        <Input bgColor="white" type="password" placeholder="변경할 비밀번호 확인" onChange={(e) => { setConfirmPassword(e.target.value); validatePassword(e.target.value) }} />
                                    </Stack>
                                </Center>
                            }

                            {/* { inputData.certification == "이메일" &&
<>
                        <Text>이메일</Text>
                        <HStack>
                        <Input onChange={(e) => setInputData({...inputData, email: e.target.value})}/>
                        <Button>인증하기</Button>
                        </HStack>
                        </>
} */}

                            {(findId.length > 0 && title == "아이디찾기") &&
                                <Center p={4} bgColor={'gray.100'}>
                                    <HStack>
                                        <Text>입력한 정보의 아이디는</Text>
                                        <Text color="red.500">{findId}</Text>
                                        <Text>입니다.</Text>
                                    </HStack>

                                </Center>
                            }
                            <HStack>

                                {title == "아이디찾기" ?
                                    <Button w='100%' onClick={() => setTitle('비밀번호찾기')}>비밀번호찾기</Button> :
                                    <Button w='100%' onClick={() => setTitle('아이디찾기')}>아이디찾기</Button>
                                }
                                <Button w='100%' onClick={() => {
                                    if (title == "아이디찾기")
                                        findId.length > 0 ? onClose() : find()
                                    else
                                        findPw ? changePw() : find()
                                }} colorScheme="red" variant={'outline'}>{title == "아이디찾기" ? findId.length > 0 ? '로그인하기' : title : '비밀번호 변경하기'}</Button>
                            </HStack>
                        </Stack>
                    </ModalBody>
                </ModalContent>

            </Modal>

        </>
    )


}

export default Find;