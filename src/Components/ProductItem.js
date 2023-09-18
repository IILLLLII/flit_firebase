import { Badge, Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { formattedAmount, getDate, parseDate } from "../DB/function"
import { Title_lg, Title_sm } from "../Style/Typograhy"
import { useNavigate } from "react-router-dom"
import { ChatIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { isAdmin } from "../App";
import { serverTimestamp } from "firebase/firestore";

export default function ProductItem({ data, state }) {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate('/customer/product/view/' + data.id, { state: data })}>
      <Stack w="100%" direction={'column'} borderRadius='lg'>
        <Image src={data.thumbnail_image} borderRadius={'lg'} />

        <Box p={2}>
          <Stack direction={'column'}>
            <HStack>
            <Text fontSize={'sm'} whiteSpace={'nowrap'} style={{textSizeAdjust: '100%'}} overflowX={'clip'}>{data.product_name}</Text>
            {parseDate(getDate(serverTimestamp())).getDate() - parseDate(getDate(data.regist_date)).getDate() < 7 && <Badge colorScheme="yellow">new</Badge>}
            {data.sales_count > 0 && <Badge colorScheme="red">Hot</Badge>}
            </HStack>
            <Text fontSize={'xs'} textDecoration={'line-through'} color='#8c8c8c' mb={-2}>{formattedAmount(data.sales_price)}원</Text>
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
