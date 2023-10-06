import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import "../../../scss/_chat.scss"
import { getDocument } from '../../../DB/function'
import { db } from '../../../DB/firebase-config'
import { doc, onSnapshot } from 'firebase/firestore'
  
const Home = () => {
    const [chat, setChat] = useState({messages : []})
    const [user, setUser] = useState({})
    const updateChat = async() => {
      let combineId = localStorage.getItem('ownerToken') + user.uid;
      let chat = await getDocument('Chat', combineId)
      setChat(chat)
    }

  return (
    <Box className='home'>
        <Box className='container'>
        <Sidebar onSelectChat={(chat, id) => {setChat(chat); setUser(id);}}/>
        <Chat data={chat} user={user} onUpdateChat={updateChat}/>
        </Box>
    </Box>
  ) 
}

export default Home