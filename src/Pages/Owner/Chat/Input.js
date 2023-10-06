import { LinkIcon } from '@chakra-ui/icons'
import { onSnapshot, serverTimestamp } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { AiOutlinePicture } from 'react-icons/ai'
import { updateData } from '../../../DB/function'

const Input = ({data, owner, user, ...props}) => {
  const [message, setMessage] = useState('')

  const sendMessage = async() => {
    let messages = data.messages;
    console.log('message', messages)
    if(message.length > 0)
    {
      console.log([...messages, {
        type : 'text',
        owner: true,
        content: message,
        timestamp: new Date()
      }])

      await updateData('Chat', owner + user, {messages : [...messages, {
        type : 'text',
        owner: true,
        content: message,
        timestamp: new Date()
      }]})
      setMessage('')

      props.onUpdateChat();
    }
    // console.log(message)
  }
  return (
    <div className='input'>
        <input type='text' value={message} placeholder='내용을 입력하세요...' onChange={(e) => setMessage(e.target.value)}/>
        <div className='send'>
            <LinkIcon width={'24px'} height={'20px'} color={'#8c8c8c'}/>
            <input type='file' style={{display: 'none'}} id='file' />
            <label htmlFor='file'>
                <AiOutlinePicture size={'24px'} color={'#8c8c8c'}/>
            </label>
            <button onClick={() => sendMessage()}>전송</button>
        </div>
    </div>
  )
}

export default Input