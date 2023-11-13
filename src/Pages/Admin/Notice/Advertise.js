import { Avatar, Box, Button, ButtonGroup, Center, Checkbox, HStack, Icon, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, StackDivider, Table, TableContainer, Tag, TagCloseButton, Tbody, Td, Text, Textarea, Th, Thead, Tr, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FlitCalendar from "../../../Components/FlitCalendar";
import { addDocument, deleteDocument, formattedAmount, getAllList, getDate, getDocument, getList, getPlan, getStrDate, parseDate, updateData } from "../../../DB/function";
import { Title_lg } from "../../../Style/Typograhy";
import { AddIcon } from "@chakra-ui/icons";
import { isAdmin } from "../../../App";
import Calendar from "react-calendar";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import moment from "moment";
import { BorderTable, TBody, THeader } from "../../../Style/Table";

const Advertise = () => {
    /* plan */
    const [planEditMode, setPlanEditMode] = useState({ mode: false, index: 0 });
    const [date, setDate] = useState(localStorage.getItem('adDate') ? parseDate(localStorage.getItem('adDate')) : new Date());
    const [time, setTime] = useState('');
    const [content, setContent] = useState('');
    const [plan, setPlan] = useState([]);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [adList, setAdList] = useState([])
    const [ownerList, setOwnerList] = useState([])

    const [holiday, setHoliday] = useState(['2023-11-13', '2023-11-14', '2023-11-15', '2023-11-16', '2023-11-17']);

    useEffect(() => {
        getAdProduct(date);
    }, [date]);

    const savePlan = async () => {
        if (!isAdmin) {
            alert('로그인이 필요합니다.')
            return
        }
        await addDocument('Plan', {
            ownerId: 'admin',
            month: date,
            time: time,
            content: content,
            done: false
        })
        setIsProductOpen(false)
        alert('일정이 등록되었습니다.')
        window.location.reload();
    }

    const updatePlan = async (index, complete) => {
        if (!isAdmin) {
            alert('로그인이 필요합니다.')
            return
        }

        await updateData('Plan', plan[index].id, {
            ownerId: 'admin',
            month: plan[index].month,
            time: time === '' ? plan[index].time : time,
            content: content === '' ? plan[index].content : content,
            done: complete
        })

        setIsProductOpen(false)
        alert('일정이 수정되었습니다.')
        window.location.reload();
    }

    const deletePlan = async (index) => {
        await deleteDocument('Plan', plan[index].id)
        alert('일정이 삭제되었습니다.');
        window.location.reload();

    }

    const getAdProduct = async(date) => {
        let allAdList = await getAllList('Advertise');
        let adInfoList = allAdList.filter((element) => element.date === getStrDate(date));
        setOwnerList([]);
        const temp = [];
        adInfoList.map(async(value, index) => {
            let owner = await getDocument('Owner', value.ownerId)
            temp.push(owner)
            setOwnerList(temp);
        })
        setAdList(adInfoList);
    }

    return (
        <Stack>

                <Stack direction={{base: 'column', md: 'row'}}>
                    <Box p={4} margin={1} w='100%' minH="200px" bgColor={'white'} border={'1px solid #d9d9d9'} borderRadius={'xl'}>
                    <Calendar
            // calendarType="Hebrew"
            defaultValue={date}
            onChange={(e => { setDate(e); getAdProduct(date); localStorage.setItem('adDate', getStrDate(e)) })} 
            formatDay={(locale, date) => moment(date).format("DD")}
            formatShortWeekday={(locale, date) => moment(date).format("ddd").toUpperCase()}
            formatMonthYear={(locale, date) => moment(date).format("M월")}
            nextLabel={<MdChevronRight style={{ width: "30px", height: "25px" }} />}//">"
            next2Label=""//">>"
            prevLabel={<MdChevronLeft style={{ width: "30px", height: "25px" }} />}//"<"
            prev2Label=""//"<<"
            // showNavigation={false}
            tileDisabled={({ activeStartDate, date, view }) => holiday.includes(getStrDate(date))}
        />
                    </Box>

                    <Box p={4} margin={1} w='100%' minH="300px" bgColor={'white'} border={'1px solid #d9d9d9'} borderRadius={'xl'}>
                        <HStack justifyContent={'space-between'} mb={4}>
                            <Text {...Title_lg}>광고관리</Text>
                        </HStack>
                        <Stack>
                            <HStack>
                            <Text minW='100px'>광고 예약일</Text>
                            <HStack>
                                <Input type="date"/>
                                <Input type="date"/>
                            </HStack>
                            </HStack>

                            <HStack alignItems={'flex-start'}>
                            <Text minW='100px'>광고 휴무일</Text>
                            <Wrap>
                                {holiday?.map((value, index) => (
                                    <Tag
                                        size={'sm'}
                                        borderRadius='full'
                                        variant='solid'
                                        colorScheme='teal'
                                        key={index}
                                    >
                                        {value}
                                        <TagCloseButton/>
                                    </Tag>
                                ))}
                            </Wrap>
                            </HStack>

                        </Stack>

                    </Box>
                </Stack>

                <Box p={4} margin={1} w='100%' minH="200px" bgColor={'white'} border={'1px solid #d9d9d9'} borderRadius={'xl'}>
                <HStack justifyContent={'space-between'}>
                    <Text {...Title_lg}>광고 접수 현황({('0' + (date.getMonth() + 1)).slice(-2) + "/" + ('0' + date.getDate()).slice(-2)})</Text>
                    </HStack>
                    <TableContainer {...BorderTable} display={{ base: 'none', md: 'flex' }}>
                <Table variant={'simple'}>
                    <Thead>
                        <Tr>
                            <Th><Checkbox /></Th>
                            <Th {...THeader}>등급</Th>
                            <Th {...THeader}>이름</Th>
                            <Th {...THeader}>구분</Th>
                            <Th {...THeader}>핸드폰</Th>
                            <Th {...THeader}>지역</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {ownerList.map((value, index) => (
                            <Tr _hover={{ bgColor: 'gray.100' }} onClick={() => setIsProductOpen(true)}>
                                <Td><Checkbox /></Td>
                                <Td {...TBody}>{value.grade}</Td>
                                <Td {...TBody}>{value.name}</Td>
                                <Td {...TBody}>{value.division}</Td>
                                <Td {...TBody}>{value.number}</Td>
                                <Td {...TBody}>{value.address.split(" ")[1]}</Td>
                            </Tr>
                        ))}

                    </Tbody>
                </Table>
            </TableContainer>
                    </Box>


            <Modal isOpen={isProductOpen} onClose={() => setIsProductOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <HStack>
                                <Text w='150px' {...Title_lg}>시간설정</Text>
                                <Input borderColor={'#d9d9d9'}defaultValue={planEditMode.mode ? plan[planEditMode.index].time : ''} onChange={(e) => setTime(e.target.value)} type="time"></Input>
                            </HStack>
                            <Stack>
                                <Text w='150px' {...Title_lg}>내용입력</Text>
                                <Textarea borderColor={"#d9d9d9"} defaultValue={planEditMode.mode ? plan[planEditMode.index].content : ''} onChange={(e) => setContent(e.target.value)} minH={'200px'} />
                            </Stack>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <HStack w='100%' justifyContent={'space-between'}>
                            {planEditMode.mode &&
                                <ButtonGroup>
                                    <Button onClick={() => updatePlan(planEditMode.index, !plan[planEditMode.index].done)} colorScheme={plan[planEditMode.index].done ? "gray" : "green"}>{plan[planEditMode.index].done ? "미완료" : "완료"}</Button>
                                    <Button onClick={() => deletePlan(planEditMode.index)} colorScheme="red">삭제</Button>
                                </ButtonGroup>
                            }
                            <ButtonGroup>
                                <Button onClick={() => setIsProductOpen(false)}>취소</Button>
                                <Button onClick={() => planEditMode.mode ? updatePlan(planEditMode.index, plan[planEditMode.index].done) : savePlan()} colorScheme="red">{planEditMode.mode ? '수정' : '저장'}</Button>
                            </ButtonGroup>
                        </HStack>
                    </ModalFooter>
                </ModalContent>

            </Modal>
            </Stack>
    )

}
export default Advertise;