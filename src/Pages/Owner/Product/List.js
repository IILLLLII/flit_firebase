import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ProductList = () => {
    return(
        <Box>
            <Text>
                {window.location.pathname}
            </Text>
        </Box>
    )

}
export default ProductList;