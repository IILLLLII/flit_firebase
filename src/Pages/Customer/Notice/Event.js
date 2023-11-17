import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getDate, getNotice } from "../../../DB/function";
import MobileStatus from "../../../Components/MobileStatus";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Event = () => {
    const navigate = useNavigate();
    const [noticeList, setNoticeList] = useState([]);
    useEffect(() => {
        getNoticeList();
    }, []);
    const getNoticeList = async () => {
        let list = await getNotice({ user: 'Customer', keyword: '', type: '이벤트' })
        console.log('notice!!', list)
        setNoticeList(list)

    }
    return (
        <Flex bgColor={'white'} h={'100vh'} flexDirection={'column'}>
                <MobileStatus title={"이벤트"} />

            <Stack mt={'50px'}>
                {noticeList.map((value, index) => (
                    <Image src={value.thumbnail} onClick={() => navigate('/customer/notice/view', {state: value})}/>
                    // <HStack justifyContent={'space-between'} _hover={{ bgColor: 'gray.100' }}>
                    //     <Stack py={2} px={4}>
                    //         <Text fontSize={'lg'} fontWeight={600}>[{value.type}] {value.title}</Text>
                    //         <Text color={'gray.500'}>{getDate(value.date)}</Text>
                    //     </Stack>
                    //     <FaChevronRight />
                    // </HStack>
                ))}

            </Stack>
        </Flex>
    )
}
export default Event;