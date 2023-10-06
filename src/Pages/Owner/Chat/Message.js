import { Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { getDate, getTime } from '../../../DB/function'

const Message = ({message}) => {
  return (
    <div className={message.owner ? 'message owner' : 'message'}>
        {/* <div className='messageInfo'>
            <img
            src='https://firebasestorage.googleapis.com/v0/b/flit-data.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-10-04%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.55.46.pngae8353d8-998d-4a51-b4d2-7a2ccf60786e?alt=media&token=89635078-3449-4926-a643-005b9f0b5322'
            alt=''/>
            <span>just now</span>
        </div> */}
        <div className='messageContent'>
            { message.type == "text" ? 
            <p>{message.content}</p> :
            <img
            src='https://firebasestorage.googleapis.com/v0/b/flit-data.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-10-04%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.55.46.pngae8353d8-998d-4a51-b4d2-7a2ccf60786e?alt=media&token=89635078-3449-4926-a643-005b9f0b5322'
            alt=''/>
        }
        </div>
        <Stack className='time'>
        {/* <span>{getDate(message.timestamp).replaceAll('-', '.')}</span> */}
        <span>{getTime(message.timestamp)}</span>
        </Stack>
    </div>
  )
}

export default Message