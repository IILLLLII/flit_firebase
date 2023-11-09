import { Box, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Search = () => {
  return (
    <Box className='search'>
        <Box className='searchForm'>
            <Input borderColor={'#d9d9d9'}className='input' type='text' placeholder='찾기'/>
        </Box>
    </Box>
  )
}

export default Search