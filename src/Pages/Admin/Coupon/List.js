import { Box, Button, Card, CardBody, CardHeader, Center, Checkbox, Container, Flex, Grid, GridItem, HStack, IconButton, Image, Select, StackDivider, Text, VStack, Wrap } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
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
    getUserList("All")
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

  const getUserList = async (grade) => {
    setGrade(grade)
    console.log(grade)
    var q;
    if(type === "customer")
    {
      if(grade === "All")
        q = query(collection(db, "Customer"));
      else
        q = query(collection(db, "Customer"), where("userInfo.grade", "==", grade));
    }
    
    const querySnapshot = await getDocs(q);
    var user = []
    querySnapshot.forEach((doc) => {
      user = [...user, { ...doc.data(), id: doc.id }]
      console.log(doc.data())
    })
    setUserList(user)
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

{/* 쿠폰 */}
        </VStack>

      </Container>
  )
}