import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Customer = () => {
    return(
        <Box>
            <Text>
                {window.location.pathname}
            </Text>
        </Box>
    )

}
export default Customer;