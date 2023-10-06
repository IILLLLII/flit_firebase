import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { getDate } from "../../../DB/function";
import MobileStatus from "../../../Components/MobileStatus";
import { useLocation } from "react-router-dom";
const NoticeView = () => {
    const location = useLocation();
    const [notice, setNotice] = useState(location.state);

    return (
        <Flex bgColor={'white'} h={'100vh'} flexDirection={'column'}>
            <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
                <MobileStatus title={"공지사항"} />
            </Flex>

            <Stack mt={'50px'}>
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