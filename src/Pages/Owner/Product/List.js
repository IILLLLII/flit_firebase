import { Badge, Box, Checkbox, CheckboxGroup, HStack, Image, Input, InputGroup, Radio, RadioGroup, Select, SimpleGrid, Stack, StackDivider, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Wrap, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Title_2xl, Title_lg } from "../../../Style/Typograhy";
import { BorderTable, TBody, THeader } from "../../../Style/Table";
import { compareDate, formattedAmount, getAllList, getDate, getProductList } from "../../../DB/function";
import { useNavigate } from "react-router-dom";
import { ChatIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import ProductCard from "../../../Components/ProductCard";
import { FilterSelect } from "../../../Components/FilterSelect";
import { SearchInput } from "../../../Components/Form";

const ProductList = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [productList, setProductList] = useState([])
    const [filter, setFilter] = useState({
        keyword: '',
        type: '상품명',
        state: ['판매중', '판매종료', '품절'],
        order: '등록순',
        date: '등록일',
        start: new Date().getFullYear() + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + "-" + ('0' + new Date().getDate()).slice(-2),
        end: new Date().getFullYear() + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + "-" + ('0' + new Date().getDate()).slice(-2),
    });

    useEffect(() => {
        getList();
    }, []);

    const getList = async () => {
        let _list = await getAllList('Product');
        setProductList(_list)
        console.log(_list)
    }

    const reset = () => {
        setFilter({
            keyword: '',
            type: '상품명',
            state: ['판매중', '판매종료', '품절'],
            order: '등록순',
            date: '등록일',
            start: new Date().getFullYear() + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + "-" + ('0' + new Date().getDate()).slice(-2),
            end: new Date().getFullYear() + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + "-" + ('0' + new Date().getDate()).slice(-2),
        })
    }

    const search = async() => {
        if(filter.state.length === 0)
        {
            toast({
                status: 'warning',
                title: '필드를 다시 선택해주세요.'
            })
            return;
        }

        let result = await getProductList(filter)
        setProductList(result)
    }

    return (
        <Box>
            <Text {...Title_2xl}>상품 조회</Text>

            <FilterSelect onReset={() => reset()} onSearch={() => search()}>

                <Stack direction={'column'} divider={<StackDivider />} spacing={3}>

                    <SearchInput option={['상품코드', '상품명']} defaultType={filter.type} defaultValue={filter.keyword} onSetField={(e) => setFilter({ ...filter, type: e.target.value })} onChange={(value) => setFilter({ ...filter, keyword: value })} />

                    <HStack >
                        <Select defaultValue={filter.date} onChange={(e) => setFilter({ ...filter, date: e.target.value })}>
                            <option value={'등록일'}>{'등록일'}</option>
                            <option value={'판매일'}>{'판매일'}</option>
                        </Select>
                        <Input type='date' defaultValue={filter.start} onChange={(e) => setFilter({ ...filter, start: e.target.value })}></Input>
                        <Text>~</Text>
                        <Input type='date' defaultValue={filter.end} onChange={(e) => setFilter({ ...filter, end: e.target.value })}></Input>

                    </HStack>
                    <Box>
                        <Text {...Title_lg}>상태</Text>
                        <CheckboxGroup onChange={(value) => setFilter({ ...filter, state: value })} colorScheme='red' defaultValue={filter.state}>
                            <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                <Checkbox value='판매중'>판매중</Checkbox>
                                <Checkbox value='판매종료'>판매종료</Checkbox>
                                <Checkbox value='품절'>품절</Checkbox>
                            </Stack>
                        </CheckboxGroup>
                    </Box>
                    <Box>
                        <Text {...Title_lg}>정렬순서</Text>
                        <RadioGroup onChange={(value) => setFilter({ ...filter, order: value })} colorScheme='red' defaultValue={filter.order}>
                            <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                <Radio value='등록순'>등록순</Radio>
                                <Radio value='관심순'>관심순</Radio>
                                <Radio value='판매순'>판매순</Radio>
                                <Radio value='리뷰순'>리뷰순</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </Stack>
            </FilterSelect>

            <TableContainer {...BorderTable} display={{ base: 'none', md: 'flex' }}>
                <Table variant={'simple'}>
                    <Thead>
                        <Tr>
                            <Th><Checkbox /></Th>
                            <Th {...THeader}>상품코드</Th>
                            <Th {...THeader}>상품명</Th>
                            <Th {...THeader}>판매기간</Th>
                            <Th {...THeader}>리뷰 / 관심</Th>
                            <Th {...THeader}>정가</Th>
                            <Th {...THeader}>할인가</Th>
                            <Th {...THeader}>판매 / 재고</Th>
                            <Th {...THeader}>등록일</Th>
                            <Th {...THeader}>상태</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {productList.map((value, index) => (
                            <Tr opacity={value.count - value.sales_count > 0 && compareDate(value.saletime.end) || value.saletime.set == "설정안함" ? 1 : 0.5} _hover={{ bgColor: 'gray.100' }} onClick={() => navigate(`/product/view/${value.id}`, { state: {...value, id: value.id} })}>
                                <Th><Checkbox /></Th>
                                <Td {...TBody}>{value.id.slice(0, 10)}</Td>
                                <Td {...TBody}>
                                    <HStack >
                                        <Image src={value.thumbnail_image} w={'40px'} h={'40px'} borderRadius={'full'} />
                                        <Text>{value.product_name}</Text>
                                    </HStack></Td>
                                <Td {...TBody}>
                                    {value.saletime.set == "설정함" ? value.saletime.start + "~" + value.saletime.end : "상시판매"}</Td>
                                <Td {...TBody} >
                                    <HStack justifyContent={'center'}>
                                        <ChatIcon /> <Text>{value.review.length} </Text> <FaHeart /> <Text>{value.goods.length}</Text>
                                    </HStack></Td>
                                <Td {...TBody}>{formattedAmount(value.sales_price)}원</Td>
                                <Td {...TBody}>
                                    <HStack justifyContent={'center'}>
                                        <Text color="#da4359" fontWeight={'bold'}>{value.discount.set == "설정함" ? `${value.discount.value}${value.discount.unit} ` : ""}</Text>
                                        <Text>{value.discount.set == "설정함" ? value.discount.unit == "%" ? `${formattedAmount(value.sales_price - value.sales_price * 0.01 * value.discount.value)}원` : `${formattedAmount(value.sales_price - value.discount.value)}원` : ""}</Text>
                                    </HStack>
                                </Td>
                                <Td {...TBody}><HStack justifyContent={'center'}>
                                    <FiShoppingCart /><Text>{value.sales_count} / {value.count}</Text>
                                </HStack></Td>
                                <Td {...TBody}>{getDate(value.regist_date)}</Td>
                                <Td {...TBody}>
                                    <Badge colorScheme={compareDate(value.saletime.end) && value.count - value.sales_count > 0 || value.saletime.set == "설정안함" ? 'green' : 'gray'}>{value.count - value.sales_count > 0 ? compareDate(value.saletime.end) || value.saletime.set == "설정안함" ? '판매중' : '판매종료' : "품절"}</Badge>
                                </Td>
                            </Tr>
                        ))}

                    </Tbody>
                </Table>
            </TableContainer>

            <Wrap spacing={2} display={{ base: 'box', md: 'none' }}>
                {productList.map((value, index) => (
                    <ProductCard data={value} state={value.count - value.sales_count > 0 ? compareDate(value.saletime.end) || value.saletime.set == "설정안함" ? '판매중' : '판매종료' : "품절"} />
                ))}
            </Wrap>

        </Box>
    )

}
export default ProductList;