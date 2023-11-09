import { Button, Flex, HStack, IconButton, Image, Stack, Text, Textarea, border } from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import MobileStatus from '../../../Components/MobileStatus'
import { useLocation, useNavigate } from 'react-router-dom'
import { addDocument, formattedAmount, getDocument, getReview, updateData } from '../../../DB/function'
import { FiCamera } from 'react-icons/fi'
import ImageUploader from '../../../Components/ImageUploader'
import { Title_lg } from '../../../Style/Typograhy'
import { serverTimestamp } from 'firebase/firestore'

const ReviewWrite = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [reviewImage, setReviewImage] = useState([])
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [reviewContent, setContent] = useState('')
    const [reviewData, setReviewData] = useState([])
    const [product, setProductData] = useState({})
    const [owner, setOwner] = useState({})
    const [isEditMode, setEditMode] = useState(false)

    useEffect(() => {
        getReviewData();
    }, [])

    const getReviewData = async() => {
        let reviewData = await getReview(location.state)

        console.log(location.state, reviewData)
        if(reviewData.length > 0)
        {
            let product = await getDocument('Product', reviewData.productId)
            let owner = await getDocument('Owner', reviewData.ownerId)
            setProductData(product)
            setOwner(owner)
            console.log(product)
            setReviewData(reviewData)
            setReviewImage(reviewData.photoURL)
            setEditMode(true)
        }
        else
        {
            let product = await getDocument('Product', location.state)
            let owner = await getDocument('Owner', product.ownerId)
            setProductData(product)
            setOwner(owner)
            setReviewData({
                content: '',
                customerId: localStorage.getItem('customerToken'),
                ownerId: product.ownerId,
                photoURL: reviewImage,
                productId: location.state,
                reply: [],
                timestamp: serverTimestamp()
            })
            setEditMode(false)
        }
    }

    const submitReview = async () => {
        if(isEditMode)
        {
            if (window.confirm('리뷰를 수정하시겠습니까?')) {
                console.log(reviewData)
                await updateData('Review', reviewData.id, {
                    content: reviewContent,
                    customerId: localStorage.getItem('customerToken'),
                    ownerId: reviewData.ownerId,
                    photoURL: reviewImage,
                    productId: reviewData.productId,
                    reply: reviewData.reply,
                    timestamp: serverTimestamp()
                })
    
                // let orderData = await getDocument('Order', location.state.orderId)
                // orderData.isReview = true;
    
                // await updateData('Order', location.state.orderId, orderData)
    
                // console.log(orderData)
                navigate(-1)
            }
        }
        else
        {
            if (window.confirm('리뷰를 등록하시겠습니까?')) {
                await addDocument('Review', {
                    content: reviewContent,
                    customerId: localStorage.getItem('customerToken'),
                    ownerId: reviewData.ownerId,
                    photoURL: reviewImage,
                    productId: reviewData.productId,
                    reply: [],
                    timestamp: serverTimestamp()
                })
    
                // let orderData = await getDocument('Order', location.state.orderId)
                // orderData.isReview = true;
    
                // await updateData('Order', location.state.orderId, orderData)
    
                // console.log(orderData)
                navigate(-1)
            }
        }

    }

    return (
        <Flex bgColor={'white'} flexDirection={'column'} w="100%">
            <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
                <MobileStatus title={'리뷰 작성'} />
            </Flex>

            <Stack mt={'50px'} mb={'80px'} p={2}>
                <HStack p={2} borderBottom={'1px solid #d9d9d9'}>

                    <Image src={product?.thumbnail_image} boxSize={'80px'} />
                    <Stack w='100%' gap={0}>

                        <Text fontWeight={'bold'}>{product?.product_name}</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>{owner?.name}</Text>
                        <HStack justifyContent={'flex-end'}>

                            <Button onClick={() => navigate(-1)}>취소</Button>
                            <Button onClick={() => submitReview()} colorScheme='red'>{isEditMode ? '수정' : '등록'}</Button>
                        </HStack>
                    </Stack>
                </HStack>

                <Flex>

                    <Textarea borderColor={"#d9d9d9"} defaultValue={reviewData.content} onChange={(e) => setContent(e.target.value)} border={'none'} focusBorderColor={'transparent'} minH={'60vh'} />
                </Flex>
            </Stack>

            <HStack overflowX={'scroll'} className='scroll' borderTop={'1px solid #d9d9d9'} position={'fixed'} w={'100%'} bottom={0} p={"10px"}>
                {reviewImage.map((val, index) => (
                    <ImageUploader src={val} setUrl={(value) => {
                        if (value === null) {
                            let tempList = reviewImage;
                            console.log('delete!', index, tempList)
                            tempList.splice(index, 1)
                            setReviewImage(tempList)
                        }
                        else {
                            console.log('add!', index)
                            setReviewImage([...reviewImage, value])
                        }
                        forceUpdate();
                    }} w="80px" h="80px" />
                ))}
                {reviewImage.length < 5 &&
                    <ImageUploader setUrl={(value) => setReviewImage([...reviewImage, value])} w="80px" h="80px" />
                }
                {/* <IconButton icon={<FiCamera/>}/> */}
            </HStack>
        </Flex>
    )
}

export default ReviewWrite