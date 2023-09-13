import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, Button, ButtonGroup, Card, Checkbox, CheckboxGroup, Circle, Container, Flex, HStack, IconButton, Input, InputGroup, InputRightAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Progress, Radio, RadioGroup, Select, Stack, Table, TableContainer, Tag, TagCloseButton, Tbody, Td, Text, Textarea, Th, Thead, Tr, VStack, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Body_sm, Title_2xl, Title_lg } from "../../../Style/Typograhy";
import ImageUploader from "../../../Components/ImageUploader";
import { AddIcon } from "@chakra-ui/icons";
import { BorderTable, TBody, THeader } from "../../../Style/Table";
import { addDocument, formattedAmount } from "../../../DB/function";
import { TextInput } from "../../../Components/Form";
import PopupPostCode from "../../../Components/PopupPostCode";
import ColorPicker from "../../../Components/ColorPicker";
import ConfirmButton from "../../../Components/ConfirmButton";
import { useLocation, useNavigate } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";

const category = {
    flower: ['꽃다발', '꽃바구니', '플라워박스', '화병꽂이'],
    plant: ['동양난 | 서양난', '다육 | 화분', '공기정화 | 관엽'],
    weath: ['축하화환', '근조화환', '디자인화환'],
    land: ['플랜테리어(실내조경)', '가드닝(실외조경)'],
    premium: ['웨딩 | 리마인드', '생일 | 파티 | 프로포즈', '백일 | 돌상', ' 애견', '시즌 | 행사']
}

export const ProductAdd = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const panelColor = 'gray.50';
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [allToggle, setAllToggle] = useState(false)
    const [process, setProcess] = useState(0)
    const [option, setOption] = useState({
        name: '',
        price: '',
    })
    const [productInfo, setProduct] = useState(location.state ? location.state : {
        ownerId: localStorage.getItem('ownerToken'),
        product_name: "",
        thumbnail_image: "",
        product_image: [],
        comment: "",
        reply: '설정함',
        tag: [],
        color: [],
        review: [],
        goods: [],
        regist_date: serverTimestamp()

    })


    const [tag, setTag] = useState("")
    const [selTags, setTags] = useState(productInfo.tag)

    useEffect(() => {
        var process = 0;
        if (productInfo.product_name.length > 0)
            process += 30;
        if (productInfo.thumbnail_image.length > 0)
            process += 30;
        if (productInfo.comment.length > 0)
            process += 40;

        setProcess(process)
    }, [productInfo]);


    const addTag = () => {
        if (!selTags.includes(tag))
            setTags([...selTags, tag])

        setProduct({ ...productInfo, tag: [...selTags, tag] })

    }

    const delTag = (value) => {
        let filtered = selTags.filter((element) => element !== value);
        setTags(filtered);

        setProduct({ ...productInfo, tag: filtered })
    }

    return (
        <Box >
            <Text {...Title_2xl} color={'gray.800'}>
                포트폴리오 등록
            </Text>

            <VStack w={'full'} spacing={6}>

                <Box w={'full'} >
                    <Progress value={process} size='xs' colorScheme='red' />
                </Box>

                <Card w={'full'}>
                    <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <HStack alignItems={'flex-start'} mt={2}>
                                            <Text {...Title_lg}>상품명</Text>
                                            <Circle bgColor={'red'} w={2} h={2}></Circle>
                                        </HStack>
                                    </Box>

                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={panelColor}>
                                <InputGroup maxW={'300px'}>
                                    <Input bgColor={'white'} maxLength={15} defaultValue={productInfo.product_name} onChange={(e) => setProduct({ ...productInfo, product_name: e.target.value })}></Input>
                                    <InputRightAddon><Text color={productInfo.product_name.length > 15 ? 'red' : 'black'}>{productInfo.product_name.length}</Text> /15</InputRightAddon>
                                </InputGroup>
                                <Text mt={1} {...Body_sm} color={'gray.500'} mx={2}>판매 상품과 직접 관련이 없는 다른 사품명, 스팸성 키워드 입력 시 관리자에 의해 판매 금지될 수 있습니다.</Text>

                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <HStack alignItems={'flex-start'} mt={2}>
                                            <Text {...Title_lg}>상품이미지</Text>
                                            <Circle bgColor={'red'} w={2} h={2}></Circle>
                                        </HStack>

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={panelColor}>
                                <Stack direction={'column'} spacing={4}>
                                    <HStack alignItems={'flex-start'}>
                                        <Text minW="150px">메인이미지</Text>
                                        <HStack w='full'>

                                            <ImageUploader src={productInfo.thumbnail_image} setUrl={(value) => setProduct({ ...productInfo, thumbnail_image: value })} w="200px" h="200px" />
                                        </HStack>
                                    </HStack>
                                    <Box borderTop={'0.5px solid'} borderColor={'gray.300'} w={'full'} />
                                    <HStack alignItems={'flex-start'}>
                                        <Text minW="150px">추가이미지 ({productInfo.product_image.length}/5)</Text>
                                        <HStack w='full' overflowX={'scroll'} py={2}>
                                            {productInfo.product_image.map((val, index) => (
                                                <ImageUploader src={val} setUrl={(value) => {
                                                    if (value === null) {
                                                        console.log('delete!', index)
                                                        productInfo.product_image.splice(index, 1)
                                                        setProduct({ ...productInfo })
                                                    }
                                                    else {
                                                        console.log('add!', index)
                                                        setProduct({ ...productInfo, product_image: [...productInfo.product_image, value] })
                                                    }
                                                }} w="200px" h="200px" />
                                            ))}
                                            {productInfo.product_image.length < 5 &&
                                                <ImageUploader setUrl={(value) => setProduct({ ...productInfo, product_image: [...productInfo.product_image, value] })} w="200px" h="200px" />
                                            }
                                        </HStack>
                                    </HStack>
                                </Stack>

                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <HStack alignItems={'flex-start'} mt={2}>
                                            <Text {...Title_lg}>상세설명</Text>
                                            <Circle bgColor={'red'} w={2} h={2}></Circle>
                                        </HStack>

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} justifyContent={'flex-end'} bgColor={panelColor}>
                                <Textarea bgColor={'white'} minH={'280px'} maxLength={5000} defaultValue={productInfo.comment} onChange={(e) => setProduct({ ...productInfo, comment: e.target.value })} />
                                <Text textAlign={'right'}>({productInfo.comment.length}/5000)</Text>

                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Card>

                <Card w={'full'}>
                    <Accordion >
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <HStack>

                                            <Text w={'100px'} {...Title_lg}>댓글 설정</Text>
                                            <RadioGroup size={'lg'} mb={2} defaultValue={productInfo.reply} onChange={(value) => setProduct({ ...productInfo, reply: { ...productInfo.option, reply: value } })}>
                                                <HStack spacing={6}>

                                                    <Radio colorScheme="red" value={'설정함'}>설정함</Radio>
                                                    <Radio colorScheme="red" value={'설정안함'}>설정안함</Radio>
                                                </HStack>
                                            </RadioGroup>
                                        </HStack>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                        </AccordionItem>
                    </Accordion>
                </Card>

                <Card w={'full'}>
                    <Accordion allowMultiple defaultIndex={[0]}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text {...Title_lg}>검색필터</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={panelColor}>
                                <HStack alignItems={'flex-start'}>
                                    <Text w='150px'>태그</Text>

                                    <Stack direction={'column'} w='70%'>

                                        <HStack w='full'>

                                            <Input bgColor={'white'} onChange={(e) => setTag(e.target.value)} />
                                            <Button onClick={() => addTag()}>추가</Button>
                                        </HStack>
                                        <Wrap mx={1}>
                                            {selTags.map((value) => (
                                                <WrapItem>
                                                    <Tag>
                                                        {value}
                                                        <TagCloseButton onClick={() => delTag(value)} />
                                                    </Tag>
                                                </WrapItem>
                                            ))

                                            }
                                        </Wrap>
                                    </Stack>
                                </HStack>

                                <HStack mt={4}>
                                    <Text w='150px'>색상</Text>
                                    <ColorPicker selColor={productInfo.color} setColor={(value) => setProduct({ ...productInfo, color: value })} />
                                </HStack>

                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                </Card>

                <ButtonGroup>
                    <Button>취소</Button>
                    {/* <Button colorScheme="red" onClick={() => submit()}>상품등록</Button> */}
                    <ConfirmButton collection={'Portfolio'} data={productInfo} type={location.state ? '수정' : '등록'} disabled={process < 100} />
                </ButtonGroup>

            </VStack>

            <Modal isOpen={isPopupOpen} size={'xl'} onClose={() => setIsPopupOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>주소검색</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <PopupPostCode onClose={() => setIsPopupOpen(false)} onChange={(value) => setProduct({ ...productInfo, address: value })} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )

}

export const ProductUpdate = () => {
    return (
        <Box>
            <Text>
                {window.location.pathname}
            </Text>
        </Box>
    )

}

export default ProductAdd;