import { AspectRatio, Badge, Box, Center, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { formattedAmount, getDate, parseDate, updateData } from "../DB/function"
import { Title_lg, Title_sm } from "../Style/Typograhy"
import { useNavigate } from "react-router-dom"
import { ChatIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { isAdmin } from "../App";
import { serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function PortfolioItem({ data, state}) {
  const navigate = useNavigate();
  const [goods, setGoods] = useState(false)

  useEffect(() => {
    setGoods(data.goods.includes(localStorage.getItem('customerToken')))
  }, [])

  const addGoods =async() => {
    if(goods)
    {
        let goods = data.goods.filter((element) => element !== localStorage.getItem('customerToken'))
        await updateData("Portfolio", data.id, {...data, goods: goods}) 
        console.log(goods)
    }
    else
    {
        let goods = data.goods;
        goods.push(localStorage.getItem('customerToken'))
        await updateData("Portfolio", data.id, {...data, goods: goods})
        console.log(goods)
    }

    setGoods(!goods)

  }

  return (
    <Box p={2}>
      <Stack w="100%" direction={'column'} borderRadius='lg'>
      <AspectRatio  width={'100%'} ratio={1}>
        <Box>
        <AspectRatio  width={'100%'} ratio={1}>
          <Image onClick={() => navigate('/customer/portfolio/view', {state: state})} objectFit={'cover'} src={data.thumbnail_image} borderRadius={'lg'} />
          </AspectRatio>
          <Center bgColor={'transparent'} position={'absolute'} w='30px' h="30px" bottom={0} right={0}>
          {<FaHeart onClick={() => addGoods()} color={goods ? "#da4359" : "white"} opacity={goods ? 1 : 0.5} size={'24px'}/>}
          </Center>
</Box>
        </AspectRatio>
      </Stack>
    </Box>
  )
}
