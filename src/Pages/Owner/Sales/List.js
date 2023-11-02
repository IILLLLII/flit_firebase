import { Badge, Box, Checkbox, CheckboxGroup, HStack, Image, Input, InputGroup, Radio, RadioGroup, Select, SimpleGrid, Stack, StackDivider, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Wrap, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../Chat/Search";
import { compareDate, formattedAmount, getAllList, getDate, getProductList, getReview, getSaleList } from "../../../DB/function";
import { isAdmin } from "../../../App";
const SalesList = () => {
    // const toast = useToast();
    // const navigate = useNavigate();
    // const [saleList, setSaleList] = useState([])
    // const [filter, setFilter] = useState({
    //     keyword:'',
    //     type : '',
    // });
    // useEffect(() => {
    //     search();
    // }, []);
    
    // const search = async() => {
    //     if(filter.state.length === 0){
    //         toast({
    //             status: 'warning',
    //             title: '필드를 다시 선택해주세요.'
    //         })
    //         return;
    //     }

    //     let result = await getSaleList(filter)
    //     let newSaleList = []

    //     result.map(async(value) => {
    //         setSaleList(newSaleList)
    //     })
    // }
    return(
        <Box>
            <Text>
                {window.location.pathname}
            </Text>
        </Box>
    )

}
export default SalesList;