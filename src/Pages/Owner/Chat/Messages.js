import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
const Messages = (data) => {
    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [data]);
  return (
    <div className='messages' ref={scrollRef}>
        {data.data && data.data.messages.map((value) => (
            <Message message={value}/>
        ))}

    </div>
  )
}

export default Messages