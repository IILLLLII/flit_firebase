import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const ChatList = () => {
    return(
        <Box>
            <Text>
                {window.location.pathname}
            </Text>
        </Box>
    )

}

export const ChatRoom = () => {
    return(
        <Box>
            <Text>
                {window.location.pathname}
            </Text>
        </Box>
    )

}
export default ChatList;