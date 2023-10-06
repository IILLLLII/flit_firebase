import { Avatar, Box, HStack, Image, Text } from '@chakra-ui/react'
import { collection, getDocs, query, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../DB/firebase-config'
import { getDate, getDocument } from '../../../DB/function'

const Chats = ({...props}) => {

    const currentUser = localStorage.getItem('ownerToken')
    // const [user, setUser] = useState(null);
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

    const handleSelect = async (user) => {
        let combineId = currentUser + user.uid;

        let chat = await getDocument('Chat', combineId)

        props.onSelectChat(chat, user)

        console.log(chat)

    }
    return (
        <Box className='chat'>
            {chatList && chatList.map((value, index) => (
                <Box className='userChat' onClick={() => handleSelect(value.userInfo)}>
                    <Avatar src={value.userInfo.photoURL} alt='' />
                    <HStack w='100%' justifyContent={'space-between'} alignItems={'flex-end'}>
                        <Box className='userChatInfo'>
                            <span>{value.userInfo.displayName}</span>
                            <p>{value.lastMessage}</p>
                        </Box>

                        <Text color={'gray.400'}>{getDate(value.date)}</Text>
                    </HStack>

                </Box>
            ))}
        </Box>
    )
}

export default Chats