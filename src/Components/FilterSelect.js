
import { Box, Button, Center, CloseButton, Flex, HStack, IconButton, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { FiSliders } from "react-icons/fi";
import { Title_xl } from "../Style/Typograhy";

export const FilterSelect = ({ children, bOpen, ...props }) => {
    const [isOpen, setOpen] = useState(bOpen);

    return (
        <>
            <IconButton onClick={() => setOpen(!isOpen)} icon={<FiSliders />} />

            {(isOpen) && <Box p={4} zIndex={9999} w={'500px'} h={'auto'} bgColor={'white'} borderRadius={'md'} borderWidth={1.5} boxShadow={'lg'} borderColor={'gray.300'} position={'absolute'} top={"170px"}>
                <Flex justifyContent={'space-between'}>
                    <Text {...Title_xl}>필터</Text>
                    <CloseButton onClick={() => setOpen(false)} />
                </Flex>

                {children}

                <HStack marginY={4} w='100%'>
                    <Button w='40%' onClick={() => { setOpen(false); props.onReset(); }}>
                        초기화
                    </Button>
                    <Button w='60%' colorScheme="red" onClick={() => { setOpen(false); props.onSearch(); }}>
                        검색
                    </Button>
                </HStack>
            </Box>
            }
        </>
    )
}