import React, { useState } from "react";
import { Box, Center, HStack, VStack, Wrap, Text, Stack } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const colorChip = [
  { color: '#FF0000', select: false },
  { color: '#FF5001', select: false },
  { color: '#FFB800', select: false },
  { color: '#FFE403', select: false },
  { color: '#93F52F', select: false },
  { color: '#009125', select: false },
  { color: '#6CEBFF', select: false },
  { color: '#487CE5', select: false },
  { color: '#6A33C1', select: false },
  { color: '#FFB2F3', select: false },
  { color: '#FF509F', select: false },
  { color: '#707070', select: false },
  { color: '#B9BDC4', select: false },
  { color: '#000000', select: false }
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
              <Box onClick={() => onSelectColor(value.color)} borderWidth={2} borderRadius={[2, 4]} borderColor={isSelected ? '#da4359' : '#d9d9d9'} >
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