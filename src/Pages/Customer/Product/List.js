import React, { useCallback, useEffect, useState } from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Circle, CloseButton, Drawer, DrawerContent, Flex, HStack, Icon, IconButton, Input, NumberInput, NumberInputField, Radio, RadioGroup, Select, Stack, Tag, TagCloseButton, Text, VStack, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import MobileStatus from "../../../Components/MobileStatus";
import { FiSliders } from "react-icons/fi";
import { Title_2xl, Title_lg, fontColor } from "../../../Style/Typograhy";
import { CATEGORY } from "../Category";
import SliderThumbWithTooltip from "../../../Components/NumberSlider";
import { compareDate, formattedAmount, getAllList } from "../../../DB/function";
import ColorPicker, { colorChip } from "../../../Components/ColorPicker";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaUndo, FaWindowRestore } from "react-icons/fa";
import ProductItem from "../../../Components/ProductItem";

const LOCATION = [
    {
        id: 0,
        city: '서울',
        town: ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구']
    },
    {
        id: 1,
        city: '경기',
        town: ['선택']
    },
    {
        id: 2,
        city: '인천',
        town: ['선택']
    }
]

const ProductList = () => {
    const location = useLocation();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [filter, setFilter] = useState({
        order: "인기순",
        city: [0],
        town: [''],
        location: [],
        category: [`${CATEGORY[location.state.category1].title + ">" + location.state.category2}`],
        range: [0, 0],
        selColor: [],
        tag: []
    })
    const [filterIndex, setFilterIndex] = useState(-1);
    const [category1, setCategory1] = useState(0)
    const [city, setCity] = useState(0)
    const [, updateState] = useState();
    const [tag, setTag] = useState("")
    const [selTags, setTags] = useState(filter.tag)
    const [productList, setProductList] = useState([])
    const forceUpdate = useCallback(() => updateState({}), []);

    useEffect(() => {
        search();
    }, []);

    const search = async () => {
        let _list = await getAllList('Product');
        setProductList(_list)
        console.log(_list)
    }

    const resetFilter = () => {
        setFilter({
            order: "인기순",
            city: [0],
            town: [''],
            location: [],
            category: [],
            range: [0, 0],
            selColor: [],
            tag: []
        })
        forceUpdate();
    }

    const addTag = () => {
        if (!selTags.includes(tag))
            setTags([...selTags, tag])

        setFilter({ ...filter, tag: [...selTags, tag] })

    }

    const delTag = (value) => {
        let filtered = selTags.filter((element) => element !== value);
        setTags(filtered);

        setFilter({ ...filter, tag: filtered })
    }
    return (
        <Flex bgColor={'white'} h={'100vh'} flexDirection={'column'}>
            <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
                <MobileStatus title={"상품"} isCart={true} isSearch={true} isHome={true} />
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="xs">
                <DrawerContent pt={4}>
                    <HStack paddingInline={4} justifyContent={'space-between'} alignItems={'flex-start'}>

                        <Text {...Title_2xl}>필터</Text>
                        <CloseButton onClick={onClose} />
                    </HStack>
                    <Accordion allowMultiple defaultIndex={[filterIndex]}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text {...Title_lg}>정렬</Text>
                                    </Box>

                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={'gray.50'}>
                                <RadioGroup defaultValue={filter.order} onChange={(value) => setFilter({ ...filter, order: value })}>
                                    <Stack direction={'column'} overflowX={'scroll'}>
                                        <Radio bgColor="white" p={1} colorScheme="red" value="판매순">{'판매순'}</Radio>
                                        <Radio bgColor="white" p={1} colorScheme="red" value="인기순">{'인기순'}</Radio>
                                        <Radio bgColor="white" p={1} colorScheme="red" value="낮은가격순">{'낮은가격순'}</Radio>
                                        <Radio bgColor="white" p={1} colorScheme="red" value="높은가격순">{'높은가격순'}</Radio>
                                        <Radio bgColor="white" p={1} colorScheme="red" value="리뷰많은순">{'리뷰많은순'}</Radio>
                                        <Radio bgColor="white" p={1} colorScheme="red" value="최근순">{'최근순'}</Radio>
                                    </Stack>
                                </RadioGroup>

                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text {...Title_lg}>지역</Text>
                                    </Box>

                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={'gray.50'}>
                                <HStack>
                                    <Select bgColor="white" onChange={(e) => setCity(e.target.value)}>
                                        {LOCATION.map((value, index) => (
                                            <option value={index}>{value.city}</option>
                                        ))}
                                    </Select>
                                    <Select bgColor="white" onChange={(e) => {
                                        if (!filter.location.includes(`${LOCATION[city].city + ">" + e.target.value}`))
                                            setFilter({ ...filter, location: [...filter.location, `${LOCATION[city].city + ">" + e.target.value}`] })
                                    }
                                    }>
                                        {LOCATION[city].town.map((value, index) => (
                                            <option value={value}>{value}</option>
                                        ))}
                                    </Select>
                                </HStack>

                                <Wrap w={'100%'} spacing={2} mt={2}>
                                    {filter.location.map((value, index) => (
                                        <WrapItem>
                                            <Tag whiteSpace={'nowrap'}>
                                                {value}
                                                <TagCloseButton onClick={() => {
                                                    filter.location.splice(index, 1);
                                                    setFilter(filter);
                                                    forceUpdate();
                                                }
                                                }
                                                />
                                            </Tag>
                                        </WrapItem>
                                    ))}

                                </Wrap>

                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text {...Title_lg}>카테고리</Text>
                                    </Box>

                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={'gray.50'}>
                                <VStack>
                                    <Select bgColor="white" onChange={(e) => { setCategory1(e.target.value) }}>
                                        {CATEGORY.map((value, index) => (
                                            <option value={index}>{value.title}</option>
                                        ))}
                                    </Select>
                                    <Select bgColor="white" onChange={(e) => {
                                        if (!filter.category.includes(`${CATEGORY[category1].title + ">" + e.target.value}`))
                                            setFilter({ ...filter, category: [...filter.category, `${CATEGORY[category1].title + ">" + e.target.value}`] })
                                    }
                                    }>
                                        {CATEGORY[category1].subItem.map((value, index) => (
                                            <option value={value}>{value}</option>
                                        ))}
                                    </Select>

                                    <Wrap w={'100%'} spacing={2}>
                                        {filter.category.map((value, index) => (
                                            <WrapItem>
                                                <Tag whiteSpace={'nowrap'}>
                                                    {value}
                                                    <TagCloseButton onClick={() => {
                                                        filter.category.splice(index, 1);
                                                        setFilter(filter);
                                                        forceUpdate();
                                                    }
                                                    }
                                                    />
                                                </Tag>
                                            </WrapItem>
                                        ))}

                                    </Wrap>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text {...Title_lg}>가격</Text>
                                    </Box>

                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={'gray.50'}>
                                <HStack>
                                    <Input type="number" bgColor={'white'} value={filter.range[0]} />
                                    <Text>~</Text>
                                    <Input type="number" bgColor={'white'} value={filter.range[1]} />
                                </HStack>
                                <SliderThumbWithTooltip defaultValue={filter.range} onSetRange={(value) => setFilter({ ...filter, range: value })} />

                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text {...Title_lg}>색상</Text>
                                    </Box>

                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={'gray.50'}>
                                <ColorPicker selColor={filter.selColor} setColor={(value) => setFilter({ ...filter, selColor: value })} />
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text {...Title_lg}>태그</Text>
                                    </Box>

                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} bgColor={'gray.50'}>
                                <HStack alignItems={'flex-start'}>
                                    <Stack direction={'column'} w='100%'>

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
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </DrawerContent>
            </Drawer>
            <Stack direction={'column'} mt={'80px'}>
                <Flex overflowX='auto' className="scroll">
                    <HStack>
                        <IconButton onClick={() => onOpen()} icon={<FiSliders />} />
                        <Button size={'sm'} colorScheme="red" onClick={() => { setFilterIndex(0); onOpen(); }} variant={'outline'} color={fontColor.primary} rightIcon={<ChevronRightIcon boxSize={'20px'} />}>{filter.order}</Button>
                        <Button size={'sm'} colorScheme="red" onClick={() => { setFilterIndex(1); onOpen(); }} variant={'outline'} color={filter.location.length == 0 ? 'gray.400' : fontColor.primary} rightIcon={<ChevronRightIcon boxSize={'20px'} />}>지역</Button>
                        <Button size={'sm'} colorScheme="red" onClick={() => { setFilterIndex(2); onOpen(); }} variant={'outline'} color={filter.category.length == 0 ? 'gray.400' : fontColor.primary} rightIcon={<ChevronRightIcon boxSize={'20px'} />}>카테고리</Button>
                        <Button size={'sm'} colorScheme="red" onClick={() => { setFilterIndex(3); onOpen(); }} variant={'outline'} color={filter.range[0] == 0 && filter.range[1] == 0 ? 'gray.400' : fontColor.primary} rightIcon={<ChevronRightIcon boxSize={'20px'} />}>가격</Button>
                        <Button size={'sm'} colorScheme="red" onClick={() => { setFilterIndex(4); onOpen(); }} variant={'outline'} color={filter.selColor.length == 0 ? 'gray.400' : fontColor.primary} rightIcon={<ChevronRightIcon boxSize={'20px'} />}>색상</Button>
                        <Button size={'sm'} colorScheme="red" onClick={() => { setFilterIndex(5); onOpen(); }} variant={'outline'} color={filter.tag.length == 0 ? 'gray.400' : fontColor.primary} rightIcon={<ChevronRightIcon boxSize={'20px'} />}>태그</Button>
                    </HStack>
                </Flex>

                <HStack display={(filter.category.length > 0 || filter.location.length > 0 || filter.selColor.length > 0 || filter.tag.length > 0 || filter.range[1] > 0) ? 'flex' : 'none'} borderBottom={'1px solid #f1f1f1'} padding={2}>
                    <Wrap w={'100%'} spacing={2}>
                        <HStack overflowX={'scroll'} className="scroll">
                            {filter.location.map((value, index) => (
                                <WrapItem>
                                    <Tag whiteSpace={'nowrap'} colorScheme="red" borderRadius={'full'}>
                                        {value}
                                        <TagCloseButton onClick={() => {
                                            filter.location.splice(index, 1);
                                            setFilter(filter);
                                            forceUpdate();
                                        }
                                        }
                                        />
                                    </Tag>
                                </WrapItem>
                            ))}
                            {filter.category.map((value, index) => (
                                <WrapItem>
                                    <Tag whiteSpace={'nowrap'} colorScheme="red" borderRadius={'full'}>
                                        {value}
                                        <TagCloseButton onClick={() => {
                                            filter.category.splice(index, 1);
                                            setFilter(filter);
                                            forceUpdate();
                                        }
                                        }
                                        />
                                    </Tag>
                                </WrapItem>
                            ))}
                            {filter.range[1] != 0 && <WrapItem m={1}>
                                <Tag whiteSpace={'nowrap'} colorScheme="red" borderRadius={'full'}>
                                    {filter.range[0] + '원 ~ ' + filter.range[1] + '원'}
                                    <TagCloseButton onClick={() => {
                                        setFilter({ ...filter, range: [0, 0] })
                                    }
                                    }
                                    />
                                </Tag>
                            </WrapItem>
                            }
                            {colorChip.map(({ color, name }, index) => (
                                <>
                                    {filter.selColor.map((value, index) => color == value && (
                                        <WrapItem>
                                            <Tag whiteSpace={'nowrap'} colorScheme="red" borderRadius={'full'}>
                                                <HStack>
                                                    <Circle bgColor={value} size={'20px'} />
                                                    <Text>{name}</Text>
                                                    <TagCloseButton onClick={() => {
                                                        filter.selColor.splice(index, 1);
                                                        setFilter(filter);
                                                        forceUpdate();
                                                    }
                                                    }
                                                    />
                                                </HStack>
                                            </Tag>
                                        </WrapItem>
                                    ))}
                                </>
                            ))}

                            {selTags.map((value) => (
                                <WrapItem>
                                    <Tag whiteSpace={'nowrap'} colorScheme="red" borderRadius={'full'}>
                                        {value}
                                        <TagCloseButton onClick={() => delTag(value)} />
                                    </Tag>
                                </WrapItem>
                            ))}
                        </HStack>
                    </Wrap>

                    <IconButton size={'sm'} icon={<FaUndo />} onClick={() => resetFilter()} />
                </HStack>


            </Stack>

            <Center >
                <Wrap mt={4} spacing={0}>
                    {productList.map((value, index) => (
                        <WrapItem width={'50%'} p={2} display={value.count - value.sales_count > 0 ? compareDate(value.saletime.end) || value.saletime.set == "설정안함" ? '' : 'none' : "none"}>
                            <ProductItem data={value} state={value.count - value.sales_count > 0 ? compareDate(value.saletime.end) || value.saletime.set == "설정안함" ? '판매중' : '판매종료' : "품절"} />
                        </WrapItem>
                    ))}
                </Wrap>
            </Center>


        </Flex>
    )
}
export default ProductList;