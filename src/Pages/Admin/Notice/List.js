import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Title_2xl } from "../../../Style/Typograhy";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const NoticeList = () => {
    const navigate = useNavigate();
    return(
        <Box>
            <HStack justifyContent={'space-between'} alignItems={'flex-start'}>
            <Text {...Title_2xl}>공지 / 이벤트 관리</Text>
            <Button leftIcon={<AddIcon/>} onClick={() => navigate('/admin/notice/add')}>공지 / 이벤트 등록</Button>
            </HStack>
        </Box>
    )
}
export default NoticeList;