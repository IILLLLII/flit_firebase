import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = ({...props}) => {
  return (
    <Box className='sidebar'>
        <Navbar/>
        <Search/>
        <Chats onSelectChat={(chat, user) =>  props.onSelectChat(chat, user)}/>
    </Box>
  )
}

export default Sidebar