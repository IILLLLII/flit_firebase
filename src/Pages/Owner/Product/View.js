import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Badge, Box, Button, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, StackDivider, Text, Textarea } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import ImageSlider from "../../../Components/ImageSlider";
import { deleteDocument, formattedAmount, getCustomer, getDate, getOwner, getReview, parseDate, updateData } from "../../../DB/function";
import { Title_2xl, Title_lg, Title_sm } from "../../../Style/Typograhy";
import { FaHeart } from "react-icons/fa";
import { ChatIcon, ChevronUpIcon } from "@chakra-ui/icons";
import ConfirmButton from "../../../Components/ConfirmButton";
import { isAdmin } from "../../../App";
import { serverTimestamp } from "firebase/firestore";

const ProductView = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [product, setProduct] = useState()
    const [goods, setGoods] = useState([])
    const [reviews, setReviews] = useState(null)
    const [openGoods, setOpenGoods] = useState(false)
    const [openReviews, setOpenReviews] = useState(false)
    const [owner, setOwner] = useState({})
    const [newReply, setNewReply] = useState('')
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [editReplyIndex, setEditReplyIndex] = useState(-1);

    useEffect(() => {
        if (location.state) {
            setProduct(location.state)
            getGoods();
            getReviews();
        }
    }, []);

    const getReviews = async () => {
        let reviewList = await getReview(location.state.id)

        let reviewUserList = [];
        reviewList.map(async (value) => {
            // console.log(value.customerId)
            let customer = await getCustomer(value.customerId)
            // console.log(customer)
            let owner = await getOwner(value.ownerId)
            setOwner(owner)
            reviewUserList.push({ ...value, userInfo: customer, openReply: false })
        })
        setReviews(reviewUserList)

        // console.log(reviewUserList)

    }

    const getGoods = () => {
        let goodsUserList = [];

        location.state.goods.map(async (value) => {
            let customer = await getCustomer(value)
            goodsUserList.push(customer)
        })

        console.log(goodsUserList)
        setGoods(goodsUserList)

        // setOpenGoods(true)
    }

    const setOpenReply = (index, open) => {
        reviews[index].openReply = open
        setReviews(reviews)
        console.log(reviews)
        forceUpdate();
    }

    const deleteReply = async(reviewIndex, replyIndex) => {
        let replyList = reviews[reviewIndex].reply
        replyList.splice(replyIndex, 1);
        console.log(replyList)

        await updateData('Review', reviews[reviewIndex].id, {
            customerId: reviews[reviewIndex].customerId,
            ownerId: reviews[reviewIndex].ownerId,
            content: reviews[reviewIndex].content,
            photoURL: reviews[reviewIndex].photoURL,
            productId: reviews[reviewIndex].productId,
            reply: replyList,
            timestamp: reviews[reviewIndex].timestamp
        })

        // getReviews();
        forceUpdate();
    }

    const submitReply = async (isEdit, index) => {
        if (isEdit) {
            let newReplyData = { content: newReply, timestamp: new Date }

            let replyList = reviews[index].reply
            replyList[editReplyIndex] = newReplyData;
            // console.log(replyList)
            // console.log({
            //     customerId: reviews[index].customerId,
            //     ownerId: reviews[index].ownerId,
            //     content: reviews[index].content,
            //     photoURL: reviews[index].photoURL,
            //     productId: reviews[index].productId,
            //     reply: replyList,
            //     timestamp: reviews[index].timestamp
            // }, reviews[index].id)

            await updateData('Review', reviews[index].id, {
                customerId: reviews[index].customerId,
                ownerId: reviews[index].ownerId,
                content: reviews[index].content,
                photoURL: reviews[index].photoURL,
                productId: reviews[index].productId,
                reply: replyList,
                timestamp: reviews[index].timestamp
            })

            setEditReplyIndex(-1)
            forceUpdate();
        }
        else {
            await updateData('Review', reviews[index].id, {
                customerId: reviews[index].customerId,
                ownerId: reviews[index].ownerId,
                content: reviews[index].content,
                photoURL: reviews[index].photoURL,
                productId: reviews[index].productId,
                reply: [...reviews[index].reply, { content: newReply, timestamp: new Date }],
                timestamp: reviews[index].timestamp
            })

        setOpenReply(index, false)
                    getReviews();
                    forceUpdate();
        }

    }

    return (
        <Box w='100%' minW={{ base: '100%', md: '1000px' }}>

            {product &&
                <Stack direction={{ base: 'column', md: 'row' }}>
                    <Box w={{ base: '100%', md: '500px' }}>
                        <ImageSlider images={product.product_image} />
                    </Box>
                    <Box w={'100%'} borderLeft={{ base: 'none', md: '1px solid #d9d9d9' }}>
                        <Stack direction={'column'} divider={<StackDivider />}>
                            <HStack justifyContent={'space-between'}>
                                <Text ml={2} {...Title_2xl}>상품정보</Text>
                                <HStack>
                                    <Button isLoading={reviews ? false : true} onClick={() => setOpenReviews(true)} leftIcon={<ChatIcon />} >리뷰 {reviews?.length}</Button>
                                    <Button onClick={() => setOpenGoods(true)} leftIcon={<FaHeart />}>관심 {product.goods.length}</Button>

                                </HStack>
                            </HStack>
                            <Box p={2}>
                                <Text mb={4} color={'#8c8c8c'}>{product.regist_date ? getDate(product.regist_date) : ''}</Text>
                                <Text whiteSpace={'pre-wrap'}>{product.comment}</Text>
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>검색필터</Text>
                                <HStack pb={4}>
                                    {
                                        product.tag.map((value) => (
                                            <Badge>{value}</Badge>
                                        ))
                                    }
                                </HStack>
                                <HStack >
                                    {
                                        product.color.map((value) => (
                                            <Box w={'20px'} h={'20px'} borderRadius={'md'} bgColor={value}></Box>
                                        ))
                                    }
                                </HStack>
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>배송형태</Text>
                                <HStack>
                                    {product.delivery.map((value) => (
                                        <Badge>{value}</Badge>
                                    ))}
                                </HStack>
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>상품 카테고리</Text>

                                <Text>{product.category1} {'>'} {product.category2} </Text>
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>상품명</Text>

                                <Text>{product.product_name}</Text>
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>판매가</Text>

                                <Text>{product.discount.set == "설정함" ? product.discount.unit == "%" ? `${formattedAmount(product.sales_price - product.sales_price * 0.01 * product.discount.value)}원` : `${formattedAmount(product.sales_price - product.discount.value)}원` : ""}</Text>
                                <HStack>
                                    <Text color="#da4359" fontWeight={'bold'}>{product.discount.set == "설정함" ? `${product.discount.value}${product.discount.unit} ` : ""}</Text>
                                    <Text color={product.discount.set == "설정함" ? '#8c8c8c' : 'black'} textDecoration={product.discount.set == "설정함" ? 'line-through' : 'none'}>{formattedAmount(product.sales_price)}원</Text>
                                </HStack>
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>포인트</Text>
                                {product.point.buy.set &&
                                    <HStack alignItems={'center'}>
                                        <Text>상품 구매시</Text>
                                        <Badge colorScheme="yellow">P</Badge>
                                        <Text>{product.point.buy.value}{product.point.buy.unit}</Text>
                                    </HStack>
                                }
                                {product.point.review.set &&
                                    <HStack alignItems={'center'}>
                                        <Text>리뷰 작성시</Text>
                                        <Badge colorScheme="yellow">P</Badge>
                                        <Text>{product.point.review.value}{product.point.review.unit}</Text>
                                    </HStack>
                                }
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>판매기간</Text>
                                {product.saletime && <Text>{product.saletime.set == "설정안함" ? "상시판매" : product.saletime.start + " ~ " + product.saletime.end}</Text>}
                            </Box>
                            <Box p={2}>
                                <Text {...Title_lg}>옵션설정</Text>
                                {product.option.item.map((value, index) => (
                                    <HStack>
                                        <Text>{index + 1}. </Text>
                                        <Text>{value.name}</Text>
                                        <Text>(+{formattedAmount(value.price)}원)</Text>
                                    </HStack>
                                ))}

                            </Box>
                            {!isAdmin &&
                                <HStack mt={6} justifyContent={'center'}>
                                    <Button onClick={() => navigate('/product/add', { state: product })}>수정하기</Button>
                                    <ConfirmButton collection={'Product'} type={'삭제'} data={product} />
                                    {/* <Button onClick={() => deleteProduct()}>삭제</Button> */}
                                </HStack>
                            }
                        </Stack>

                    </Box>
                </Stack>
            }

            <Modal isOpen={openGoods} onClose={() => setOpenGoods(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>관심</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mb={4}>
                        <Stack>
                            {goods && goods.map((value) => (
                                <HStack>
                                    <Avatar src={value.profile_image} />
                                    <Text>{value.nickname}</Text>
                                </HStack>
                            ))}
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Modal isOpen={openReviews} onClose={() => setOpenReviews(false)} size={'xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>리뷰</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mb={4}>
                        <Stack divider={<StackDivider />}>
                            {reviews && reviews.map((value, index) => (
                                <Stack>

                                    <HStack justifyContent={'space-between'} alignItems={'flex-end'}>
                                        <HStack>
                                            <Avatar src={value.userInfo.profile_image} />
                                            <Text>{value.userInfo.nickname}</Text>
                                        </HStack>
                                        <Text color={'gray.500'}>{getDate(value.timestamp)}</Text>
                                    </HStack>


                                    <HStack w='100%' overflowX={'scroll'} className="scroll">
                                        {value.photoURL.map((value) => (
                                            <Image src={value} boxSize={'150px'} />

                                        ))}
                                    </HStack>
                                    <Text>{value.content}</Text>
                                    <Accordion allowMultiple defaultIndex={parseInt(localStorage.getItem('reply')?.split(',')[0]) === index ? [parseInt(localStorage.getItem('reply')?.split(',')[1])] : []} onChange={(value) => localStorage.setItem('reply', `${index},${value}`)}>
                                        <AccordionItem border={'none'}>
                                            {({ isExpanded }) => (
                                                <>
                                                    <HStack w='100%'>
                                                        <HStack w='100%'>
                                                            <Button onClick={() => setOpenReply(index, true)} size={'xs'}>답글달기</Button>
                                                            <ChatIcon boxSize={'16px'} />
                                                            <Text>{value.reply.length}</Text>
                                                        </HStack>
                                                        <AccordionButton w='150px' flexDirection={'row-reverse'} _hover={{ bgColor: 'transparent' }}>
                                                            <AccordionIcon />
                                                            <Text>{isExpanded ? '접기' : '더보기'}</Text>
                                                        </AccordionButton>
                                                    </HStack>
                                                    <AccordionPanel p={0} bgColor={'gray.50'}>
                                                        <Stack>
                                                            {value.reply.map((reply, idx) => (
                                                                <Stack p={2}>
                                                                    <HStack justifyContent={'space-between'}>
                                                                        <HStack>
                                                                            <Avatar src={owner.profileImage} />
                                                                            <Text>{owner.name}</Text>
                                                                        </HStack>
                                                                        {editReplyIndex !== idx &&
                                                                            <HStack>
                                                                                <Button onClick={() => { setEditReplyIndex(idx); }} size={'xs'}>수정</Button>
                                                                                <Button onClick={() => deleteReply(index, idx)} size={'xs'}>삭제</Button>
                                                                            </HStack>
                                                                        }
                                                                    </HStack>
                                                                    {editReplyIndex == idx ?
                                                                        <Textarea onChange={(e) => setNewReply(e.target.value)} bgColor={'white'} whiteSpace={'pre-wrap'}>{reply.content}</Textarea> :
                                                                        <Text whiteSpace={'pre-wrap'}>{reply.content}</Text>
                                                                    }
                                                                    <HStack justifyContent={'space-between'}>

                                                                        <Text color={'gray.500'} fontSize={'sm'}>{getDate(reply.timestamp).replaceAll('-', '.')}</Text>
                                                                        {editReplyIndex === idx &&
                                                                            <HStack>
                                                                                <Button onClick={() => setEditReplyIndex(-1)} size={'xs'}>취소</Button>
                                                                                <Button onClick={() => submitReply(true, index)} colorScheme="red" size={'xs'}>수정</Button>

                                                                            </HStack>
                                                                        }
                                                                    </HStack>

                                                                </Stack>
                                                            ))}
                                                        </Stack>
                                                    </AccordionPanel>
                                                </>
                                            )}
                                        </AccordionItem>
                                    </Accordion>

                                    {value.openReply &&
                                        <Stack>

                                            <Textarea minH={'150px'} onChange={(e) => setNewReply(e.target.value)} />
                                            <HStack justifyContent={'flex-end'}>
                                                <Button onClick={() => setOpenReply(index, false)} size={'sm'}>취소</Button>
                                                <Button onClick={() => submitReply(false, index)} size={'sm'}>등록</Button>
                                            </HStack>
                                        </Stack>
                                    }
                                </Stack>
                            ))}
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )

}
export default ProductView;