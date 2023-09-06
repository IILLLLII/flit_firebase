import { Badge, Box, Checkbox, CheckboxGroup, HStack, Image, Input, InputGroup, Radio, RadioGroup, Select, SimpleGrid, Stack, StackDivider, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Wrap, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Title_2xl, Title_lg } from "../../../Style/Typograhy";
import { BorderTable, TBody, THeader } from "../../../Style/Table";
import { compareDate, formattedAmount, getAllList, getDate, getPortfolioList, getProductList } from "../../../DB/function";
import { useNavigate } from "react-router-dom";
import { ChatIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import ProductCard from "../../../Components/ProductCard";
import { FilterSelect } from "../../../Components/FilterSelect";
import { SearchInput } from "../../../Components/Form";
import { isAdmin } from "../../../App";

const PortfolioList = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [productList, setProductList] = useState([])
    const [filter, setFilter] = useState({
        keyword: '',
        type: '상품명',
        order: '등록순',
        date: '등록일',
        start: new Date().getFullYear() - 1 + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + "-" + ('0' + new Date().getDate()).slice(-2),
        end: new Date().getFullYear() + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + "-" + ('0' + new Date().getDate()).slice(-2),
    });

    useEffect(() => {
        search();
    }, []);

    const reset = () => {
        setFilter({
            keyword: '',
            type: '상품명',
            order: '등록순',
            date: '등록일',
            start: new Date().getFullYear() - 1 + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + "-" + ('0' + new Date().getDate()).slice(-2),
            end: new Date().getFullYear() + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + "-" + ('0' + new Date().getDate()).slice(-2),
        })
    }

    const search = async() => {
        let result = await getPortfolioList(filter)
        setProductList(result)
    }

    return (
        <Box>
            <Text {...Title_2xl}>포트폴리오 조회</Text>

            <FilterSelect onReset={() => reset()} onSearch={() => search()}>

                <Stack direction={'column'} divider={<StackDivider />} spacing={3}>

                    <SearchInput option={['상품코드', '상품명']} defaultType={filter.type} defaultValue={filter.keyword} onSetField={(e) => setFilter({ ...filter, type: e.target.value })} onChange={(value) => setFilter({ ...filter, keyword: value })} />

                    <HStack >
                        <Select defaultValue={filter.date} onChange={(e) => setFilter({ ...filter, date: e.target.value })}>
                            <option value={'등록일'}>{'등록일'}</option>
                        </Select>
                        <Input type='date' defaultValue={filter.start} onChange={(e) => setFilter({ ...filter, start: e.target.value })}></Input>
                        <Text>~</Text>
                        <Input type='date' defaultValue={filter.end} onChange={(e) => setFilter({ ...filter, end: e.target.value })}></Input>

                    </HStack>
                    <Box>
                        <Text {...Title_lg}>정렬순서</Text>
                        <RadioGroup onChange={(value) => setFilter({ ...filter, order: value })} colorScheme='red' defaultValue={filter.order}>
                            <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                <Radio value='등록순'>등록순</Radio>
                                <Radio value='관심순'>관심순</Radio>
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
                            <Th w={'20px'}><Checkbox /></Th>
                            <Th {...THeader}>상품코드</Th>
                            <Th {...THeader}>상품명</Th>
                            <Th {...THeader}>리뷰 / 관심</Th>
                            <Th {...THeader}>등록일</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {productList.map((value, index) => (
                            <Tr _hover={{ bgColor: 'gray.100' }} onClick={() => navigate(isAdmin ? `/admin/portfolio/view/${value.id}` : `/portfolio/view/${value.id}`, { state: {...value, id: value.id} })}>
                                <Th w={'20px'}><Checkbox /></Th>
                                <Td {...TBody}>{value.id.slice(0, 10)}</Td>
                                <Td {...TBody}>
                                    <HStack >
                                        <Image src={value.thumbnail_image} w={'40px'} h={'40px'} borderRadius={'full'} />
                                        <Text>{value.product_name}</Text>
                                    </HStack></Td>
                                <Td {...TBody} >
                                    <HStack justifyContent={'center'}>
                                        <ChatIcon /> <Text>{value.review.length} </Text> <FaHeart /> <Text>{value.goods.length}</Text>
                                    </HStack></Td>
                                <Td {...TBody}>{getDate(value.regist_date)}</Td>
                            </Tr>
                        ))}

                    </Tbody>
                </Table>
            </TableContainer>

            <Wrap spacing={4} display={{ base: 'box', md: 'none' }} mt={4}>
                {productList.map((value, index) => (
                    <Image cursor={'pointer'} onClick={() => navigate(isAdmin ? '/admin/portfolio/view/' : '/portfolio/view/' + value.id, { state: value })} w={'31%'} borderRadius={'sm'} src={value.thumbnail_image}/>
                ))}
            </Wrap>

        </Box>
    )

}
export default PortfolioList;