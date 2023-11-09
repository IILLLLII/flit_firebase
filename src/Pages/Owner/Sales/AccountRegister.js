import { Box, Card, Container, FormControl, FormLabel, HStack, IconButton, Input, Radio, RadioGroup, Select, Stack, StackDivider, Text, Textarea, VStack, background } from "@chakra-ui/react";
import { MdChevronLeft } from "react-icons/md";
import { useState } from "react";

export default function AccountRegister() {
    const [type, setType] = useState('매출');
    return (
            <Container maxW={'container.xl'}>
                <Card p={4}>
                    <HStack>
                        <IconButton icon={<MdChevronLeft size={25} />} bgColor={'white'} />
                        <Text fontSize={'1.2rem'} fontWeight={'bold'}>등록하기</Text>
                    </HStack>

                    <form>
                        <Text p={4} color={"#da4359"}>* 필수항목</Text>
                        <VStack alignItems={'flex-start'} divider={<StackDivider borderColor={'#d9d9d9'} />} m={2} pt={2} pb={2} borderTop={'1px solid #d9d9d9'}>
                            <FormControl isRequired>
                                <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                    <FormLabel width={120} mt={1}>매입매출 설정</FormLabel>
                                    <RadioGroup value={type} onChange={setType}>
                                        <HStack spacing={4}>
                                            <Radio value="매출">매출</Radio>
                                            <Radio value="매입">매입</Radio>
                                        </HStack>
                                    </RadioGroup>

                                </Stack>
                            </FormControl>

                            <FormControl isRequired>
                                <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                    <FormLabel width={120} mt={1}>날짜 설정</FormLabel>
                                    <Input type="date" />
                                </Stack>
                            </FormControl>

                            <FormControl isRequired>
                                <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                    <FormLabel width={120} mt={1}>시간 설정</FormLabel>
                                    <Input type="time" />
                                </Stack>
                            </FormControl>

                            <FormControl isRequired>
                                <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                    <FormLabel width={120} mt={1}>카테고리</FormLabel>
                                    <HStack width={'100%'}>
                                        <Select>
                                            <option value='꽃'>꽃</option>
                                            <option value='식물'>식물</option>
                                        </Select>
                                        <Select>
                                            <option value='전체'>전체</option>
                                            <option value='꽃다발'>꽃다발</option>
                                            <option value='꽃바구니'>꽃바구니</option>
                                            <option value='화분'>화분</option>
                                        </Select>
                                    </HStack>
                                </Stack>
                            </FormControl>

                            <FormControl isRequired>
                                <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                    <FormLabel width={120} mt={1}>시간 설정</FormLabel>
                                    <Input type="time" />
                                </Stack>
                            </FormControl>

                            {type === "매출" &&
                                <VStack divider={<StackDivider borderColor={'#d9d9d9'} />} width={'100%'}>
                                    <FormControl isRequired>
                                        <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                            <FormLabel width={120} mt={1}>상품명</FormLabel>
                                            <Input type="text" />
                                        </Stack>
                                    </FormControl>

                                    <FormControl>
                                        <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                            <FormLabel width={120} mt={1}>원가</FormLabel>
                                            <Input type="text" />
                                        </Stack>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                            <FormLabel width={120} mt={1}>판매가</FormLabel>
                                            <Input type="text" />
                                        </Stack>
                                    </FormControl>
                                </VStack>
                            }

                            {type === "매입" &&
                                <VStack divider={<StackDivider borderColor={'#d9d9d9'} />} width={'100%'}>
                                    <FormControl isRequired>
                                        <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                            <FormLabel width={120} mt={1}>제목</FormLabel>
                                            <Input type="text" />
                                        </Stack>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                            <FormLabel width={120} mt={1}>금액</FormLabel>
                                            <Input type="text" />
                                        </Stack>
                                    </FormControl>
                                </VStack>
                            }

                            <FormControl isRequired>
                                <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                    <FormLabel width={120} mt={1}>결제방법</FormLabel>
                                    <HStack width={'100%'}>
                                        <Select>
                                            <option value='카드결제'>카드결제</option>
                                            <option value='현장결제(POS)'>{'현장결제(POS)'}</option>
                                            <option value='계좌이체'>{'계좌이체'}</option>
                                        </Select>
                                    </HStack>
                                </Stack>
                            </FormControl>

                            {type === "매출" &&
                                <FormControl>
                                    <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                        <VStack width={'100%'}>
                                            <HStack width={'100%'}>
                                                <FormLabel width={120} mt={1}>배송</FormLabel>
                                                <RadioGroup>
                                                    <HStack spacing={4}>
                                                        <Radio>배송</Radio>
                                                        <Radio>픽업</Radio>
                                                    </HStack>
                                                </RadioGroup>
                                            </HStack>
                                            <VStack width={'100%'} backgroundColor={"#f5f5f5"} p={4}>
                                                <HStack width={'100%'}>
                                                    <FormLabel width={120} mt={1}>주문자</FormLabel>
                                                    <Input backgroundColor={'white'} />
                                                </HStack>
                                                <HStack width={'100%'}>
                                                    <FormLabel width={120} mt={1}>수령인</FormLabel>
                                                    <Input backgroundColor={'white'} />
                                                </HStack>
                                                <HStack width={'100%'} mt={1}>
                                                    <FormLabel width={120}>주소</FormLabel>
                                                    <Input backgroundColor={'white'} />
                                                </HStack>
                                                <HStack width={'100%'} mt={1}>
                                                    <FormLabel width={120}>상세주소</FormLabel>
                                                    <Input backgroundColor={'white'} />
                                                </HStack>
                                            </VStack>
                                        </VStack>
                                    </Stack>
                                </FormControl>
                            }

                            <FormControl>
                                <Stack direction={['column', 'row']} p={2} alignItems={['flex-start', 'center']}>
                                    <FormLabel width={120} mt={1}>상세내용</FormLabel>
                                    <Textarea type="text" />
                                </Stack>
                            </FormControl>


                        </VStack>

                    </form>
                </Card>

            </Container>
    )
}