import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import Home from '../Pages/Admin/Home'
import Login from '../Pages/Admin/Login'
import SubmitList from '../Pages/Admin/Shop/SubmitList'
import SubmitView from '../Pages/Admin/Shop/SubmitView'
import Footer from './Footer'

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      overflowY={'auto'}
      css={{
        '&::-webkit-scrollbar': {
          width: '0px',
        }
      }}
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        ADMIN
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <Stack spacing={0}>
        <NavItem link={'/admin'}>HOME</NavItem>

        <Accordion defaultIndex={parseInt(localStorage.getItem('openIndex'))} onChange={(e) => localStorage.setItem('openIndex', e)}>
          <AccordionItem>
            <AccordionButton p={0} w={'100%'}>
              <NavTitle>유저 관리<AccordionIcon /></NavTitle>
            </AccordionButton>
            <AccordionPanel p={0}>
              <NavItem >전체 유저 관리</NavItem>
              <NavItem >Customer 관리</NavItem>
              <NavItem >Shop 관리</NavItem>
              <NavItem >Florist 관리</NavItem>
              <NavItem >탈퇴 유저 관리</NavItem>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={0} w={'100%'}>
              <NavTitle>거래 관리<AccordionIcon /></NavTitle>
            </AccordionButton>
            <AccordionPanel p={0}>
              <NavItem>주문 관리</NavItem>
              <NavItem>수발주 관리</NavItem>
              <NavItem>취소건 관리</NavItem>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={0} w={'100%'}>
              <NavTitle>매출관리<AccordionIcon /></NavTitle>
            </AccordionButton>
            <AccordionPanel p={0}>
              <NavItem>매출분석</NavItem>
              <NavItem>상품분석</NavItem>
              <NavItem>고객분석</NavItem>
              <NavItem>주문분석</NavItem>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={0} w={'100%'}>
              <NavTitle>정산관리<AccordionIcon /></NavTitle>
            </AccordionButton>
            <AccordionPanel p={0}>
              <NavItem>정산관리</NavItem>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={0} w={'100%'}>
              <NavTitle>공지관리<AccordionIcon /></NavTitle>
            </AccordionButton>
            <AccordionPanel p={0}>
              <NavItem >쿠폰</NavItem>
              <NavItem >광고</NavItem>
              <NavItem >공지</NavItem>
              <NavItem >이벤트</NavItem>
              <NavItem >플릿일정</NavItem>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={0} w={'100%'}>
              <NavTitle>입점센터<AccordionIcon /></NavTitle>
            </AccordionButton>
            <AccordionPanel p={0}>
              <NavItem>입점현황</NavItem>
              <NavItem link={'/admin/submit/list/1'}>입점신청</NavItem>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={0} w={'100%'}>
              <NavTitle>고객센터<AccordionIcon /></NavTitle>
            </AccordionButton>
            <AccordionPanel p={0}>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Box>
  )
}

const NavItem = ({ icon, link, children, ...rest }) => {
  return (
    <Box
      as="a"
      href={link}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="3"
        // mx="4"
        // borderRadius="lg"
        role="group"
        cursor="pointer"
        justifyContent={'center'}
        _hover={{
          bgColor: 'gray.300',
          color: 'gray.800'
        }}
        {...rest}>
        {children}
      </Flex>
    </Box>
  )
}

const NavTitle = ({ icon, children, ...rest }) => {
  return (
    <Box
      style={{ textDecoration: 'none', width: "100%" }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="3"
        justifyContent={'space-between'}
        // mx="4"
        // borderRadius="lg"
        role="group"
        fontWeight={'bold'}
        bgColor={'gray.500'}
        color={'gray.100'}
        w="100%"
        {...rest}>
        {children}
      </Flex>
    </Box>
  )
}

const NavSubTitle = ({ icon, children, ...rest }) => {
  return (
    <Box
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="3"
        justifyContent={'center'}
        // mx="4"
        // borderRadius="lg"
        role="group"
        fontWeight={'bold'}
        bgColor='gray.100'
        color='gray.800'
        {...rest}>
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        ADMIN
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <HStack>
          <Login/>
          </HStack>
          {/* <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://lh3.googleusercontent.com/ogw/AGvuzYa1ziFxi8Mj6t2WBY475A8l5auXrCXPU8pAlZEc=s64-c-mo'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">태영애드</Text>
                  <Text fontSize="xs" color="gray.600">
                    관리자
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>계정설정</MenuItem>
              <MenuDivider />
              <MenuItem>로그아웃</MenuItem>
            </MenuList>
          </Menu> */}
        </Flex>
      </HStack>
    </Flex>
  )
}

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('white', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        <Box padding={4}> 
        <BrowserRouter>
          <Routes>
            <Route path='/admin' element={<Home />} />
            <Route path='/admin/submit/list/*' element={<SubmitList/>} />
            <Route path='/admin/submit/view/*' element={<SubmitView/>} />
          </Routes>
        </BrowserRouter>
        </Box>
        <Footer/>
      </Box>
    </Box>
  )
}

export default SidebarWithHeader