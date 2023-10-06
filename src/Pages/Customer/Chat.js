import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, setDoc } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { db } from '../../DB/firebase-config';
import { Avatar, Box, Button, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { addDocument, getCustomer, getDate, getDocument, getOwner, getTime, updateData } from '../../DB/function';
import "../../scss/_chat.scss"
import { LinkIcon } from '@chakra-ui/icons';
import { AiOutlinePicture } from 'react-icons/ai';
const Chat = () => {
  const location = useLocation();
  const [chat, setChat] = useState({})
  const [chatList, setChatList] = useState([])
  const [ownerInfo, setOwnerInfo] = useState({})
  const [customerInfo, setCustomerInfo] = useState({})
  const [message, setMessage] = useState()

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chat]);

  useEffect(() => {
    getChat()
    getChatList(localStorage.getItem('customerToken'))
    console.log(location.state.id + localStorage.getItem('customerToken'))
    getOwnerInfo(location.state.id);
  }, []);

  const docRef = doc(db, 'Chat', location.state.id + localStorage.getItem('customerToken'));
const unsubscriber = onSnapshot(docRef, (snapshot) => {
  const item = snapshot.data();
  console.log('update!')
  return item;
});

const updateChat = async() => {
  let combineId = location.state.id + localStorage.getItem('customerToken');
  let chat = await getDocument('Chat', combineId)
  setChat(chat)
}


  const getChatList = async (id) => {
    const q = query(collection(db, 'userChats'));
    const querySnapshot = await getDocs(q);
    let result = []
    querySnapshot.forEach((doc) => {
      console.log(doc.id, id)
      if (doc.id.includes(id)) {
        result = [...result, { ...doc.data(), id: doc.id, ownerId: doc.id.replace(id, '') }]
      }
    })

    setChatList(result)
    console.log(result)
    return result;
  }

  const getChat = async () => {
    let customer = await getCustomerInfo(localStorage.getItem('customerToken'))
    let combineId = location.state.id + localStorage.getItem('customerToken')
    try {
      let chat = await getDocument('Chat', combineId);
      setChat(chat)

      console.log('customer!!', customer)
      if(!chat)
      {
        await setDoc(doc(db, "Chat", combineId), { messages: [] })
        await setDoc(doc(db, "userChats", combineId), { 
          date: new Date(), 
          lastMessage: '', 
          userInfo: {
            uid: localStorage.getItem('customerToken'),
            displayName: customer.nickname,
            photoURL: customer.profile_image
          }})
        setChat({ messages: [] })
        console.log('generate new')
      }
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

  const getOwnerInfo = async (id) => {
    let owner = await getOwner(id)
    setOwnerInfo(owner)
  }

  const getCustomerInfo = async(id) => {
    let customer = await getCustomer(id)
    return customer;
  }

  const sendMessage = async () => {
    let messages = chat.messages;
    console.log('message', messages)
    let combineId = location.state.id + localStorage.getItem('customerToken')
    if (message.length > 0) {
      console.log([...messages, {
        type: 'text',
        owner: false,
        content: message,
        timestamp: new Date()
      }])

      await updateData('Chat', combineId, {
        messages: [...messages, {
          type: 'text',
          owner: false,
          content: message,
          timestamp: new Date()
        }]
      })
      setMessage('')

      getChat()
    }
  }
  return (
    <Box bgColor={'gray.100'} minH={'100vh'}>
      <Stack bgColor={'gray.50'}>
        <HStack p={2} h='60px' position={'fixed'} top={0} bgColor={'white'} w='100%'>
          {ownerInfo.name && <Avatar src={ownerInfo.profileImage}></Avatar>}
          <Text>{ownerInfo.name}</Text>
        </HStack>
        <div ref={scrollRef} style={{ overflow: 'scroll', height: '100vh', paddingTop: '70px', paddingBottom: '70px', paddingLeft: '10px', paddingRight: '10px' }}>
          {chat && chat.messages && chat.messages.map((message) => (
            <Box gap={2} marginBottom={4} color={'black'} display={'flex'} flexDirection={message.owner ? 'row' : 'row-reverse'} alignItems={'flex-end'}>
              <Box maxW={'50%'} display={'flex'} flexDirection={'column'} gap={2}>
                {message.type == "text" ?
                  <Box bgColor={message.owner ? 'white' : 'red.200'} border={message.owner ? '1px solid #d9d9d9' : 'none'} padding={'8px 16px'} borderRadius={message.owner ? '0px 10px 10px 10px' : '10px 0px 10px 10px'}>{message.content}</Box> :
                  <img src={message.content} alt='' />
                }
              </Box>
              <Stack fontSize={'xx-small'} textAlign={message.owner ? 'left' : 'right'} gap={0}>
                {/* <span>{getDate(message.timestamp).replaceAll('-', '.')}</span> */}
                <Text color={'gray.500'}>{getTime(message.timestamp)}</Text>
              </Stack>
            </Box>
          ))}
        </div>
        <HStack h='70px' bgColor={'white'} w='100%' position={'fixed'} bottom={0} p={2}>
          <LinkIcon width={'24px'} height={'20px'} color={'#8c8c8c'} />
          <input type='file' style={{ display: 'none' }} id='file' />
          <label htmlFor='file'>
            <AiOutlinePicture size={'24px'} color={'#8c8c8c'} />
          </label>
          <Input w='70%' value={message} placeholder='내용을 입력하세요...' onChange={(e) => setMessage(e.target.value)} />
          <Button colorScheme='red' onClick={() => sendMessage()}>전송</Button>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Chat