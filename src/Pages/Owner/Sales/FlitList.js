import React, { useEffect, useState } from 'react';
import { Box, Flex, Container, HStack, Input, Select, VStack, Text, Stack, StackDivider, Card, CardHeader, CardBody, Divider, RadioGroup, Radio, InputGroup, Button, IconButton, Checkbox, Center } from '@chakra-ui/react';
import { dayData, dummySalesData, monthData, salesListData, weekData } from '../../dummy';
import styled from '@emotion/styled';
import { MdCancel, MdReceipt } from 'react-icons/md';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts"
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function SalesFlit() {
  const [date, setDate] = useState(() => new Date());
  const [salesData, setSalesData] = useState(dummySalesData);
  const [dateRange, setDateRange] = useState("일별 매출");
  const [type, setType] = useState("일반");
  const [chart, setChart] = useState("총매출");
  const [list, setList] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    navigate('');
  }, [currentPage])

  return (
      <Container maxW={'container.xl'} p={[2, 4]}>
      <Card width={"100%"} p={[2, 4]}>
        {/* 필터 */}
        <Stack alignItems={'space-between'} direction={['column', 'row']}>
        <RadioGroup width="100%" minW={'400px'} name='list' value={type}>
            <Stack alignItems={'center'} height={"100%"} direction='row' spacing={4}>
              <Radio colorScheme={'pink'} value='전체'>{'전체'}</Radio>
              <Radio colorScheme={'pink'} value='일반'>{'일반'}</Radio>
              <Radio colorScheme={'pink'} value='정기배송'>{'정기배송'}</Radio>
              <Radio colorScheme={'pink'} value='수발주'>{'수발주'}</Radio>
            </Stack>
          </RadioGroup>
        <VStack>
          <HStack spacing={6} width={dateRange !== "구간별 매출" ? "390px" : "100%"}>
            <Select size={['sm', 'md']}  onChange={(e) => setDateRange(e.target.value)} defaultValue={dateRange} >
              <option value='일별 매출'>일별 매출</option>
              <option value='주별 매출'>주별 매출</option>
              <option value='월별 매출'>월별 매출</option>
              <option value='구간별 매출'>구간별 매출</option>
            </Select>
            <Input display={dateRange !== "구간별 매출" ? "block" : "none"} type="date" size={['sm', 'md']}  defaultValue={'2023-01-01'}/>
          </HStack>
          <Flex width="100%">
          {dateRange === "구간별 매출" && <HStack><Input type="date"/> <Input type="date"/></HStack>} 
          </Flex>
        </VStack>
        </Stack>
      </Card>

      <Card width="100%" p={4} mt={2}>
        <Text fontSize={["1.2rem"]} fontWeight={'bold'}>상세 내역</Text>
        <Stack direction={['column', 'row']} width="100%" alignItems="center" justifyContent={'space-between'}>
          <RadioGroup width="100%" minW={'400px'} name='list' value={list} onChange={setList}>
            <Stack direction='row' spacing={4}>
              <Radio colorScheme={'pink'} value='전체'>{'전체'}</Radio>
              <Radio colorScheme={'pink'} value='매출'>{'매출'}</Radio>
              <Radio colorScheme={'pink'} value='매입'>{'매입'}</Radio>
            </Stack>
          </RadioGroup>
          <InputGroup width="100%">
            <Search/>
            <IconButton ml={2} icon={<SearchIcon />} />
          </InputGroup>
        </Stack>

        <VStack width="100%" justifyContent={'center'} divider={<StackDivider borderColor={"#b4b4b4"} />} mt={2} p={[2]} borderTop={"1px solid #b4b4b4"} borderBottom={"1px solid #b4b4b4"}>
          {salesListData.map((value, index) => (
            <Box width={'100%'} p={[0, 2]}>
            <HStack width="100%" spacing={10} justifyContent={'space-between'}>
              <Checkbox width={'2%'} size={'lg'} />
              <Text width="3%">{index + 1}</Text>
              <Stack width={"60%"} direction={['column', 'row']} spacing={[0, 2]} justifyContent={'space-between'}>
                <HStack width={["100%", "30%"]} justifyContent={['flex-start', 'space-between']}>
                  <Text>{value.date}</Text>
                  <Text>{value.type}</Text>
                </HStack>
                <Stack direction={['row', 'column']} alignItems={'center'} spacing={[2, 0]} justifyContent={['flex-start', 'center']}>
                {value.order_number && <Text>{`${value.order_number ? "[" + value.order_number +  "]" : ''}`}</Text>}
                <Text>{`${value.product_name}`}</Text>
                </Stack>
                <Stack direction={['row', 'column']} alignItems={'center'} spacing={[2, 0]}>
                  <Text>{`${value.total_cost}`}</Text>
                  <Text>{`(${value.payment})`}</Text>
                </Stack>
              </Stack>
              <Text width="8%">{value.method}</Text>
              <MdReceipt width="10%" size={25} />
            </HStack>
            </Box>
          ))
          }
        </VStack>
      </Card>
      </Container>
  )
}

const Popup = styled(Box)({
  border: "1.5px solid transparent",
  borderRadius: "10px",
  backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(to bottom right, #da4359, white)",
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",
  position: "absolute",
  height: "210px",
  minWidth: "500px",
  boxShadow: "5px 5px 5px #d9d9d9",
  zIndex: 99,
  marginTop: '-10px'
});

const Search = styled(Input)({
  // border:'1px solid #8c8c8c'
});