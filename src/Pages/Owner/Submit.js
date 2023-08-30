import React, { useState } from "react";
import { Stack, HStack, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { PrimaryButton } from "../../Style/Button";
import { DateInput, RadioInput, PhoneInput, TextInput, MailInput } from "../../Components/Form";
import { UserProfileEdit } from "../../Components/UserProfileEdit";
import { FileUploader } from "../../Components/FileUploader";
import { addDocument, getPath } from "../../DB/function";

import PopupPostCode from "../../Components/PopupPostCode";

const Submit = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [inputData, setInputData] = useState({
        profileImage: "",
        division: "Shop",
        name: "",
        birth: "",
        number: "",
        email: "",
        address: "",
        detail_address: "",
        portfolio: ""
    })

    const inputChange = (name, value) => {
        setInputData({ ...inputData, [name]: value })
    }

    const submit = async () => {
        console.log(inputData)
        await addDocument('Submit', inputData)
    }

    return (
        <>
            <Button {...PrimaryButton} onClick={onOpen}>입점하기</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size={'lg'}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>입점 신청서</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Stack direction={'column'} spacing={4}>
                            <UserProfileEdit isRequired={false} label={'프로필 이미지'} profile={inputData.profileImage} setUrl={(value) => inputChange('profileImage', value)} />
                            <RadioInput isRequired={true} label={'구분'} defaultValue={inputData.division} list={['Shop', 'Florist']} onChange={(value) => inputChange('division', value)} />
                            <TextInput isRequired={true} label={'이름'} onChange={(value) => inputChange('name', value)} />
                            <DateInput isRequired={true} label={'생년월일'} onChange={(value) => inputChange('birth', value)} />
                            <TextInput isRequired={true} label={'전화번호'} onChange={(value) => inputChange('number', value)} />
                            <MailInput isRequired={true} label={'이메일'} isError={inputData.email === "" || !(inputData.email.includes('@') && inputData.email.includes('.'))} onChange={(value) => inputChange('email', value)} />

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

                            <FileUploader isRequired={false} label={'사업자등록증'} file={getPath(inputData.business)} accept=".jpg,.pdf" setUrl={(value) => inputChange('business', value)} />
                            <FileUploader isRequired={false} label={'포트폴리오'} file={getPath(inputData.portfolio)} accept=".jpg,.pdf" setUrl={(value) => inputChange('portfolio', value)} />

                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Stack w="full" spacing={6} direction={['column', 'row']}>
                            <Button
                                bg={'red.400'}
                                color={'white'}
                                w="full"
                                _hover={{
                                    bg: 'red.500',
                                }}
                                onClick={() => submit()}
                                isDisabled={!(inputData.name.length > 0 && inputData.birth.length > 0 && inputData.number.length > 0 && inputData.address.length > 0)}
                            >
                                제출하기
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Submit;