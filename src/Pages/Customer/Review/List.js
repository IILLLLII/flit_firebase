import { Avatar, Box, Button, ButtonGroup, Flex, HStack, Image, Stack, StackDivider, Text } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react'
import MobileStatus from '../../../Components/MobileStatus';
import { fontColor } from '../../../Style/Typograhy';
import { deleteDocument, formattedAmount, getCustomer, getDate, getDocument, getOrder, getOwner, getReview, getReviewList } from '../../../DB/function';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';

const ReviewList = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0)
  const [productList, setProductList] = useState([])
  const [review, setReview] = useState({})
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    getPossibleReviewList();
  }, []);

  const getPossibleReviewList = async () => {
    let orderList = await getOrder(localStorage.getItem('customerToken')); // 기간을 정해야함
    let productList = []
    orderList.map(async (value) => {
      if (!value.isReview) {
        let product = await getDocument('Product', value.productId)
        let owner = await getOwner(value.ownerId)
        productList.push({ ...product, owner: owner, orderId: value.id })
        setProductList(productList)
      }
      else {
        let product = await getDocument('Product', value.productId)
        let review = await getReviewList(localStorage.getItem('customerToken'))
        let customer = await getCustomer(localStorage.getItem('customerToken'))
        console.log({ review: review, customer: customer, product: product })
        setReview({ review: review, customer: customer, product: product })
      }
    })
  }

  const deleteReview = async(reviewId) => {
    if(window.confirm('리뷰를 삭제하시겠습니까?'))
    {
      await deleteDocument('Review', reviewId)
      getPossibleReviewList();
      // forceUpdate()
    }
  }

  return (
    <Flex bgColor={'white'} flexDirection={'column'} w="100%">
              <Stack>
      <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>

        <MobileStatus title={'리뷰 관리'} isHome={true} />
      </Flex>
      <Flex w='100%' bgColor={'white'} left={0} top={'49px'} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
      <HStack w='100%' justifyContent={'center'} borderBottom={'1px solid #d9d9d9'}>
          <Button border={'none'} w='25%' onClick={() => setTab(0)} variant={'unstyled'} color={tab == 0 ? `${fontColor.primary}` : 'black'} borderRadius={0} borderBottom={tab == 0 ? `5px solid ${fontColor.primary}` : 'none'}>리뷰 작성</Button>
          <Button border={'none'} w='25%' onClick={() => setTab(1)} variant={'unstyled'} color={tab == 1 ? `${fontColor.primary}` : 'black'} borderRadius={0} borderBottom={tab == 1 ? `5px solid ${fontColor.primary}` : 'none'}>작성한 리뷰</Button>
        </HStack>
        </Flex>
      </Stack>

      <Stack mt={'100px'} mb={'80px'} p={2}>

        {tab == 0 && productList.map((value) => (
          <HStack p={2}>

            <Image src={value.thumbnail_image} boxSize={'120px'} />
            <Stack w='100%' gap={0}>
              <Text fontWeight={'bold'}>{value?.product_name}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>{value?.owner.name}</Text>
              <HStack>
                <Text color="#da4359" fontWeight={'bold'}>{value.discount.set == "설정함" ? `${value.discount.value}${value.discount.unit} ` : ""}</Text>
                <Text>{value.discount.set == "설정함" ? value.discount.unit == "%" ? `${formattedAmount(value.sales_price - value.sales_price * 0.01 * value.discount.value)}원` : `${formattedAmount(value.sales_price - value.discount.value)}원` : ""}</Text>

              </HStack>

              <Button onClick={() => navigate('/customer/review/write', { state: value.id })}>리뷰쓰기</Button>
            </Stack>

          </HStack>
        ))}


        {tab == 1 &&
          <Stack divider={<StackDivider />}>
            {review?.review?.map((value, index) => (
              <Stack p={2}>
                <HStack onClick={() => navigate(`/customer/product/view/${review?.product.id}`, { state: review?.product })} justifyContent={'space-between'} w='100%' bgColor={'gray.100'} borderRadius={'lg'} overflow={'hidden'}>
                  <HStack>
                    <Image boxSize={'40px'} src={review?.product.thumbnail_image} />
                    <Text fontWeight={'bold'}>{review?.product.product_name}</Text>
                  </HStack>
                  <ChevronRightIcon mr={2} />
                </HStack>
                <HStack justifyContent={'space-between'}>
                  <HStack>
                    <Avatar src={review?.customer.profile_image} />
                    <Box>
                      <Text>{review?.customer.nickname}</Text>
                      <Text color={'gray.500'} fontSize={'sm'}>{getDate(value.timestamp)}</Text>
                    </Box>
                  </HStack>
                  <ButtonGroup size={'xs'}>
                    <Button onClick={() => navigate('/customer/review/write', {state : review?.review[index].id})}>수정</Button>
                    <Button onClick={() => deleteReview(review?.review[index].id)}>삭제</Button>
                  </ButtonGroup>
                </HStack>

                <HStack w='100%' overflowX={'scroll'} className="scroll">
                  {value.photoURL.map((value) => (
                    <Image src={value} boxSize={'80px'} />

                  ))}
                </HStack>
                <Text>{value.content}</Text>
              </Stack>
            ))}

          </Stack>
        }
      </Stack>
    </Flex>
  )
}

export default ReviewList;