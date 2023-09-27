import React, { useState } from "react";
import { Box, Center, HStack, VStack, Wrap, Text, Stack } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export const colorChip = [
  { color: '#FF0000', select: false, name: '레드' },
  { color: '#FF5001', select: false, name: '스칼렛' },
  { color: '#FFB800', select: false, name: '오렌지' },
  { color: '#FFE403', select: false, name: '옐로우' },
  { color: '#93F52F', select: false, name: '옐로우그린' },
  { color: '#009125', select: false, name: '그린' },
  { color: '#6CEBFF', select: false, name: '스카이블루' },
  { color: '#487CE5', select: false, name: '블루' },
  { color: '#6A33C1', select: false, name: '바이올렛' },
  { color: '#FFB2F3', select: false, name: '라이트핑크' },
  { color: '#FF509F', select: false, name: '핫핑크' },
  { color: '#707070', select: false, name: '화이트' },
  { color: '#B9BDC4', select: false, name: '그레이' },
  { color: '#000000', select: false, name: '블랙' }
]

const ColorPicker = ({ selColor, ...props }) => {
  const onSelectColor = (color) => {
    console.log(color)
    if (selColor.includes(color)) {
      props.setColor(selColor.filter((element) => element !== color));
    }
    else
      props.setColor([...selColor, color]);
  }

  return (
    <Stack direction={'row'}>
      <HStack spacing={2}>
        <Wrap>
          {colorChip.map((value, index) => {
            const isSelected = selColor.includes(value.color)
            return (
              <Box mr={1} mb={1} onClick={() => onSelectColor(value.color)} borderWidth={2} borderRadius={[2, 4]} borderColor={isSelected ? '#da4359' : '#d9d9d9'} >
                <Center borderWidth={[1, 2]} borderRadius={[2, 4]} borderColor='white' bgColor={value.color} boxSize={['24px', '30px']}>
                  {isSelected && <CheckIcon color={'whiteAlpha.900'} />}
                </Center>
              </Box>
            );
          }
          )}
        </Wrap>
      </HStack>
    </Stack>
  )
}
export default ColorPicker;