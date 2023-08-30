import {
    Flex,
    Heading,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Box, Button, Center, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure
} from "@chakra-ui/react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRef } from "react";
import { storage } from "../DB/firebase-config";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { v4 } from 'uuid';

export function UserProfileEdit({ isRequired, label, profile, ...props }) {
    const imageInputRef = useRef();
    const handleClick = () => {
        if (imageInputRef.current) {
            imageInputRef.current.click();
        }
    }

    const uploadFile = (file) => {
        if (file == null) return "";
        var url = file.name + v4();

        const imageRef = ref(storage, `${url}`)

        uploadBytes(imageRef, file).then((snapshot) => {
            // 업로드 되자마자 뜨게 만들기
            getDownloadURL(snapshot.ref).then((imageUrl) => {
                props.setUrl(imageUrl);
            });
        })
    }

    const reset = () => {
        props.setUrl("");
    }

    return (
        <FormControl id="userName" isRequired={isRequired}>
        <FormLabel>{label}</FormLabel>
        <Stack direction={'column'} spacing={6}>
            <Center>
                <Avatar size="xl" src={profile} bgColor={'gray.400'}>
                    <AvatarBadge
                        display={profile ? "" : "none"}
                        as={IconButton}
                        size="sm"
                        rounded="full"
                        top="-10px"
                        colorScheme="red"
                        aria-label="remove Image"
                        icon={<SmallCloseIcon />}
                        onClick={() => reset()}
                    />
                </Avatar>
            </Center>
            <Center w="full">
                <Button w="150px" onClick={() => handleClick()}>이미지 변경</Button>
                <input
                    type="file"
                    ref={imageInputRef}
                    name='image'
                    style={{ display: "none" }}
                    onChange={(e) => uploadFile(e.target.files[0])}
                    accept="image/*"
                />
            </Center>
        </Stack>
    </FormControl>
    )
}