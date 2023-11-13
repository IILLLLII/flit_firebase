import { Avatar, Badge, Box, Center, Flex, HStack, IconButton, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { getDate, getOwner, getPortfolioListAll, getShop } from '../../../DB/function';
import ImageSlider from '../../../Components/ImageSlider';
import MobileStatus from '../../../Components/MobileStatus';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Title_xl } from '../../../Style/Typograhy';

function PortfolioView() {
    const navigate = useNavigate();
    const location = useLocation();
    const [portfolioList, setPortfiolioList] = useState([]);
    const [owner, setOwner] = useState({});
    const [shopInfo, setShopInfo] = useState({});
    useEffect(() => {
        if (location.state) {
            getPortfolioList();
            getOwnerInfo();
            getShopInfo();
        }
    }, []);

    const getOwnerInfo = async () => {
        let owner_ = await getOwner(location.state.shopInfo.ownerId)
        setOwner(owner_)
    }

    const getShopInfo = async () => {
        let shop_ = await getShop(location.state.shopInfo.ownerId)
        setShopInfo(shop_)
    }

    const getPortfolioList = async() => {
        let result = await getPortfolioListAll(location.state.shopInfo.ownerId)
        console.log(result)
        setPortfiolioList(result)
    }
  return (
                            <Flex bgColor={'white'} flexDirection={'column'} w="100%">
            <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
            <Flex width={"100%"} justifyContent={'space-between'} alignItems={'center'} bgColor={'white'} padding={1}>
            <HStack>
            <IconButton border={'none'} mr={1} onClick={() => navigate(-1)} bgColor={'white'} icon={<ArrowBackIcon boxSize={'24px'}/>}/>
            <HStack p={2}>
                        <Avatar mr={2} src={owner?.profileImage}></Avatar>
                        <Text>{shopInfo?.shopname}</Text>
                    </HStack>
                    <Badge colorScheme='red'>Following</Badge>
            </HStack>
        </Flex>
            </Flex>
            <Stack>
        {portfolioList?.map((item, index) => (
            <>
                            <Center mt={'80px'} maxW={'container.sm'}>
                    <ImageSlider images={[item.thumbnail_image, ...item.product_image]} />
                </Center>
                <Stack m={4} spacing={0}>
                <Text>{item.product_name}</Text>
                <Text color={'gray.500'}>{getDate(item.regist_date)}</Text>
                <Box border={'1px solid #d9d9d9'} p={2}>
                <Text>{item.comment}</Text>
                </Box>
                </Stack>
            </>
        ))}

    </Stack>
    </Flex>
  )
}

export default PortfolioView