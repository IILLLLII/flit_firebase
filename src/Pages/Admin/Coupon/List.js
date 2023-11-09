import { Box, Button, Card, CardBody, CardHeader, Center, Checkbox, Container, Flex, Grid, GridItem, HStack, IconButton, Image, Select, StackDivider, Text, VStack, Wrap } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { couponList } from "../../dummy"
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  getFirestore,
  orderBy,
  query,
  where,
  serverTimestamp,
  limit,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db, storage } from '../../../DB/firebase-config'
import { getList } from "../../../DB/function";

export default function CouponList() {
  const navigate = useNavigate()
  const [type, setType] = useState("customer")
  const [custom, setCustom] = useState(0)
  const [list, setList] = useState(0)
  const [grade, setGrade] = useState("All")
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCoupon, setCurrentCoupon] = useState(-1);
  const [couponList, setCouponList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const cutomerGrade = ['Green', 'Yellow', 'Black', 'Gold', 'VIP']
  const ownerGrade = ['Flinney', 'Fliter', 'Premium', 'VIP']

  // const couponData = [
  //   {
  //     checked: false,
  //     grade: "Green",
  //     name: "박수정",
  //     nickname: "krystal",
  //     number: "010-5603-9973",
  //   },
  //   {
  //     checked: false,
  //     grade: "Green",
  //     name: "박수정",
  //     nickname: "krystal",
  //     number: "010-5603-9973",
  //   },
  //   {
  //     checked: false,
  //     grade: "Green",
  //     name: "박수정",
  //     nickname: "krystal",
  //     number: "010-5603-9973",
  //   },
  // ]


  useEffect(() => {
    getCouponList("customer")
    getUserList('all');
  }, []);

  const changeValue = (index, check) => {

    if (index === -1) {
      for (var i = 0; i < userList.length; i++) {
        userList[i].checked = check;
      }
    }

    else {
      userList[index].checked = check;
    }

    console.log(index, check)
    console.log(userList)


    forceUpdate();
  }

  const getCouponList = async (type) => {
    setType(type)
    setGrade("All")
    const q = query(collection(db, "Coupon"), where(type, "==", true));
    const querySnapshot = await getDocs(q);
    var coupon = []
    querySnapshot.forEach((doc) => {
      coupon = [...coupon, { ...doc.data(), id: doc.id, checked: false }]
      // console.log(doc.data())
    })
    setCouponList(coupon)
  }

	const getUserList = async () => {
    let list = await getList('Customer', 'all');
    console.log(list)
    setUserList(list)
}

  const deleteCoupon = async (key) => {
    console.log(key)
    const couponDoc = doc(db, "Coupon", key);
    const res = await deleteDoc(couponDoc);
    getCouponList(type)
  }

  return (
      <Container maxW={'container.xl'} p={2}>
        <VStack>
          <VStack w={"100%"} alignItems={'flex-start'}>
            <HStack w={'100%'}>
              {/* <Text w={100}>고객 분류</Text> */}
              <Button onClick={() => getCouponList("customer")} colorScheme={type === "customer" ? "pink" : "gray"}>Customer</Button>
              <Button onClick={() => getCouponList("store")} colorScheme={type === "store" ? "pink" : "gray"}>Store</Button>
              <Button onClick={() => getCouponList("florist")} colorScheme={type === "florist" ? "pink" : "gray"}>Florist</Button>
            </HStack>
            {/* <HStack w={'100%'}>
                  <Text w={100}>영업 형태</Text>
                  <Button>개인</Button>
                  <Button>기업</Button>
                </HStack> */}
          </VStack>
          <Card w={'100%'} p={1}>
            <HStack pr={4}>
              <CardHeader width={'100%'} fontSize={'1.2rem'} fontWeight={'bold'}>쿠폰 관리</CardHeader>
              <Button leftIcon={<MdAdd />} onClick={() => navigate('/admin/coupon/register', { state: { mode: "create" } })}> 쿠폰 등록</Button>
            </HStack>

            <CardBody>
              <Wrap>
                {couponList.map((value, index) => (
                  <GridItem onMouseOver={() => setCurrentCoupon(index)}>
                    <Flex position="relative" alignItems="flex-start" justifyContent={'flex-end'} >
                      <Box w={[400]} h={160} borderRadius={"lg"}>
                        <Image src={value.imageUrl} width={400} height={160} />
                      </Box>
                      <IconButton
                        size={['sm']}
                        m={[2]}
                        position="absolute"
                        fontSize={['1rem']}
                        display={currentCoupon === index ? 'block' : 'none'}
                        mr={'44px'}
                        icon={<Center><MdEdit size={20} /></Center>}
                        onClick={() => navigate('/admin/coupon/register', { state: { mode: "edit", docId: value.id } })}
                      />
                      <IconButton
                        size={['sm']}
                        m={[2]}
                        position="absolute"
                        fontSize={['1rem']}
                        display={currentCoupon === index ? 'block' : 'none'}
                        icon={<Center><MdDelete size={20} /></Center>}
                        onClick={() => deleteCoupon(value.id)}
                      />
                    </Flex>
                  </GridItem>
                ))}
              </Wrap>

              {/* <Center mt={8} mb={2}>
                <Button mr={3}>취소</Button>
                <Button colorScheme={'pink'}>쿠폰발송</Button>
              </Center> */}
            </CardBody>

          </Card>

          <Card w={'100%'} p={2}>
            <CardBody>
              <VStack divider={<StackDivider borderColor={'#d9d9d9'}/>}>
                <HStack w={'100%'} marginBottom={-2}>
                  {/* <Text w={100}>조회 방식</Text> */}
                  <Button w="50%" onClick={() => setList(0)} color={list === 0? "#da4359" : "#8c8c8c"} backgroundColor="white" _hover={{backgroundColor:'white'}}>쿠폰발송하기</Button>
                  <Button w="50%" onClick={() => setList(1)} color={list === 1? "#da4359" : "#8c8c8c"} backgroundColor="white" _hover={{backgroundColor:'white'}}>쿠폰발송내역</Button>
                </HStack>
                <HStack w={'100%'}>
                  <Text w={100}>고객 등급</Text>
                  <Button onClick={() => getUserList("All")} colorScheme={grade === "All" ? "pink" : "gray"}>All</Button>
                  {
                    type === "customer" ?
                      <>
                        {cutomerGrade.map((value, index) => (
                          <Button onClick={() => getUserList(value)} colorScheme={grade === value ? "pink" : "gray"}>{value}</Button>
                        ))}
                      </> : <>
                        {ownerGrade.map((value, index) => (
                          <Button onClick={() => getUserList(value)} colorScheme={grade === value ? "pink" : "gray"}>{value}</Button>
                        ))}
                      </>
                  }
                </HStack>
              </VStack>

              <HStack alignItems={'flex-start'}>
                <VStack p={2} divider={<StackDivider borderColor={'#d9d9d9'}/>} width={"50%"}>
                  <HStack fontWeight={'bold'} textAlign={'center'} width={'100%'} justifyContent={'space-around'} p={2} borderTop={'1px soloid #d9d9d9'}>
                    <Checkbox colorScheme="pink" onChange={(e) => changeValue(-1, e.target.checked)} />
                    <Text width="25%">등급</Text>
                    <Text width="25%">이름</Text>
                    <Text width="25%">닉네임</Text>
                    <Text width="25%">핸드폰</Text>
                  </HStack>
                  {userList?.map((value, index) => (
                    <HStack width={'100%'} textAlign={['flex-start', 'center']} justifyContent={'space-around'} p={2}>
                      <Checkbox colorScheme="pink" onChange={(e) => { changeValue(index, e.target.checked) }} />
                      <Text width="25%" fontSize={'sm'}>{value?.grade}</Text>
                      <Text width="25%" fontSize={'sm'}>{value?.name}</Text>
                      <Text width="25%" fontSize={'sm'}>{value?.nickname}</Text>
                      <Text width="25%" fontSize={'sm'}>{value ?
                      (value?.number.replaceAll('-', '')).slice(0, 3) + "-" + 
                      (value?.number.replaceAll('-', '')).slice(3, 7) + "-" +
                      (value?.number.replaceAll('-', '')).slice(7, 11) : ""
                      }</Text>
                    </HStack>
                  ))}
                </VStack>

                <VStack p={2} divider={<StackDivider borderColor={'#d9d9d9'}/>} width={"50%"}>
                  <HStack fontWeight={'bold'} textAlign={'center'} width={'100%'} justifyContent={'space-around'} p={2} borderTop={'1px soloid #d9d9d9'}>
                    <Checkbox colorScheme="pink" />
                    <Text width="50%">쿠폰이름</Text>
                    <Text width="25%">할인정보</Text>
                    <Text width="25%">유효기간</Text>
                  </HStack>
                  {couponList.map((value, index) => (
                    <HStack width={'100%'} textAlign={['flex-start', 'center']} justifyContent={'space-around'} p={2}>
                      <Checkbox colorScheme="pink" />
                      <Text width="50%">{value.couponName}</Text>
                      <Text width="25%">{value.discountValue}{value.discountType}</Text>
                      <Text width="25%">{value.expireDate}</Text>
                    </HStack>
                  ))}
                </VStack>
              </HStack>

              <Center m={4}>
                <Button colorScheme="pink">발송하기</Button>
              </Center>
            </CardBody>
          </Card>
        </VStack>

      </Container>
  )
}