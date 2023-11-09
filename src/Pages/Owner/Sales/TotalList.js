import React, { useEffect, useState } from 'react';
import { Box, Flex, Container, HStack, Input, Select, VStack, Text, Stack, StackDivider, Card, CardHeader, CardBody, Divider, RadioGroup, Radio, InputGroup, Button, IconButton, Checkbox, Center } from '@chakra-ui/react';
import { dayData, dummySalesData, monthData, salesListData, weekData } from '../../dummy';
import { formattedAmount } from '../../../DB/function';
import styled from '@emotion/styled';
import { MdCancel, MdReceipt } from 'react-icons/md';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from "recharts"
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function SalesTotal() {
  const [date, setDate] = useState(() => new Date());
  const [salesData, setSalesData] = useState(dummySalesData);
  const [dateRange, setDateRange] = useState("일별 매출");
  const [popup, setPopup] = useState("close");
  const [chart, setChart] = useState("총매출");
  const [list, setList] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    navigate('');
  }, [currentPage])

  const openPopup = (type) => {
    if (popup !== type)
      setPopup(type);
  }

  const closePopup = () => {
    if (popup !== "close")
      setPopup("close");
  }

  return (
      <Container maxW={'container.xl'} p={[2, 4]}>
      <Card width={"100%"} p={[2, 4]}>
        {/* 필터 */}
        <VStack alignItems={'flex-end'}>
          <HStack spacing={6} width={"100%"} justifyContent={'flex-end'}>
            <Select borderColor={"#d9d9d9"}onChange={(e) => setDateRange(e.target.value)} width={"200px"} defaultValue={dateRange} >
              <option value='일별 매출'>일별 매출</option>
              <option value='주별 매출'>주별 매출</option>
              <option value='월별 매출'>월별 매출</option>
              <option value='구간별 매출'>구간별 매출</option>
            </Select>
            <Input borderColor={'#d9d9d9'}display={dateRange !== "구간별 매출" ? "block" : "none"} type="date" width={"200px"} defaultValue={"2023-11-09"}/>
          </HStack>
          {dateRange === "구간별 매출" && <HStack><Input borderColor={'#d9d9d9'}type="date"/><Input borderColor={'#d9d9d9'}type="date"/></HStack>}
        </VStack>
      </Card>

      {/* 매출 현황 */}
      <Card width={"100%"} p={4} mt={2}>
        <Text fontSize={["1.2rem"]} fontWeight={'bold'}>매출 현황</Text>
        <Stack mt={[4, 6]} direction={['column', 'row']} width={'100%'} height={"100%"} spacing={0} divider={<StackDivider borderColor={"#d9d9d9"} />} borderTop={"1px solid #b4b4b4"} borderBottom={"1px solid #b4b4b4"}>
          <Box width={["100%", "50%"]} height={"100%"}>
            <Box width={["100%"]} height={"100%"} p={[4]}>
              <VStack alignItems={'flex-start'} spacing={4}>
                <Text fontSize={"0.8rem"} color="#8c8c8c">최종 업데이트 일시 : &nbsp;
                  {date.getFullYear()}.
                  {('0' + (date.getMonth() + 1)).slice(-2)}.
                  {('0' + date.getDate()).slice(-2)}&nbsp;
                  {('0' + date.getHours()).slice(-2)}:
                  {('0' + date.getMinutes()).slice(-2)}:
                  {('0' + date.getSeconds()).slice(-2)}
                </Text>
                <Text fontSize={"1.2rem"}>{formattedAmount(salesData.total)}</Text>

              </VStack>

            </Box>
          </Box>
          <Box width={["100%", "50%"]} height={"100%"}>
            <VStack spacing={0} divider={<StackDivider borderColor={"#d9d9d9"} />}>
              <Box width={["100%"]} height={"100%"} onClick={() => openPopup("sales")}>
                <Flex justifyContent={"space-between"} alignItems={'center'} p={4}>
                  <Text fontSize={"1rem"}>총 매출액</Text>
                  <HStack>
                    <Text fontSize={"0.7rem"}>플릿 {formattedAmount(salesData.salesTotalFlit)}</Text>
                    <Text fontSize={"0.7rem"}>가계부 {formattedAmount(salesData.salesTotalAccount)}</Text>
                    <Text fontSize={"1rem"}>{formattedAmount(salesData.salesTotalFlit + salesData.salesTotalAccount)}</Text>
                  </HStack>
                </Flex>

                <Popup width={["94%", "47%"]} display={popup === "sales" ? "block" : "none"}>
                  <VStack width={"100%"} divider={<StackDivider borderColor={"#d9d9d9"}/>}>
                    <Flex width={"100%"} alignItems={'center'} justifyContent={'space-between'} p={3} pb={1}>
                      <Text fontSize={"1.2rem"}>총 매출액</Text>
                      <Text></Text>
                      <MdCancel style={{ cursor: "pointer" }} color='#da4359' size={25} onClick={closePopup} />

                    </Flex>
                    <HStack width={"100%"} divider={<StackDivider borderColor={"#d9d9d9"} />} alignItems={'flex-start'}>
                      <VStack width={"50%"} pr={4} pl={4} pt={2} pb={2}>
                        <Text>플릿</Text>
                        {salesData.salesFlit.map(({ name, cost, count }, index) => (
                          <HStack width={"100%"} justifyContent={'space-between'}>
                            <Text fontSize={"0.9rem"}>{name}</Text>
                            <Text fontSize={"0.7rem"}>{formattedAmount(cost)} | {count}건</Text>
                          </HStack>
                        ))}
                      </VStack>
                      <VStack width={"50%"} pr={4} pl={4} pt={2} pb={2}>
                        <Text>가계부</Text>
                        {salesData.salesAccount.map(({ name, cost, count }, index) => (
                          <HStack width={"100%"} justifyContent={'space-between'}>
                            <Text fontSize={"0.9rem"}>{name}</Text>
                            <Text fontSize={"0.7rem"}>{formattedAmount(cost)} | {count}건</Text>
                          </HStack>
                        ))}
                      </VStack>

                    </HStack>
                  </VStack>
                </Popup>

              </Box>

              <Box width={["100%"]} height={"100%"} onClick={() => openPopup("purchase")}>
                <Flex justifyContent={"space-between"} alignItems={'center'} p={4}>
                  <Text fontSize={"1rem"}>총 매입액</Text>
                  <HStack>
                    <Text fontSize={"0.7rem"}>플릿 {formattedAmount(salesData.purchaseTotalFlit)}</Text>
                    <Text fontSize={"0.7rem"}>가계부 {formattedAmount(salesData.purchaseTotalAccount)}</Text>
                    <Text fontSize={"1rem"}>{formattedAmount(salesData.purchaseTotalFlit + salesData.purchaseTotalAccount)}</Text>
                  </HStack>
                </Flex>

                <Popup width={["94%", "47%"]} display={popup === "purchase" ? "block" : "none"}>
                  <VStack width={"100%"} divider={<StackDivider borderColor={"#d9d9d9"} />}>
                    <Flex width={"100%"} alignItems={'center'} justifyContent={'space-between'} p={3} pb={1}>
                      <Text fontSize={"1.2rem"}>총 매입액</Text>
                      <Text></Text>
                      <MdCancel style={{ cursor: "pointer" }} color='#da4359' size={25} onClick={closePopup} />

                    </Flex>
                    <HStack width={"100%"} divider={<StackDivider borderColor={"#d9d9d9"} />} alignItems={'flex-start'}>
                      <VStack width={"50%"} pr={4} pl={4} pt={2} pb={2}>
                        <Text>플릿</Text>
                        {salesData.purchaseFlit.map(({ name, cost, count }, index) => (
                          <HStack width={"100%"} justifyContent={'space-between'}>
                            <Text fontSize={"0.9rem"}>{name}</Text>
                            <Text fontSize={"0.7rem"}>{formattedAmount(cost)} | {count}건</Text>
                          </HStack>
                        ))}
                      </VStack>
                      <VStack width={"50%"} pr={4} pl={4} pt={2} pb={2}>
                        <Text>가계부</Text>
                        {salesData.purchaseAccount.map(({ name, cost, count }, index) => (
                          <HStack width={"100%"} justifyContent={'space-between'}>
                            <Text fontSize={"0.9rem"}>{name}</Text>
                            <Text fontSize={"0.7rem"}>{formattedAmount(cost)} | {count}건</Text>
                          </HStack>
                        ))}
                      </VStack>

                    </HStack>
                  </VStack>
                </Popup>

              </Box>
            </VStack>

          </Box>
        </Stack>

      </Card>

      {/* 매입 매출 그래프 */}
      {dateRange !== "구간별 매출" &&
      <Card width={"100%"} p={4} mt={2}>
        <Text fontSize={["1.2rem"]} fontWeight={'bold'}>매입매출 그래프</Text>
        <VStack mt={[4, 6]} border={"1px solid #d9d9d9"} p={4} alignItems={'flex-start'} borderRadius={'10px'}>
          <RadioGroup name='sales' value={chart} onChange={setChart} mb={2}>
            <Stack direction='row' spacing={4}>
              <Radio colorScheme={'pink'} value='총매출'>{'총매출'}</Radio>
              <Radio colorScheme={'pink'} value='카드결제'>{'카드결제'}</Radio>
              <Radio colorScheme={'pink'} value='현장결제(POS)'>{'현장결제(POS)'}</Radio>
              <Radio colorScheme={'pink'} value='계좌이체'>{'계좌이체'}</Radio>
            </Stack>
          </RadioGroup>

          <Box width={'100%'} h='500px' overflow={'auto'} p={2}>
          <ResponsiveContainer >
            <BarChart data={dateRange === "월별 매출" ? monthData : dateRange === "주별 매출" ? weekData : dayData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              {/* <Tooltip /> */}
              <Bar dataKey="purchase" fill="#C1DAFF" />
              <Bar dataKey="sales" fill="#3A89FF" />
            </BarChart>
            </ResponsiveContainer>
          </Box>
        </VStack>
      </Card>
      }

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

        <VStack width="100%" justifyContent={'center'} divider={<StackDivider borderColor={"#d9d9d9"} />} mt={2} p={[2]} borderTop={"1px solid #b4b4b4"} borderBottom={"1px solid #b4b4b4"}>
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
//   border:'1px solid #8c8c8c'
});