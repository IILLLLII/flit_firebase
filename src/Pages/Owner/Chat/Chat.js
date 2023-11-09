import { Box, Image, Text, Avatar, Stack, Input } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { getDocument, getTime, updateData } from '../../../DB/function'
import { LinkIcon } from '@chakra-ui/icons'
import { AiOutlinePicture } from 'react-icons/ai'
import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../DB/firebase-config'

const Chat = ({ data, user, ...props }) => {
    const [message, setMessage] = useState('')
    const [chat, setChat] = useState(data)
    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [chat]);

    useEffect(() => {
        getChat();
    }, [data])

    const docRef = doc(db, 'Chat', localStorage.getItem('ownerToken') + user.uid);
    const unsubscriber = onSnapshot(docRef, (snapshot) => {
      const item = snapshot.data();
      console.log('update!')
    //   getChat()
      return item;
    });

    const getChat = async () => {
        let combineId = localStorage.getItem('ownerToken') + user.uid
        console.log(combineId)
        try {
          let chat = await getDocument('Chat', combineId);
          setChat(chat)
          console.log(new Date(), chat)
        }
        catch
        {
          // new
          await addDoc(collection(db, combineId, { messages: [] }))
          setChat({ messages: [] })
          console.log('generate new')
        }
      }

    const sendMessage = async() => {
        let messages = chat.messages;
        console.log('message', messages)
        if(message.length > 0)
        {
          await updateData('Chat', localStorage.getItem('ownerToken') + user.uid, {messages : [...messages, {
            type : 'text',
            owner: true,
            content: message,
            timestamp: new Date()
          }]})
          setMessage('')
        }
        // console.log(message)

        await updateData('userChats',  localStorage.getItem('ownerToken') + user.uid, {
            userInfo: user,
            date: new Date(),
            lastMessage: message
        })


        getChat();
      }
      
    return (
        <Box className='chat'>
            <Box className='chatInfo'>
                {user.displayName && <Avatar src={user.photoURL}></Avatar>}
                <Text>{user.displayName}</Text>
            </Box>
            <div className='messages' ref={scrollRef}>
        {chat && chat.messages && chat.messages.map((message) => (
                <div className={message.owner ? 'message owner' : 'message'}>
                <div className='messageContent'>
                    { message.type == "text" ? 
                    <p>{message.content}</p> :
                    <img
                    src='https://firebasestorage.googleapis.com/v0/b/flit-data.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-10-04%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.55.46.pngae8353d8-998d-4a51-b4d2-7a2ccf60786e?alt=media&token=89635078-3449-4926-a643-005b9f0b5322'
                    alt=''/>
                }
                </div>
                <Stack className='time'>
                <span>{getTime(message.timestamp)}</span>
                </Stack>
            </div>
        ))}

    </div>
    <div className='input'>
        <Input borderColor={'#d9d9d9'}type='text' value={message} placeholder='내용을 입력하세요...' onChange={(e) => setMessage(e.target.value)}/>
        <div className='send'>
            <LinkIcon width={'24px'} height={'20px'} color={'#8c8c8c'}/>
            <Input borderColor={'#d9d9d9'}type='file' style={{display: 'none'}} id='file' />
            <label htmlFor='file'>
                <AiOutlinePicture size={'24px'} color={'#8c8c8c'}/>
            </label>
            <button onClick={() => sendMessage()}>전송</button>
        </div>
    </div>
        </Box>
    )
}

export default Chat