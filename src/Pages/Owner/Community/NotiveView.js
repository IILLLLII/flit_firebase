import { Box, Flex, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { getDate } from "../../../DB/function";
import MobileStatus from "../../../Components/MobileStatus";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { FaChevronLeft } from "react-icons/fa";
import { Title_2xl } from "../../../Style/Typograhy";
const NoticeView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [notice, setNotice] = useState(location.state);

    return (
        <Flex bgColor={'white'} h={'100vh'} flexDirection={'column'}>
            <Stack>
                <HStack alignItems={'flex-start'}>
                    <IconButton icon={<FaChevronLeft />} onClick={() => navigate(-1)} />
                    <Text {...Title_2xl}>공지사항</Text>
                </HStack>
                <Stack py={2} px={4}>
                    <Text fontSize={'lg'} fontWeight={600}>[{notice.type}] {notice.title}</Text>
                    <Text color={'gray.500'}>{getDate(notice.date)}</Text>
                </Stack>
                <Box w="100%" h="1px" backgroundColor={'gray.300'} marginY={2} />
                <Box p={4}>

                    <Text whiteSpace="pre-line" dangerouslySetInnerHTML={{ __html: notice.contents }} />
                </Box>

            </Stack>
        </Flex>
    )
}
export default NoticeView;