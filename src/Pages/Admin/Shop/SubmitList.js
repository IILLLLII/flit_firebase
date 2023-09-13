import { Badge, Box, Button, Checkbox, CheckboxGroup, HStack, Input, InputGroup, InputRightAddon, Stack, StackDivider, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { BorderTable, THeader, TBody } from "../../../Style/Table";
import { getAllList, getSubmitList } from "../../../DB/function";
import { useNavigate } from "react-router-dom";
import { FilterSelect } from "../../../Components/FilterSelect";
import { Title_2xl, Title_lg } from "../../../Style/Typograhy";
import { SearchIcon } from "@chakra-ui/icons";
import { SearchInput } from "../../../Components/Form";

const SubmitList = () => {
    const toast = useToast();
    const [filter, setFilter] = useState({
        keyword: '',
        division: ['Shop', 'Florist'],
        approve: ['승인', '비승인'],
        type: '이름'
    });
    const [submitList, setSubmitList] = useState([]);
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate();
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);


    useEffect(() => {
        getList();
    }, []);

    const getList = async () => {
        // let _list = await getAllList('Owner');
        // setSubmitList(_list)
        // console.log(_list)
        search();
    }

    const reset = () => {
        setFilter({
            keyword: '',
            division: ['Shop', 'Florist'],
            approve: ['승인', '비승인'],
            type: '이름'
        })
    }

    const search = async() => {
        if(filter.division.length === 0 || filter.approve.length === 0)
        {
            toast({
                status: 'warning',
                title: '필드를 다시 선택해주세요.'
            })
            return;
        }

        let result = await getSubmitList(filter)
        setSubmitList(result)
    }


    return (
        <Box minW={'container.md'}>
            <Text {...Title_2xl} color={'gray.800'}>
                입점신청
            </Text>

            <HStack>
                <FilterSelect isOpen={isOpen} onReset={() => reset()} onSearch={() => search()}>

                    <Stack direction={'column'} divider={<StackDivider />} spacing={3}>

                        <SearchInput option={['이름', '이메일', '전화번호', '주소']} defaultType={filter.type} defaultValue={filter.keyword} onSetField={(e) => setFilter({ ...filter, type : e.target.value})} onChange={(value) => setFilter({ ...filter, keyword: value })} />

                        <Box>
                            <Text {...Title_lg}>구분</Text>
                            <CheckboxGroup onChange={(value) => setFilter({ ...filter, division: value })} colorScheme='red' defaultValue={filter.division}>
                                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                    <Checkbox value='Shop'>Shop</Checkbox>
                                    <Checkbox value='Florist'>Florist</Checkbox>
                                </Stack>
                            </CheckboxGroup>
                        </Box>

                        <Box>
                            <Text {...Title_lg}>승인여부</Text>
                            <CheckboxGroup onChange={(value) => setFilter({ ...filter, approve: value })} colorScheme='red' defaultValue={filter.approve}>
                                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                    <Checkbox value='승인'>승인</Checkbox>
                                    <Checkbox value='비승인'>비승인</Checkbox>
                                </Stack>
                            </CheckboxGroup>
                        </Box>
                    </Stack>

                </FilterSelect>
            </HStack>

            <TableContainer {...BorderTable}>
                <Table variant={'simple'}>
                    <Thead>
                        <Tr>
                            <Th {...THeader}>구분</Th>
                            <Th {...THeader}>이름</Th>
                            <Th {...THeader}>전화번호</Th>
                            <Th {...THeader}>이메일</Th>
                            <Th {...THeader}>생년월일</Th>
                            <Th {...THeader}>주소</Th>
                            <Th {...THeader}>승인여부</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {submitList.map((value, index) => (
                            <Tr bgColor={value.state == 'new' ? "orange.200" : "white"} _hover={{ bgColor: 'gray.100' }} onClick={() => navigate(`/admin/submit/view/${value.id}`, { state: value })}>
                                <Td {...TBody}>{value.division}</Td>
                                <Td {...TBody}>{value.name}</Td>
                                <Td {...TBody}>{value.number}</Td>
                                <Td {...TBody}>{value.email}</Td>
                                <Td {...TBody}>{value.birth}</Td>
                                <Td {...TBody}>{value.address}</Td>
                                <Td {...TBody}>
                                    <Badge colorScheme={value.approve === "승인" ? 'green' : 'gray'}>
                                        {value.approve}
                                    </Badge>
                                </Td>
                            </Tr>
                        ))}

                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )

}
export default SubmitList;