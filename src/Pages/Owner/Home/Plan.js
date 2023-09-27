import { Avatar, Box, Button, ButtonGroup, Center, HStack, Icon, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, StackDivider, Tag, Text, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FlitCalendar from "../../../Components/FlitCalendar";
import { addDocument, deleteDocument, formattedAmount, getDate, getList, getPlan, getStrDate, parseDate, updateData } from "../../../DB/function";
import { Title_lg } from "../../../Style/Typograhy";
import { AddIcon } from "@chakra-ui/icons";

const Plan = () => {
    /* plan */
    const [planEditMode, setPlanEditMode] = useState({ mode: false, index: 0 });
    const [date, setDate] = useState(localStorage.getItem('date') ? parseDate(localStorage.getItem('date')) : new Date());
    const [time, setTime] = useState('');
    const [content, setContent] = useState('');
    const [plan, setPlan] = useState([]);
    const [isPlanOpen, setIsPlanOpen] = useState(false);

    useEffect(() => {
        getPlanList();
    }, [date]);

    const getPlanList = async () => {
        console.log(date)
        let plan = await getPlan(localStorage.getItem('ownerToken'), date)
        console.log(plan)
        setPlan(plan)
    }

    const savePlan = async () => {
        if (!localStorage.getItem('ownerToken')) {
            alert('로그인이 필요합니다.')
            return
        }
        await addDocument('Plan', {
            ownerId: localStorage.getItem('ownerToken'),
            month: date,
            time: time,
            content: content,
            done: false
        })
        setIsPlanOpen(false)
        alert('일정이 등록되었습니다.')
        window.location.reload();
    }

    const updatePlan = async (index, complete) => {
        if (!localStorage.getItem('ownerToken')) {
            alert('로그인이 필요합니다.')
            return
        }

        await updateData('Plan', plan[index].id, {
            ownerId: localStorage.getItem('ownerToken'),
            month: plan[index].month,
            time: time === '' ? plan[index].time : time,
            content: content === '' ? plan[index].content : content,
            done: complete
        })

        setIsPlanOpen(false)
        alert('일정이 수정되었습니다.')
        window.location.reload();
    }

    const deletePlan = async (index) => {
        await deleteDocument('Plan', plan[index].id)
        alert('일정이 삭제되었습니다.');
        window.location.reload();

    }

    return (
        <>

                <Stack>
                    <Box p={4} margin={1} w='100%' minH="200px" bgColor={'white'} border={'1px solid #d9d9d9'} borderRadius={'xl'}>
                        <FlitCalendar date={date} onChange={(e => { setDate(e); localStorage.setItem('date', getStrDate(e)) })} />
                    </Box>

                    <Box p={4} margin={1} w='100%' minH="300px" bgColor={'white'} border={'1px solid #d9d9d9'} borderRadius={'xl'}>
                        <HStack justifyContent={'space-between'} mb={4}>
                            <Text {...Title_lg}>일정관리</Text>
                            <IconButton onClick={() => { setPlanEditMode({ mode: false, index: -1 }); setIsPlanOpen(true); }} size={'xs'} borderRadius={'full'} variant={"outline"} border={'2px solid black'} icon={<AddIcon />} />
                        </HStack>
                        <Stack divider={<StackDivider />} spacing={0}>
                            {
                                plan.map((value, index) => (
                                    <HStack onClick={() => { setPlanEditMode({ mode: true, index: index }); setIsPlanOpen(true); }} justifyContent={'space-between'} _hover={{ bgColor: 'gray.100' }} p={2}>
                                        <HStack>
                                            <Box h='40px' w='8px' bgColor={value.done ? '#d9d9d9' : '#da4359'} />
                                            <Text>{value.content}</Text>
                                        </HStack>
                                        <Text>{value.time}</Text>
                                    </HStack>
                                ))
                            }
                        </Stack>

                    </Box>
                </Stack>


            <Modal isOpen={isPlanOpen} onClose={() => setIsPlanOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <HStack>
                                <Text w='150px' {...Title_lg}>시간설정</Text>
                                <Input defaultValue={planEditMode.mode ? plan[planEditMode.index].time : ''} onChange={(e) => setTime(e.target.value)} borderColor={'gray.300'} type="time"></Input>
                            </HStack>
                            <Stack>
                                <Text w='150px' {...Title_lg}>내용입력</Text>
                                <Textarea defaultValue={planEditMode.mode ? plan[planEditMode.index].content : ''} onChange={(e) => setContent(e.target.value)} minH={'200px'} borderColor={'gray.300'} />
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
                                <Button onClick={() => setIsPlanOpen(false)}>취소</Button>
                                <Button onClick={() => planEditMode.mode ? updatePlan(planEditMode.index, plan[planEditMode.index].done) : savePlan()} colorScheme="red">{planEditMode.mode ? '수정' : '저장'}</Button>
                            </ButtonGroup>
                        </HStack>
                    </ModalFooter>
                </ModalContent>

            </Modal>
        </>
    )

}
export default Plan;