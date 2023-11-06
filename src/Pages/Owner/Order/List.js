import { Badge, Box, Checkbox, CheckboxGroup, HStack, Image, Input, InputGroup, Radio, RadioGroup, Select, SimpleGrid, Stack, StackDivider, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack, Wrap, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Title_2xl, Title_lg } from "../../../Style/Typograhy";
import { BorderTable, TBody, THeader } from "../../../Style/Table";
import { compareDate, formattedAmount, getAllList, getDate, getOrderList, getPortfolioList, getProductList } from "../../../DB/function";
import { useNavigate } from "react-router-dom";
import { ChatIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import ProductCard from "../../../Components/ProductCard";
import { FilterSelect } from "../../../Components/FilterSelect";
import { SearchInput } from "../../../Components/Form";
import { isAdmin } from "../../../App";

const OrderList = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [orderList, setOrderList] = useState([])
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
        let result = await getOrderList(filter)
        console.log(result)
        setOrderList(result)
    }

    return (
        <Box>
            <Text {...Title_2xl}>주문 조회</Text>

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
                            <Th {...THeader}>주문번호</Th>
                            <Th {...THeader}>주문일자</Th>
                            <Th {...THeader}>주문상태</Th>
                            <Th {...THeader}>주문방법</Th>
                            <Th {...THeader}>예약시간</Th>
                            <Th {...THeader}>주문명</Th>
                            <Th {...THeader}>주문자</Th>
                            <Th {...THeader}>결제정보</Th>
                            {/* <Th {...THeader}>주문일</Th> */}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {orderList.map((value, index) => (
                            <Tr _hover={{ bgColor: 'gray.100' }} onClick={() => navigate(`/order/view/${value.id}`, { state: { order: value } })}>
                                <Th w={'20px'}><Checkbox /></Th>
                                <Td {...TBody}>{value.id.slice(0, 10)}</Td>
                                <Td {...TBody}>{getDate(value.timestamp)}</Td>
                                <Td {...TBody}>{value.order.state}</Td>
                                <Td {...TBody}><Badge colorScheme={value.order.type === '픽업' ? 'red' : 'blue'}>{value.order.type}</Badge></Td>
                                <Td {...TBody}>{value.order.date} | {value.order.time}</Td>
                                <Td {...TBody}>{value.order.orderName}</Td>
                            
                                <Td {...TBody} >
                                        <Text>{value.sender.name} | {value.sender.number}</Text>
                               </Td>
                               <Td {...TBody}>{value.payment.method} | {formattedAmount(value.payment.totalCost)}원</Td>
                                {/* <Td {...TBody}>{getDate(value.order.timestamp)}</Td> */}
                            </Tr>
                        ))}

                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )

}
export default OrderList;