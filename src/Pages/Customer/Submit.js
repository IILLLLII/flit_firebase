import React, { useEffect, useState } from "react"
import { Button, Checkbox, CheckboxGroup, Flex, HStack, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useToast } from "@chakra-ui/react"
import MobileStatus from "../../Components/MobileStatus";
import { MailInput } from "../../Components/Form"
import PopupPostCode from "../../Components/PopupPostCode";
import { Privacy, Policy, Service, Translation } from "../../Components/Terms";
import { addDocument, isDuplication } from "../../DB/function";
import { serverTimestamp } from "firebase/firestore";
import { CheckIcon } from "@chakra-ui/icons";

const Submit = () => {
    const toast = useToast();
    const [isNickname, setIsNickname] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState({ isOpen: false, index: -1 });
    const [inputData, setInputData] = useState({
        email: '',
        name: '',
        number: '',
        password: '',
        address: '',
        detail_address: '',
        nickname: '',
        gender: '선택안함',
        agree: [false, false, false, false, false] //privacy, policy, service, trans, marketing
    })
    const [inputPassword, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function AgreeCheckbox() {
        // const [checkedItems, setCheckedItems] = React.useState([false, false, false, false, false])

        const allChecked = inputData.agree.every(Boolean)
        const isIndeterminate = inputData.agree.some(Boolean) && !allChecked

        return (
            <Stack bgColor={'gray.50'} p={2}>
                <Checkbox
                    colorScheme="red"
                    isChecked={allChecked}
                    isIndeterminate={isIndeterminate}
                    onChange={(e) => setInputData({ ...inputData, agree: [e.target.checked, e.target.checked, e.target.checked, e.target.checked, e.target.checked] })}
                >
                    전체 선택
                </Checkbox>
                <Stack pl={4}>
                    <Checkbox colorScheme="red"
                        isChecked={inputData.agree[0]}
                        onChange={(e) => setInputData({ ...inputData, agree: [e.target.checked, inputData.agree[1], inputData.agree[2], inputData.agree[3], inputData.agree[4]] })}
                        size={'sm'}
                    >
                        [필수] 개인(신용)정보 수집・이용 동의
                        <Link color={'gray.400'} p={1} textDecoration={'none'} onClick={() => setIsModalOpen({ isOpen: true, index: 0 })}>보기</Link>
                    </Checkbox>
                    <Checkbox colorScheme="red"
                        isChecked={inputData.agree[1]}
                        onChange={(e) => setInputData({ ...inputData, agree: [inputData.agree[0], e.target.checked, inputData.agree[2], inputData.agree[3], inputData.agree[4]] })}
                        size={'sm'}
                    >
                        [필수] 개인정보처리방침
                        <Link color={'gray.400'} p={1} textDecoration={'none'} onClick={() => setIsModalOpen({ isOpen: true, index: 1 })}>보기</Link>
                    </Checkbox>
                    <Checkbox colorScheme="red"
                        isChecked={inputData.agree[2]}
                        onChange={(e) => setInputData({ ...inputData, agree: [inputData.agree[0], inputData.agree[1], e.target.checked, inputData.agree[3], inputData.agree[4]] })}
                        size={'sm'}
                    >
                        [필수] 서비스 이용약관
                        <Link color={'gray.400'} p={1} textDecoration={'none'} onClick={() => setIsModalOpen({ isOpen: true, index: 2 })}>보기</Link>
                    </Checkbox>
                    <Checkbox colorScheme="red"
                        isChecked={inputData.agree[3]}
                        onChange={(e) => setInputData({ ...inputData, agree: [inputData.agree[0], inputData.agree[1], inputData.agree[2], e.target.checked, inputData.agree[4]] })}
                        size={'sm'}
                    >
                        [필수] 전자금융거래 이용약관
                        <Link color={'gray.400'} p={1} textDecoration={'none'} onClick={() => setIsModalOpen({ isOpen: true, index: 3 })}>보기</Link>
                    </Checkbox>
                    <Checkbox colorScheme="red"
                        isChecked={inputData.agree[4]}
                        onChange={(e) => setInputData({ ...inputData, agree: [inputData.agree[0], inputData.agree[1], inputData.agree[2], inputData.agree[3], e.target.checked] })}
                        size={'sm'}
                    >
                        [선택] 마케팅 정보이용 동의
                        <Link color={'gray.400'} p={1} textDecoration={'none'} onClick={() => setIsModalOpen({ isOpen: true, index: 4 })}>보기</Link>
                    </Checkbox>
                </Stack>
            </Stack>
        )
    }

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

    const checkDuplication = async (type, value) => {
        let ret = await isDuplication('Customer', type, value)
        let title = type === 'nickname' ? '닉네임' : '이메일'
        if (!value.length) {
            toast({
                status: 'error',
                title: `${title}을 입력해주세요`,
                duration: 1000,
            })
            if (type === "nickname")
                setIsNickname(false)

            if (type === "email")
                setIsEmail(false)
            return
        }

        if (ret) {
            toast({
                status: 'warning',
                title: `이미 존재하는 ${title}입니다.`,
                duration: 1000,
            })
            if (type === "nickname")
                setIsNickname(false)

            if (type === "email")
                setIsEmail(false)
            return
        }
        else {
            toast({
                status: 'success',
                title: `사용 가능한 ${title}입니다.`,
                duration: 1000,
            })

            if (type === "nickname")
                setIsNickname(true)

            if (type === "email")
                setIsEmail(true)
        }
    }

    const submit = async () => {
        if (!isNickname) {
            toast({
                status: 'warning',
                title: '닉네임 중복 확인을 진행해주세요!',
                duration: 1000,
            })
            return
        }

        if (inputPassword !== confirmPassword) {
            toast({
                status: 'warning',
                title: '패스워드를 다시 확인해주세요!',
                duration: 1000,
            })
            return
        }

        if (!inputData.email.length) {
            toast({
                status: 'warning',
                title: '이메일을 입력해주세요!',
                duration: 1000,
            })
            return
        }

        if (!inputData.name.length) {
            toast({
                status: 'warning',
                title: '이름을 입력해주세요!',
                duration: 1000,
            })
            return
        }

        if (!inputData.number.length) {
            toast({
                status: 'warning',
                title: '전화번호를 입력해주세요!',
                duration: 1000,
            })
            return
        }

        if (!inputData.address.length) {
            toast({
                status: 'warning',
                title: '주소를 입력해주세요!',
                duration: 1000,
            })
            return
        }

        if (!inputData.nickname.length) {
            toast({
                status: 'warning',
                title: '닉네임을 입력해주세요!',
                duration: 1000,
            })
            return
        }

        await addDocument('Customer', { ...inputData, password: inputPassword, grade: 'Green', profile_image: '', date: serverTimestamp(), division: '개인' })

    }

    return (
        <Flex bgColor={'white'} h={'100vh'} flexDirection={'column'} p={2}>
            <MobileStatus title={'회원가입'} />
            <Stack direction={'column'}>
                <HStack mb={2}>

                    <Input borderColor={'#d9d9d9'}type="email" placeholder="이메일" onChange={(e) => setInputData({ ...inputData, email: e.target.value })} />
                    <Button colorScheme={isEmail ? 'green' : 'gray'} onClick={() => checkDuplication('email', inputData.email)}>
                        {/* <Text>중복확인</Text> */}
                        <CheckIcon />
                    </Button>
                </HStack>
                <Input borderColor={'#d9d9d9'}mb={2} type="text" placeholder="이름" onChange={(e) => setInputData({ ...inputData, name: e.target.value })} />
                <Input borderColor={'#d9d9d9'}mb={2} isInvalid={!isPasswordValid} borderColor={isPasswordValid ? 'gray.200' : '#da4359'} type="password" placeholder="비밀번호" onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value) }} />
                <Input borderColor={'#d9d9d9'}mb={2} isInvalid={!isPasswordValid} borderColor={isPasswordValid ? 'gray.200' : '#da4359'} type="password" placeholder="비밀번호 확인" onChange={(e) => { setConfirmPassword(e.target.value); validatePassword(e.target.value) }} />
                <HStack mb={2}>

                    <Input borderColor={'#d9d9d9'}type="text" placeholder="전화번호" value={inputData.number} maxLength={11} onChange={(e) => setInputData({ ...inputData, number: (e.target.value.replaceAll('-', '')) })} />
                    <Button>인증하기</Button>
                </HStack>
                <HStack mb={2}>
                    <Button onClick={() => setInputData({ ...inputData, gender: '남자' })} colorScheme={inputData.gender === "남자" ? 'red' : 'gray'} variant={inputData.gender === "남자" ? 'solid' : 'outline'} w='100%'>남자</Button>
                    <Button onClick={() => setInputData({ ...inputData, gender: '여자' })} colorScheme={inputData.gender === "여자" ? 'red' : 'gray'} variant={inputData.gender === "여자" ? 'solid' : 'outline'} w='100%'>여자</Button>
                    <Button onClick={() => setInputData({ ...inputData, gender: '선택안함' })} colorScheme={inputData.gender === "선택안함" ? 'red' : 'gray'} variant={inputData.gender === "선택안함" ? 'solid' : 'outline'} w='100%'>선택안함</Button>
                </HStack>
                <HStack mb={2} alignItems={'flex-end'}>
                    <Input borderColor={'#d9d9d9'}type="text" defaultValue={inputData.address} disabled={true} _disabled={{ colorScheme: 'gray' }} placeholder="주소" />
                    <Button onClick={() => setIsPopupOpen(true)}>주소검색</Button>
                </HStack>
                <Input borderColor={'#d9d9d9'}mb={2} type="text" placeholder="상세주소" onChange={(e) => setInputData({ ...inputData, detail_address: e.target.value })} />
                <HStack mb={2}>
                    <Input borderColor={'#d9d9d9'}type="text" placeholder="닉네임" onChange={(e) => { setIsNickname(false); setInputData({ ...inputData, nickname: e.target.value }) }} />
                    <Button colorScheme={isNickname ? 'green' : 'gray'} onClick={() => checkDuplication('nickname', inputData.nickname)}>
                        {/* <Text>중복확인</Text> */}
                        <CheckIcon />
                    </Button>
                </HStack>


                <AgreeCheckbox />
            </Stack>

            <Flex bgColor={'white'} position={'fixed'} w={'90%'} bottom={0} alignSelf={'center'} p={"10px"}>

                <Button onClick={() => submit()} w="100%" variant={'outline'} mb={4} colorScheme="red" isDisabled={!(inputData.agree[0] && inputData.agree[1] && inputData.agree[2] && inputData.agree[3])}>회원가입 완료</Button>
            </Flex>

            <Modal isOpen={isPopupOpen} size={'xl'} onClose={() => setIsPopupOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>주소검색</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <PopupPostCode onClose={() => setIsPopupOpen(false)} onChange={(value) => setInputData({ ...inputData, address: value })} />
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Modal isOpen={isModalOpen.isOpen} size={'full'} onClose={() => setIsModalOpen({ isOpen: false, index: -1 })}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody mt={10}>
                        {isModalOpen.index == 0 &&
                            <Privacy />
                        }
                        {isModalOpen.index == 1 &&
                            <Policy />
                        }
                        {isModalOpen.index == 2 &&
                            <Service />
                        }
                        {isModalOpen.index == 3 &&
                            <Translation />
                        }

                    </ModalBody>
                    <ModalFooter>

                        <Button onClick={() => {
                            let agree = inputData.agree;
                            agree[isModalOpen.index] = true;
                            console.log(agree);
                            setInputData({ ...inputData, agree: agree });
                            setIsModalOpen({ isOpen: false, index: -1 });
                        }}>확인</Button>
                    </ModalFooter>
                </ModalContent>

            </Modal>
        </Flex>
    )
}
export default Submit;