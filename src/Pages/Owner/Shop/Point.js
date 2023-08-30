import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ShopPoint = () => {
    return(
        <Box>
            <Text>
                {window.location.pathname}
            </Text>
        </Box>
    )

}
export default ShopPoint;