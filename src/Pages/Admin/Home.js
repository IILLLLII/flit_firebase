import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
    return(

        <Box>
            <Text>
                {window.location.pathname}
            </Text>
        </Box>
    )

}
export default Home;