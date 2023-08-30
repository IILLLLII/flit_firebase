import { Box, Text } from "@chakra-ui/react";
import React from "react";

const OrderView = () => {
    return(
        <Box>
            <Text>
                {window.location.pathname}
            </Text>
        </Box>
    )

}
export default OrderView;