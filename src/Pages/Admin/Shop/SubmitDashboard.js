import { Box, HStack, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { formattedAmount, getDate, getTime } from '../../../DB/function'
import { Title_2xl } from '../../../Style/Typograhy'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

export const monthData = [
    { name: "Jan", purchase: 4000, sales: 2400 },
    { name: "Feb", purchase: 3000, sales: 1398 },
    { name: "Mar", purchase: 2000, sales: 9800 },
    { name: "Apr", purchase: 2780, sales: 3908 },
    { name: "May", purchase: 1890, sales: 4800 },
    { name: "Jun", purchase: 2390, sales: 3800 },
    { name: "Jul", purchase: 3490, sales: 4300 },
    { name: "Aug", purchase: 2390, sales: 3800 },
    { name: "Sep", purchase: 3490, sales: 4300 },
    { name: "Oct", purchase: 2390, sales: 3800 },
    { name: "Nov", purchase: 3490, sales: 4300 },
    { name: "Dec", purchase: 2390, sales: 3800 },
];

export const weekData = [
    { name: "1주", purchase: 4000, sales: 2400 },
    { name: "2주", purchase: 3000, sales: 1398 },
    { name: "3주", purchase: 2000, sales: 9800 },
    { name: "4주", purchase: 2780, sales: 3908 },
    { name: "5주", purchase: 1890, sales: 4800 },
];

export const dayData = [
    { name: "Sun", purchase: 4000, sales: 2400 },
    { name: "Mon", purchase: 3000, sales: 1398 },
    { name: "Tue", purchase: 2000, sales: 9800 },
    { name: "Wed", purchase: 2780, sales: 3908 },
    { name: "Thu", purchase: 1890, sales: 4800 },
    { name: "Fri", purchase: 2000, sales: 9800 },
    { name: "Sat", purchase: 2780, sales: 3908 },
];
function SubmitDashboard() {
    const [submitData, setSubmitData] = useState({
        update: new Date(),
        total: 4800,
        total_approve: 4300,
        new: 100,
        rate: 3,
        today: 14,
        today_approve: 10

    })
    return (
        <Stack>
            <Text {...Title_2xl}>입점현황</Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} borderTop={'1px solid #d9d9d9'} borderBottom={'1px solid #d9d9d9'}>
                <Box p={4}>
                    <Stack spacing={6}>
                        <Text>최종 업데이트 일시 : {getDate(submitData.update)} {getTime(submitData.update)}</Text>
                        <Text {...Title_2xl} mb={0}>{formattedAmount(submitData.total)}개</Text>
                    </Stack>
                </Box>
                <Box p={4}>
                    <Stack>
                        <HStack w={'100%'} justifyContent={'space-between'}>
                            <Text>이번달 신규 입점</Text>
                            <Text>{formattedAmount(submitData.new)}</Text>
                        </HStack>
                        <HStack w={'100%'} justifyContent={'space-between'}>
                            <Text>전월 대비 증감율</Text>
                            <Text>{formattedAmount(submitData.rate)}%</Text>
                        </HStack>
                        <HStack w={'100%'} justifyContent={'space-between'}>
                            <Text>전체 입점 신청 수</Text>
                            <Text>{formattedAmount(submitData.total)}</Text>
                        </HStack>
                    </Stack>
                </Box>
                <Box p={4}>
                    <Stack>
                        <HStack w={'100%'} justifyContent={'space-between'}>
                            <Text>Today 입점 신청</Text>
                            <Text>{formattedAmount(submitData.today)}</Text>
                        </HStack>
                        <HStack w={'100%'} justifyContent={'space-between'}>
                            <Text>Today 승인/미승인</Text>
                            <Text>{formattedAmount(submitData.today_approve)} / {formattedAmount(submitData.today - submitData.today_approve)}</Text>
                        </HStack>
                        <HStack w={'100%'} justifyContent={'space-between'}>
                            <Text>전체 입점수</Text>
                            <Text>{formattedAmount(submitData.total_approve)}</Text>
                        </HStack>
                    </Stack>
                </Box>
            </SimpleGrid>
            <Tabs>
                <TabList>
                    <Tab>주별 입점현황</Tab>
                    <Tab>월별 입점현황</Tab>
                    <Tab>연별 입점현황</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Box width={'100%'} h='300px' overflow={'auto'} p={2}>
                            <ResponsiveContainer >
                                <LineChart data={dayData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    {/* <Tooltip /> */}
                                    <Line dataKey="purchase" fill="#8c8c8c" stroke="#8c8c8c" type="monotone" />
                                    <Line dataKey="sales" fill="#da4359" stroke="#da4359" strokeWidth={2} type="monotone" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box width={'100%'} h='300px' overflow={'auto'} p={2}>
                            <ResponsiveContainer >
                                <LineChart data={weekData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    {/* <Tooltip /> */}
                                    <Line dataKey="purchase" fill="#8c8c8c" stroke="#8c8c8c" type="monotone" />
                                    <Line dataKey="sales" fill="#da4359" stroke="#da4359" strokeWidth={2} type="monotone" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box width={'100%'} h='300px' overflow={'auto'} p={2}>
                            <ResponsiveContainer >
                                <LineChart data={monthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    {/* <Tooltip /> */}
                                    <Line dataKey="purchase" fill="#8c8c8c" stroke="#8c8c8c" type="monotone" />
                                    <Line dataKey="sales" fill="#da4359" stroke="#da4359" strokeWidth={2} type="monotone" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Stack>
    )
}

export default SubmitDashboard