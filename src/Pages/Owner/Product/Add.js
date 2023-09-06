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
        category1: "꽃",
        category2: "꽃다발",
        product_name: "",
        thumbnail_image: "",
        product_image: [],
        comment: "",
        count: 0,   //토탈재고
        sales_count: 0,
        original_price: 0,
        sales_price: 0,
        discount: {
            set: '설정안함',
            value: 0,
            unit: '%',
            start: new Date().getFullYear() + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + "-" + ('0' + new Date().getDate()).slice(-2),
            end: new Date().getFullYear() + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + "-" + ('0' + new Date().getDate()).slice(-2),
        },
        point: {
            set: '설정안함',
            value: 0,
            unit: '%',
            buy: {
                set: true,
                value: 0,
                unit: "%"
            },
            review: {
                set: true,
                value: 0,
                unit: "%"
            }
        },
        saletime: {
            set: '설정안함',
            start: new Date().getFullYear() + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + "-" + ('0' + new Date().getDate()).slice(-2),
            end: new Date().getFullYear() + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + "-" + ('0' + new Date().getDate()).slice(-2),
        },
        tax: '과세상품',
        option: {
            set: '설정안함',
            order: '등록순',
            item: [],
            select: false,
        },
        delivery: ['픽업', '배송'],
        barogo: ['바로고', '기타'],
        delivery_fee: 0,
        bundle_delivery: '설정함',
        address: '',
        detail_address: '',
        tag: [],
        color: [],
        review: [],
        goods: [],
        regist_date: new Date()

    })


    const [tag, setTag] = useState("")
    const [selTags, setTags] = useState(productInfo.tag)

    useEffect(() => {
        var process = 0;
        if (productInfo.category1.length > 0)
            process += 10;
        if (productInfo.category2.length > 0)
            process += 10;
        if (productInfo.product_name.length > 0)
            process += 10;
        if (productInfo.thumbnail_image.length > 0)
            process += 20;
        if (productInfo.comment.length > 0)
            process += 10;
        if (productInfo.original_price.length > 0)
            process += 10;
        if (productInfo.sales_price.length > 0)
            process += 10;
        if (productInfo.delivery.length > 0)
            process += 20;

        setProcess(process)
    }, [productInfo]);

    function addDays(days) {
        var today = new Date;
        var todayStr = today.getFullYear() + "-" + ('0' + (today.getMonth() + 1)).slice(-2) + "-" + ('0' + today.getDate()).slice(-2);

        var endDay = new Date;
        endDay.setDate(endDay.getDate() + days);
        var endDayStr = endDay.getFullYear() + "-" + ('0' + (endDay.getMonth() + 1)).slice(-2) + "-" + ('0' + endDay.getDate()).slice(-2);
        console.log(todayStr, endDayStr);

        setProduct({ ...productInfo, saletime: { ...productInfo.saletime, start: todayStr, end: endDayStr } })
    }

    const changeUseOption = (index) => {
        var option = productInfo.option.item
        var toggleUse = !productInfo.option.item[index].use
        option[index] = { ...productInfo.option.item[index], use: toggleUse }
        setProduct({ ...productInfo, option: { ...productInfo.option, item: option } })
    }

    const changeSelectOption = (index) => {

        var option = productInfo.option.item
        if (index < 0) {
            setAllToggle(!allToggle)
            for (var i = 0; i < option.length; i++) {
                option[i] = { ...productInfo.option.item[i], select: !allToggle }
            }
        }
        else {
            var toggleSelect = !productInfo.option.item[index].select
            option[index] = { ...productInfo.option.item[index], select: toggleSelect }
        }

        console.log(option)
        setProduct({ ...productInfo, option: { ...productInfo.option, item: option } })
    }

    const deleteSelectOption = () => {
        var option = productInfo.option.item
        for (var i = productInfo.option.item.length - 1; i >= 0; i--) {
            if (option[i].select) {
                option.splice(i, 1)
            }
        }

        setProduct({ ...productInfo, option: { ...productInfo.option, item: option } })
    }

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
                상품 등록
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
                                            <Text {...Title_lg}>카테고리</Text>
                                            <Circle bgColor={'red'} w={2} h={2}></Circle>
                                        </HStack>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={panelColor}>
                                <HStack>
                                    <Select bgColor={'white'} defaultValue={productInfo.category1} onChange={(e) => setProduct({ ...productInfo, category1: e.target.value })}>
                                        <option value={"꽃"}>꽃</option>
                                        <option value={"식물"}>식물</option>
                                        <option value={"화환"}>화환</option>
                                        <option value={"조경"}>조경</option>
                                        <option value={"프리미엄"}>프리미엄</option>
                                    </Select>
                                    <Select bgColor={'white'} defaultValue={productInfo.category2} onChange={(e) => setProduct({ ...productInfo, category2: e.target.value })}>
                                        {productInfo.category1 == "꽃" &&
                                            category.flower.map((value) => (
                                                <option value={value}>{value}</option>
                                            ))
                                        }
                                        {productInfo.category1 == "식물" &&
                                            category.plant.map((value) => (
                                                <option value={value}>{value}</option>
                                            ))
                                        }
                                        {productInfo.category1 == "화환" &&
                                            category.weath.map((value) => (
                                                <option value={value}>{value}</option>
                                            ))
                                        }
                                        {productInfo.category1 == "조경" &&
                                            category.land.map((value) => (
                                                <option value={value}>{value}</option>
                                            ))
                                        }
                                        {productInfo.category1 == "프리미엄" &&
                                            category.premium.map((value) => (
                                                <option value={value}>{value}</option>
                                            ))
                                        }
                                    </Select>
                                </HStack>
                                <Text mt={1} {...Body_sm} color={'gray.500'} mx={2}>상품과 맞지 않는 카테고리에 등록할 경우 강제 이동되거나 판매중지, 판매 금지 될 수 있습니다.</Text>

                            </AccordionPanel>
                        </AccordionItem>

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
                    <Accordion allowMultiple defaultIndex={[0, 1, 2, 3, 4, 5, 6]}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <HStack alignItems={'flex-start'} mt={2}>
                                            <Text {...Title_lg}>상품 재고</Text>
                                            <Circle bgColor={'red'} w={2} h={2}></Circle>
                                        </HStack>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={panelColor}>
                                <InputGroup maxW={'300px'} >

                                    <Input bgColor={'white'} type='number' value={productInfo.count} placeholder="개수를 입력하세요." onChange={(e) => setProduct({ ...productInfo, count: e.target.value })} />
                                    <InputRightAddon>개</InputRightAddon>
                                </InputGroup>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <HStack alignItems={'flex-start'} mt={2}>
                                            <Text {...Title_lg}>원가</Text>
                                            <Circle bgColor={'red'} w={2} h={2}></Circle>
                                        </HStack>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={panelColor}>
                                <InputGroup maxW={'300px'} >

                                    <Input bgColor={'white'} type='number' value={productInfo.original_price} placeholder="금액을 입력하세요." onChange={(e) => setProduct({ ...productInfo, original_price: e.target.value })} />
                                    <InputRightAddon>원</InputRightAddon>
                                </InputGroup>
                                <Text mt={1} {...Body_sm} color={'gray.500'} mx={2}>매출 계산 시 적용됩니다.</Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <HStack alignItems={'flex-start'} mt={2}>
                                            <Text {...Title_lg}>판매가</Text>
                                            <Circle bgColor={'red'} w={2} h={2}></Circle>
                                        </HStack>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={panelColor}>
                                <InputGroup maxW={'300px'} >

                                    <Input bgColor={'white'} type='number' value={productInfo.sales_price} placeholder="금액을 입력하세요." onChange={(e) => setProduct({ ...productInfo, sales_price: e.target.value })} />
                                    <InputRightAddon>원</InputRightAddon>
                                </InputGroup>
                                <Text mt={1} {...Body_sm} color={'gray.500'} mx={2}>플릿을 통한 거래는 수수료가 발생합니다. <Text as={'a'} href="#">{'> 수수료안내'}</Text></Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <HStack>

                                            <Text w={'100px'} {...Title_lg}>할인</Text>
                                            <RadioGroup size={'lg'} mb={2} defaultValue={productInfo.discount.set} onChange={(value) => setProduct({ ...productInfo, discount: { ...productInfo.discount, set: value } })}>
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
                            <AccordionPanel pb={4} display={productInfo.discount.set == "설정함" ? '' : 'none'} bgColor={panelColor}>
                                <HStack alignItems={'flex-start'}>
                                    <Text w={'100px'}>기본할인</Text>
                                    <Stack direction={'column'}>
                                        <InputGroup maxW={'300px'}>
                                            <Input bgColor={'white'} type="number" defaultValue={productInfo.discount.value} onChange={(e) => setProduct({ ...productInfo, discount: { ...productInfo.discount, value: e.target.value } })} />
                                            <InputRightAddon cursor={'pointer'} onClick={() => setProduct({ ...productInfo, discount: { ...productInfo.discount, unit: productInfo.discount.unit == "%" ? "원" : "%" } })}>
                                                {productInfo.discount.unit}
                                            </InputRightAddon>
                                        </InputGroup>

                                        <Text mt={1} {...Body_sm} color={'gray.500'} mb={4}>판매가에서 즉시 할인된 가격으로 상품을 판매할 수 있습니다.</Text>
                                    </Stack>
                                </HStack>
                                <HStack >
                                    <Text w={'100px'}>할인기간</Text>
                                    <HStack>
                                        <Input bgColor={'white'} type="date" defaultValue={productInfo.discount.start} onChange={(e) => setProduct({ ...productInfo, discount: { ...productInfo.discount, start: e.target.value } })} />
                                        <Text>~</Text>
                                        <Input bgColor={'white'} type="date" defaultValue={productInfo.discount.end} onChange={(e) => setProduct({ ...productInfo, discount: { ...productInfo.discount, end: e.target.value } })} />
                                    </HStack>

                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <HStack>

                                            <Text w={'100px'} {...Title_lg}>포인트</Text>
                                            <RadioGroup size={'lg'} mb={2} defaultValue={productInfo.point.set} onChange={(value) => setProduct({ ...productInfo, point: { ...productInfo.point, set: value } })}>
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
                            <AccordionPanel pb={4} display={productInfo.point.set == "설정함" ? '' : 'none'} bgColor={panelColor}>
                                <Stack direction={'column'} spacing={2}>
                                    <HStack>
                                        <Checkbox defaultChecked={productInfo.point.buy.set} colorScheme="red" w={'150px'}>상품구매시</Checkbox>
                                        <InputGroup maxW={'300px'}>
                                            <Input bgColor={'white'} type="number" defaultValue={productInfo.point.buy.value} onChange={(e) => setProduct({ ...productInfo, point: { ...productInfo.point, buy: { ...productInfo.point.buy, value: e.target.value } } })} />
                                            <InputRightAddon cursor={'pointer'} onClick={() => setProduct({ ...productInfo, point: { ...productInfo.point, buy: { ...productInfo.point.buy, unit: productInfo.point.buy.unit == "%" ? "원" : "%" } } })}>
                                                {productInfo.point.buy.unit}
                                            </InputRightAddon>
                                        </InputGroup>
                                    </HStack>
                                    <HStack>
                                        <Checkbox defaultChecked={productInfo.point.review.set} colorScheme="red" w={'150px'}>리뷰작성시</Checkbox>
                                        <InputGroup maxW={'300px'}>
                                            <Input bgColor={'white'} type="number" defaultValue={productInfo.point.review.value} onChange={(e) => setProduct({ ...productInfo, point: { ...productInfo.point, review: { ...productInfo.point.review, value: e.target.value } } })} />
                                            <InputRightAddon cursor={'pointer'} onClick={() => setProduct({ ...productInfo, point: { ...productInfo.point, review: { ...productInfo.point.review, unit: productInfo.point.review.unit == "%" ? "원" : "%" } } })}>
                                                {productInfo.point.review.unit}
                                            </InputRightAddon>
                                        </InputGroup>
                                    </HStack>
                                </Stack>

                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <HStack>

                                            <Text w={'100px'} {...Title_lg}>판매기간</Text>
                                            <RadioGroup size={'lg'} mb={2} defaultValue={productInfo.saletime.set} onChange={(value) => setProduct({ ...productInfo, saletime: { ...productInfo.saletime, set: value } })}>
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
                            <AccordionPanel pb={4} display={productInfo.saletime.set == "설정함" ? '' : 'none'} bgColor={panelColor}>
                                <ButtonGroup>
                                    <Button onClick={() => addDays(3)}>3일</Button>
                                    <Button onClick={() => addDays(5)}>5일</Button>
                                    <Button onClick={() => addDays(7)}>7일</Button>
                                    <Button onClick={() => addDays(15)}>15일</Button>
                                    <Button onClick={() => addDays(30)}>30일</Button>
                                </ButtonGroup>

                                <HStack mt={2}>
                                    <Input bgColor={'white'} type="date" value={productInfo.saletime.start} onChange={(e) => setProduct({ ...productInfo, saletime: { ...productInfo.saletime, start: e.target.value } })} />
                                    <Text>~</Text>
                                    <Input bgColor={'white'} type="date" value={productInfo.saletime.end} onChange={(e) => setProduct({ ...productInfo, saletime: { ...productInfo.saletime, end: e.target.value } })} />
                                </HStack>

                            </AccordionPanel >
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text {...Title_lg}>부가세</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <ButtonGroup>
                                    <Button onClick={() => setProduct({ ...productInfo, tax: "과세상품" })} colorScheme={productInfo.tax == "과세상품" ? 'red' : 'gray'}>과세상품</Button>
                                    <Button onClick={() => setProduct({ ...productInfo, tax: "면세상품" })} colorScheme={productInfo.tax == "면세상품" ? 'red' : 'gray'}>면세상품</Button>
                                    <Button onClick={() => setProduct({ ...productInfo, tax: "영세상품" })} colorScheme={productInfo.tax == "영세상품" ? 'red' : 'gray'}>영세상품</Button>
                                </ButtonGroup>

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

                                            <Text w={'100px'} {...Title_lg}>옵션</Text>
                                            <RadioGroup size={'lg'} mb={2} defaultValue={productInfo.option.set} onChange={(value) => setProduct({ ...productInfo, option: { ...productInfo.option, set: value } })}>
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
                            <AccordionPanel pb={4} display={productInfo.option.set == "설정함" ? '' : 'none'} bgColor={panelColor}>
                                <Stack direction={'column'} spacing={2}>
                                    <HStack>
                                        <Text w="150px">정렬순서</Text>
                                        <Box w='full'>
                                            <Select defaultValue={productInfo.option.order} onChange={(value) => setProduct({ ...productInfo, option: { ...productInfo.option, order: value } })} bgColor={'white'}>
                                                <option value={'등록순'}>{'등록순'}</option>
                                                <option value={'가격순'}>{'가격순'}</option>
                                            </Select>
                                        </Box>
                                    </HStack>
                                    <HStack>
                                        <Text w="150px">옵션입력</Text>
                                        <HStack w='full'>
                                            <Input onChange={(e) => setOption({ ...option, name: e.target.value })} bgColor={'white'} placeholder="옵션명" />
                                            <InputGroup>
                                                <Input type="number" onChange={(e) => setOption({ ...option, price: e.target.value })} bgColor={'white'} placeholder="옵션가격" />
                                                <InputRightAddon>원</InputRightAddon>
                                            </InputGroup>
                                            <IconButton colorScheme="red" icon={<AddIcon />} onClick={() => { console.log({ option: { ...productInfo.option, item: [...productInfo.option.item, { name: option.name, price: option.price, use: true }] } }); setProduct({ ...productInfo, option: { ...productInfo.option, item: [...productInfo.option.item, { name: option.name, price: option.price, use: true }] } }) }} />
                                        </HStack>

                                    </HStack>


                                    <TableContainer {...BorderTable}>
                                        <Table variant={'simple'}>
                                            <Thead>
                                                <Tr>
                                                    <   Th  {...THeader}><Checkbox onChange={(e) => changeSelectOption(-1)} colorScheme="red" /></Th>
                                                    <Th w={'10px'} {...THeader}>idx</Th>
                                                    <Th {...THeader}>옵션명</Th>
                                                    <Th {...THeader}>옵션가격</Th>
                                                    <Th {...THeader}>사용여부</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {productInfo.option.item.map((value, index) => (
                                                    <Tr _hover={{ bgColor: 'gray.100' }}>
                                                        <Td w={'10px'} {...TBody}><Checkbox isChecked={value.select} onChange={(e) => changeSelectOption(index)} colorScheme="red" /></Td>
                                                        <Td {...TBody}>{index + 1}</Td>
                                                        <Td {...TBody}>{value.name}</Td>
                                                        <Td {...TBody}>{formattedAmount(value.price)}원</Td>
                                                        <Td {...TBody}><Badge size={'lg'} onClick={() => changeUseOption(index)} cursor={'pointer'} >{value.use ? 'Y' : 'N'}</Badge></Td>
                                                    </Tr>
                                                ))}

                                            </Tbody>
                                        </Table>
                                        <Flex w="full" justifyContent={'flex-end'} mt='2'>

                                            <Button onClick={() => deleteSelectOption()}>선택삭제</Button>
                                        </Flex>
                                    </TableContainer>
                                </Stack>

                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Card>

                <Card w={'full'}>
                    <Accordion allowMultiple defaultIndex={[0, 1]}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <HStack alignItems={'flex-start'} mt={2}>
                                            <Text {...Title_lg}>픽업 / 배송</Text>
                                            <Circle bgColor={'red'} w={2} h={2}></Circle>
                                        </HStack>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={panelColor}>
                                <Stack direction={'column'} spacing={4}>
                                    <HStack>
                                        <Text w='150px'>수령 방법</Text>
                                        <CheckboxGroup defaultValue={productInfo.delivery} onChange={(value) => setProduct({ ...productInfo, delivery: value })}>
                                            <Checkbox w='80px' colorScheme="red" value={'배송'}>배송</Checkbox>
                                            <Checkbox w='80px' colorScheme="red" value={'픽업'}>픽업</Checkbox>
                                        </CheckboxGroup>
                                    </HStack>
                                    {/* <HStack>
                                        <Text w='150px'>배송 방법</Text>
                                        <CheckboxGroup defaultValue={productInfo.barogo} onChange={(value) => setProduct({ ...productInfo, barogo: value })}>
                                            <Checkbox w='80px' colorScheme="red" value={'바로고'}>바로고</Checkbox>
                                            <Checkbox w='80px' colorScheme="red" value={'기타'}>기타</Checkbox>
                                        </CheckboxGroup>
                                    </HStack> */}
                                    <HStack>
                                        <Text w='150px'>기본배송비</Text>
                                        <InputGroup maxW={'250px'}>
                                            <Input defaultValue={productInfo.delivery_fee} onChange={(e) => setProduct({ ...productInfo, delivery_fee: e.target.value })} type="number" bgColor={'white'} placeholder="숫자만 입력" />
                                            <InputRightAddon>원</InputRightAddon>
                                        </InputGroup>
                                    </HStack>
                                    <HStack>
                                        <Text w='150px'>묶음배송</Text>
                                        <RadioGroup defaultValue={productInfo.bundle_delivery} onChange={(value) => setProduct({ ...productInfo, bundle_delivery: value })}>
                                            <Radio w='80px' colorScheme="red" value="설정함">설정함</Radio>
                                            <Radio w='80px' colorScheme="red" value="설정안함">설정안함</Radio>
                                        </RadioGroup>
                                    </HStack>
                                    <HStack alignItems={'flex-start'}>
                                        <Text mt={1} w='150px'>픽업지 / 출고지</Text>
                                        <VStack w="70%" alignItems={'flex-start'}>
                                            <HStack w="100%" >
                                                <TextInput defaultValue={productInfo.address} disabled={true} />
                                                <Button onClick={() => setIsPopupOpen(true)}>주소검색</Button>
                                            </HStack>

                                            <Input bgColor='white' defaultValue={productInfo.detail_address} placeholder="상세주소를 입력하세요" onChange={(e) => setProduct({ ...productInfo, detail_address: e.target.value })} />
                                        </VStack>
                                    </HStack>
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>

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
                    <ConfirmButton collection={'Product'} data={productInfo} type={location.state ? '수정' : '등록'} disabled={process < 100} />
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