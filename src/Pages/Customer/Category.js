import React, { useState } from "react";
import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import { Title_lg, fontColor } from "../../Style/Typograhy";
import MobileStatus from "../../Components/MobileStatus";
import { useNavigate } from "react-router-dom";

export const CATEGORY = [
    {
        title: '꽃',
        subItem: ['꽃다발', '꽃바구니', '플라워박스', '화병꽂이']
    },
    {
        title: '식물',
        subItem: ['동양난 | 서양난', '다육 | 화분', '공기정화 | 관엽', '화병꽂이']
    },
    {
        title: '화환',
        subItem: ['축하화환', '근조화환', '디자인화환']
    },
    {
        title: '조경',
        subItem: ['플랜테리어(실내조경)', '가드닝(실외조경)']
    },
    {
        title: '프리미엄',
        subItem: ['웨딩 | 리마인드', '생일 | 파티 | 프로포즈', '백일 | 돌상', '애견', '시즌 | 크리스마스']
    },
]


const Category = () => {
    const [category1, setCategory1] = useState(0);
    const navigate = useNavigate();
    return (
        <Flex bgColor={'white'} h={'100vh'} flexDirection={'column'}>
            <Flex w='100%' left={0} position="fixed" zIndex={999} borderBottom={'1px solid #d9d9d9'}>
                <MobileStatus title={"카테고리"} />
            </Flex>

            <Stack direction={'row'} h={'100%'} mt={'42px'}>
                <Stack direction={'column'} h={'100%'} w={'30%'} bgColor={'gray.600'} pt={'20px'}>
                    {CATEGORY.map((value, index) => (
                        <Button my={1} border={'none'} onClick={() => setCategory1(index)} h={'60px'} color={category1 == index ? 'gray.800' : 'white'} bgColor={category1 == index ? 'white' : 'gray.600'} _hover={{ color: 'gray.600', bgColor: 'gray.300' }} borderLeftRadius={'full'} borderRightRadius={'0'} marginLeft={'20%'} paddingRight={'20%'}>{value.title}</Button>
                    ))}

                </Stack>

                <Stack direction={'column'} h={'100%'} w={'70%'} bgColor={'white'} pt={'20px'}>
                    <Flex flexDirection={'row'} justifyContent={'space-between'}>
                        <Text {...Title_lg} ml={8} color={fontColor.primary}>{CATEGORY[category1].title}</Text>
                        <Button border={'none'} onClick={() => navigate(`/customer/product/${category1}`, { state: { category1: category1, category2: '전체' } })} size={'sm'} colorScheme={'whiteAlpha'} color={'gray.700'}>전체보기</Button>
                    </Flex>
                    {CATEGORY[category1].subItem.map((value, index) =>
                        <Button border={'none'} onClick={() => navigate(`/customer/product/${category1}`, { state: { category1: category1, category2: CATEGORY[category1].subItem[index] } })} _hover={{ color: 'gray.500', bgColor: 'gray.100' }} justifyContent={'flex-start'} borderBottom={'1px solid #d9d9d9'} borderRadius={0} marginInline={4} paddingY={6} bgColor={'white'}>
                            <Text>{value}</Text>
                        </Button>
                    )}

                </Stack>
            </Stack>

        </Flex>
    )
}
export default Category;