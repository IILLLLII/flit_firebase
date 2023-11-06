import { Box, Card, CardHeader, Center, Container, Flex, HStack, Select, SimpleGrid, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, PieChart, Pie, Cell, BarChart, Bar, ResponsiveContainer } from "recharts"
import axios from "axios";
import { dayData } from "../Shop/SubmitDashboard";
import { getDate, getList } from "../../../DB/function";

export const allUsersData = [
  { title: 'Customer', subtitle: '전체 고객 수', number: '67,790', increase: '+145' },
  { title: 'Shop', subtitle: '전체 꽃집 수', number: '4,500', increase: '+14' },
  { title: 'Florist', subtitle: '전체 플로리스트 수', number: '4,300', increase: '+13' },
  { title: 'Out', subtitle: '탈퇴 회원 수', number: '34', increase: '+13' },
];

export const genderData = [
  { name: '여성', value: 400 },
  { name: '남성', value: 300 },
  { name: '기타', value: 100 }
];

export const ageData = [
  { name: '10대', value: 400 },
  { name: '20대', value: 300 },
  { name: '30대', value: 100 },
  { name: '40대', value: 400 },
  { name: '50대', value: 300 },
  { name: '60대', value: 100 },
  { name: '70대', value: 400 }
];

export default function AdminUser() {
    const [customer, setCustomer] = useState([])
    const [owner, setOwner] = useState([])
	const [menu, setMenu] = useState('Total User');
	const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

	useEffect(() => {
		const path = window.location.pathname;
		const menu = path.split('/')[path.split('/').length - 1];
		console.log(menu);
		if (menu === 'all')
			setMenu('Total User');
		else if (menu === 'user')
			setMenu('Customer');
		else if (menu === 'store')
			setMenu('Store');
		else if (menu === 'florist')
			setMenu('Florist');
		else if (menu === 'seceder')
			setMenu('Seceder');

		getUserList();
		getOwnerList();

		getUserData();

	}, []);

	const getUserData = async () => {
        
	}

	const getUserList = async () => {
        let list = await getList('Customer', 'all');
        setCustomer(list)
	}

	const getOwnerList = async () => {
        let list = await getList('Owner', 'all');
        console.log(list)
        setOwner(list)
	}

	return (
			<Container maxW={'container.xl'}>
				<VStack width={"100%"} p={{base: 0, md: 4}}>
					<Stack direction={{base:'column', md:'row'}} width={"100%"}>
						<Card width={{base:'100%', md:"50%"}} p={2}>
							<VStack>
								<HStack width={'100%'} justifyContent={'space-between'}>
									<CardHeader width={'100%'} fontSize={'1.2rem'} fontWeight={'bold'}>{menu}</CardHeader>
									<Select>
										<option>Week</option>
										<option>Month</option>
										<option>Year</option>
									</Select>
								</HStack>
								<Box width={'100%'} height={{base: 200, md: 300}} overflow={'auto'}>
                                <ResponsiveContainer >
									<LineChart data={dayData}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="name" />
										<YAxis />
										{/* <Tooltip /> */}
										<Line dataKey="purchase" fill="#8c8c8c" stroke="#8c8c8c" type="monotone" />
										<Line dataKey="sales" fill="#da4359" stroke="#da4359" strokeWidth={2} type="monotone" />
									</LineChart>
                                   </ResponsiveContainer>
								</Box>
							</VStack>

						</Card>
						<Card width={{base:'100%', md:"50%"}} p={4}>
							<CardHeader width={'100%'} fontSize={'1.2rem'} fontWeight={'bold'}>Quick Stats</CardHeader>

							<SimpleGrid columns={2} spacing={4}>
								{allUsersData.map((value, index) => (
									<Box border={'1px solid #d9d9d9'} width={'100%'} height='100%' borderRadius={'lg'}>
										<VStack height={'100%'} spacing={-2} p={4}>
											<VStack width={'100%'} spacing={0} alignItems={'flex-start'}>
												<Text fontSize={'1.4rem'} fontWeight={'bold'}>{value.title}</Text>
												<Text fontSize={'0.8rem'}>{value.subtitle}</Text>
											</VStack>
											<VStack width={'100%'} spacing={0} alignItems={'flex-end'}>
												<Text fontSize={'1.4rem'} fontWeight={'bold'}>{value.number}</Text>
												<Text color={value.increase.at(0) === "+" ? "blue.400" : "red.400"}>{value.increase}</Text>
											</VStack>
										</VStack>

									</Box>
								))}
							</SimpleGrid>

						</Card>
					</Stack>
					<Stack direction={{base:'column', md:'row'}} width={"100%"}>
						<Card width={{base:'100%', md: "50%"}} p={2}>
							<CardHeader width={'100%'} fontSize={'1.2rem'} fontWeight={'bold'}>Gender Group</CardHeader>
							<Box>
								<PieChart width={400} height={400}>
									<Pie
										data={genderData}
										cx={200}
										cy={180}
										innerRadius={100}
										outerRadius={140}
										fill="#8884d8"
										paddingAngle={0}
										dataKey="value"
									>
										{genderData.map((entry, index) => (
											<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
										))}
									</Pie>
									<Tooltip />
								</PieChart>
							</Box>

						</Card>
						<Card width={{base: '100%', md: "50%"}} p={2}>
							<CardHeader width={'100%'} fontSize={'1.2rem'} fontWeight={'bold'}>Age Group</CardHeader>

                            <Box width={'100%'} height={{base: 200, md: 300}} overflow={'auto'}>
                                <ResponsiveContainer >
								<BarChart width={580} height={400} data={ageData}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name" />
									<YAxis />
									{/* <Tooltip /> */}
									<Bar dataKey="value" fill="#C1DAFF" />
								</BarChart>
                                </ResponsiveContainer >
							</Box>

						</Card>
					</Stack>
				</VStack>

                <TableContainer>
  <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>등급</Th>
        <Th>이름</Th>
        <Th>닉네임</Th>
        <Th>메일</Th>
        {/* <Th>주소</Th> */}
        <Th>번호</Th>
        {/* <Th>접속일</Th> */}
        <Th>가입일</Th>
      </Tr>
    </Thead>
    <Tbody>
        {(menu ==='Customer') && customer.map((value, index) => (
            <Tr key={index}>
                <Td>{value.grade}</Td>
                <Td>{value.name}</Td>
                <Td>{value.nickname}</Td>
                <Td>{value.email}</Td>
                {/* <Td>{value.address}{value.detail_address}</Td> */}
                <Td>{value.number}</Td>
                {/* <Td>{value.t_access}</Td> */}
                <Td>{getDate(value.date)}</Td>
            </Tr>
        ))}
                {(menu ==='Store' || menu ==='Florist' ) && owner.map((value, index) => (
            <Tr key={index}>
                <Td>{value.grade}</Td>
                <Td>{value.name}</Td>
                <Td>{value.nickname}</Td>
                <Td>{value.email}</Td>
                {/* <Td>{value.address}{value.detail_address}</Td> */}
                <Td>{value.number}</Td>
                {/* <Td>{value.t_access}</Td> */}
                <Td>{getDate(new Date())}</Td>
            </Tr>
        ))}
    </Tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>
</TableContainer>

			</Container>
	)
}