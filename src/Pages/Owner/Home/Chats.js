import { Avatar, Box, HStack, Stack, Text } from '@chakra-ui/react';
import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../DB/firebase-config';
import { getDate } from '../../../DB/function';
import { Title_lg } from '../../../Style/Typograhy';

const Chats = () => {
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        getChatList(localStorage.getItem('ownerToken'))
    }, []);

    const getChatList = async (id) => {
        const q = query(collection(db, 'userChats'));
        const querySnapshot = await getDocs(q);
        let result = []
        querySnapshot.forEach((doc) => {
            console.log(doc.id, id)
            if (doc.id.includes(id)) {
                result = [...result, { ...doc.data(), id: doc.id }]
            }
        })

        setChatList(result)
        console.log(result)
        return result;

    }

    return(
        <Stack>
                   <Box p={4} margin={1} w='100%' minH="300px" bgColor={'white'} border={'1px solid #d9d9d9'} borderRadius={'xl'}>
                   <HStack justifyContent={'space-between'} mb={4}>
                            <Text {...Title_lg}>상담문의</Text>
                        </HStack>
            {chatList && chatList.map((value, index) => index < 4 && (
                <HStack  justifyContent={'space-between'} alignItems={'flex-end'}>
                    <HStack>

                    <Avatar src={value.userInfo.photoURL} alt='' />
                        <Stack gap={0}>
                            <Text>{value.userInfo.displayName}</Text>
                            <Text color={'gray.500'}>{value.lastMessage}</Text>
                        </Stack>
                    </HStack>

                    <Text color={'gray.400'}>{getDate(value.date)}</Text>

                </HStack>
            ))}
        </Box>
        </Stack>
    )
}

export default Chats