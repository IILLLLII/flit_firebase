import { AspectRatio, Badge, Box, Center, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { formattedAmount, getDate, getDocument, getShop, parseDate, updateData } from "../DB/function"
import { Title_lg, Title_sm } from "../Style/Typograhy"
import { useNavigate } from "react-router-dom"
import { ChatIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { isAdmin } from "../App";
import { serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function ProductHorizontal({ data, state}) {
  const navigate = useNavigate();
  const [goods, setGoods] = useState(false)
  const [shopData, setShopData] = useState({})

  useEffect(() => {
    setGoods(data.goods.includes(localStorage.getItem('customerToken')))
    setShop();
  }, [])

  const setShop = async() => {
    let shop = await getShop(data.ownerId)
    setShopData(shop)
    console.log(shop)
  }

  const addGoods =async() => {
    if(goods)
    {
        let goods = data.goods.filter((element) => element !== localStorage.getItem('customerToken'))
        await updateData("Product", data.id, {...data, goods: goods}) 
        console.log(goods)
    }
    else
    {
        let goods = data.goods;
        goods.push(localStorage.getItem('customerToken'))
        await updateData("Product", data.id, {...data, goods: goods})
        console.log(goods)
    }

    setGoods(!goods)

  }

  return (
    <Box>
      <Stack w="100%" direction={'row'} borderRadius='lg'>
      <AspectRatio  width={'50%'} ratio={1}>
        <Box>
        <AspectRatio  width={'100%'} ratio={1}>
          <Image onClick={() => navigate('/customer/product/view/' + data.id, { state: data })} objectFit={'cover'} src={data.thumbnail_image} borderRadius={'lg'} />
          </AspectRatio>
</Box>
        </AspectRatio>

        <Box w={'100%'} p={2} onClick={() => navigate('/customer/product/view/' + data.id, { state: data })}>
          <Stack direction={'column'}>
            <HStack justifyContent={'space-between'}>
            <Text>{shopData.shopname}</Text>
          {<FaHeart onClick={() => addGoods()} color={goods ? "#da4359" : "gray"} opacity={goods ? 1 : 0.3} size={'30px'}/>}
            </HStack>
            <HStack>
            <Text fontSize={'sm'} whiteSpace={'nowrap'} style={{textSizeAdjust: '100%'}} overflowX={'clip'}>{data.product_name}</Text>
            {parseDate(getDate(serverTimestamp())).getDate() - parseDate(getDate(data.regist_date)).getDate() < 7 && <Badge colorScheme="yellow">new</Badge>}
            {data.sales_count > 0 && <Badge colorScheme="red">Hot</Badge>}
            </HStack>
            <Text fontSize={'xs'} textDecoration={'line-through'} color='#8c8c8c' mb={-1}>{formattedAmount(data.sales_price)}원</Text>
            <HStack>
              <Text fontWeight={'900'} color='#da4359' fontSize={'smaller'}>{data.discount.value}{data.discount.unit}</Text>
              <Text {...Title_sm} mb={0}>{data.discount.unit == "%" ? formattedAmount(data.sales_price - data.sales_price * 0.01 * data.discount.value) : formattedAmount(data.sales_price - data.discount.value)}원</Text>
            </HStack>
          </Stack>

        </Box>

      </Stack>
    </Box>
  )
}
