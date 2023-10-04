import React, { useEffect, useState } from "react";
import { Box, Text, Stack, HStack, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, TagCloseButton, IconButton, Center, Flex } from "@chakra-ui/react";
import { PrimaryButton } from "../../../Style/Button";
import { DateInput, RadioInput, PhoneInput, TextInput, MailInput } from "../../../Components/Form";
import { UserProfileEdit } from "../../../Components/UserProfileEdit";
import { FileUploader } from "../../../Components/FileUploader";
import { addDocument, getPath, getShop, updateData } from "../../../DB/function";
import PopupPostCode from "../../../Components/PopupPostCode";
import { Background, Title } from "../../../Style/Form";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { Title_2xl } from "../../../Style/Typograhy";
import { v4 } from "uuid";

const SubmitView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [shopInfo, setShopInfo] = useState({
        shopname: '',
        nickname: '',
        follower: [],
        review: [],
        category: [],
        delivery: ['픽업', '배송'],
        use_bundle_delivery: false,
        bundle_delivery: 0,
        operate_time: {
            week_open: '09:00',
            week_close: '18:00',
            weekend_open: '09:00',
            weekend_close: '18:00',
        },
        reserve_time: {
            week_open: '09:00',
            week_close: '18:00',
            weekend_open: '09:00',
            weekend_close: '18:00',
        },
        break_time: {
            week_open: '09:00',
            week_close: '18:00',
            weekend_open: '09:00',
            weekend_close: '18:00',
        },
        holiday: [],
        sns: [],
        email: '',
        comment: ''
    })

    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const [inputData, setInputData] = useState({
        profileImage: "",
        division: "Shop",
        name: "",
        birth: "",
        number: "",
        email: "",
        address: "",
        detail_address: "",
        portfolio: "",
        approve: false
    })

    useEffect(() => {
        if (location.state) {
            setInputData(location.state)
        }
    }, []);

    const inputChange = (name, value) => {
        setInputData({ ...inputData, [name]: value })
    }

    const updateSubmit = async() => {
        let approve_ = inputData.approve === "승인" ? "미승인" : "승인";
        await updateData('Owner', inputData.id, {...inputData, grade:'Flinney', approve: approve_, password: v4().split('-')[0]})

        if(approve_ == "승인" && !getShop(inputData.id))
        {
            await addDocument('Shop', {...shopInfo, ownerId : inputData.id});
        }
    }

    return (
        <Flex alignItems={'center'} flexDirection={'column'}>
            <Box {...Background}>
                <HStack>
                    <Text {...Title_2xl}>
                        <IconButton mr={2} bgColor={'transparent'} borderRadius={'full'} icon={<FiArrowLeftCircle size={'md'} />} onClick={() => navigate(-1)} />
                        입점신청서
                    </Text>
                </HStack>

                <Stack direction={'column'} spacing={4}>
                    <UserProfileEdit isRequired={false} label={'프로필 이미지'} profile={inputData.profileImage} setUrl={(value) => inputChange('profileImage', value)} />
                    <RadioInput isRequired={true} label={'구분'} defaultValue={inputData.division} list={['Shop', 'Florist']} onChange={(value) => inputChange('division', value)} />
                    <TextInput isRequired={true} label={'이름'} defaultValue={inputData.name} onChange={(value) => inputChange('name', value)} />
                    <DateInput isRequired={true} label={'생년월일'} defaultValue={inputData.birth} onChange={(value) => inputChange('birth', value)} />
                    <TextInput isRequired={true} label={'전화번호'} defaultValue={inputData.number} onChange={(value) => inputChange('number', value)} />
                    <MailInput isRequired={true} label={'이메일'} defaultValue={inputData.email} isError={inputData.email === "" || !(inputData.email.includes('@') && inputData.email.includes('.'))} onChange={(value) => inputChange('email', value)} />

                    <HStack alignItems={'flex-end'}>
                        <TextInput isRequired={true} label={'주소'} defaultValue={inputData.address} disabled={true} onChange={(value) => inputChange('address', value)} />
                        <Button onClick={() => setIsPopupOpen(true)}>주소검색</Button>
                    </HStack>
                    <Modal isOpen={isPopupOpen} size={'xl'} onClose={() => setIsPopupOpen(false)}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>주소검색</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <PopupPostCode onClose={() => setIsPopupOpen(false)} onChange={(value) => inputChange('address', value)} />
                            </ModalBody>
                        </ModalContent>
                    </Modal>

                    <TextInput isRequired={false} label={'상세주소'} defaultValue={inputData.detail_address} onChange={(value) => inputChange('detail_address', value)} />

                    <FileUploader isRequired={false} label={'사업자등록증'} file={inputData.business} accept=".jpg,.pdf" setUrl={(value) => inputChange('business', value)} />
                    <FileUploader isRequired={false} label={'포트폴리오'} file={inputData.portfolio} accept=".jpg,.pdf" setUrl={(value) => inputChange('portfolio', value)} />

                    <TextInput isDisabled={true} label={'임시비밀번호'} defaultValue={inputData.password}/>
                </Stack>

                <Center m={8}>
                    <Button
                        bg={inputData.approve === "승인" ? 'gray.400' : 'green.400'}
                        color={'white'}
                        w='50%'
                        _hover={{
                            bg: inputData.approve === "승인" ? 'gray.500' : 'green.500',
                        }}
                        onClick={() => { updateSubmit(); navigate(-1); }}
                        isDisabled={!(inputData.name.length > 0 && inputData.birth.length > 0 && inputData.number.length > 0 && inputData.address.length > 0)}
                    >
                        {inputData.approve === "승인" ? '승인취소' : '승인하기'}
                    </Button>
                </Center>
            </Box>
        </Flex>
    )

}
export default SubmitView;