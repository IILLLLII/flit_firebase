import { Badge, Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { formattedAmount } from "../DB/function"
import { Title_lg, Title_sm } from "../Style/Typograhy"
import { useNavigate } from "react-router-dom"
import { ChatIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ data, state }) {
  const navigate = useNavigate();
  return (
    <Box width={'32%'} opacity={state == '판매중' || data.saletime.set == "설정안함" ? 1 : 0.5} onClick={() => navigate('/product/view/' + data.id, { state: data })}>
      <Stack w="100%" direction={'column'} borderWidth='1px' borderRadius='lg'>
        <Image src={data.thumbnail_image} borderTopRadius={'lg'} />

        <Box p={2}>
          <Stack direction={'column'}>
            <HStack alignItems={'center'} mb={-1}>
              <Badge colorScheme={state == "판매중" ? "green" : "gray"}>{state}</Badge>
              <Text {...Title_sm}>{data.id.slice(0, 10)}</Text>
            </HStack>
            <Text fontSize={'md'} mb={-1}>{data.product_name}</Text>
            <Text fontSize={'xs'}>{data.saletime.set == "설정안함" ? "상시판매" : data.saletime.start + "~" + data.saletime.end}</Text>
            <Text textDecoration={'line-through'} color='#8c8c8c' mb={-2}>{formattedAmount(data.sales_price)}</Text>
            <HStack>
              <Text fontWeight={'900'} color='#da4359'>{data.discount.value}{data.discount.unit}</Text>
              <Text {...Title_lg} mb={0}>{data.discount.unit == "%" ? formattedAmount(data.sales_price - data.sales_price * 0.01 * data.discount.value) : formattedAmount(data.sales_price - data.discount.value)}</Text>
            </HStack>

            <HStack>
              <ChatIcon w={'10px'} /> <Text fontSize={'xs'}>{data.review.length} </Text> <FaHeart size={'12px'} /> <Text fontSize={'xs'}>{data.goods.length}</Text>

              <FiShoppingCart size={'12px'} /><Text fontSize={'xs'}>{data.sales_count} / {data.count}</Text>
            </HStack>

          </Stack>

        </Box>

      </Stack>
    </Box>
  )
}
