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
import ProductList from '../Pages/Owner/Product/List'
import ProductView from '../Pages/Owner/Product/View'
import PortfolioList from '../Pages/Owner/Portfolio/List'
import PortfolioView from '../Pages/Owner/Portfolio/View'
import AddNotice from '../Pages/Admin/Notice/Add'
import NoticeList from '../Pages/Admin/Notice/List'
import CouponList from '../Pages/Admin/Coupon/List'
import CouponAdd from '../Pages/Admin/Coupon/Add'
import SubmitDashboard from '../Pages/Admin/Shop/SubmitDashboard'
import UserDashboard from '../Pages/Admin/User/UserDashboard'
import Plan from '../Pages/Admin/Plan'
import Order from '../Pages/Admin/Order/Order'
import OrderView from '../Pages/Admin/Order/View'

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

        <Accordion borderColor={'white'} defaultIndex={parseInt(localStorage.getItem('openIndex'))} onChange={(e) => localStorage.setItem('openIndex', e)}>
          <AccordionItem>
            <AccordionButton p={0} w={'100%'}>
              <NavTitle>유저 관리<AccordionIcon /></NavTitle>
            </AccordionButton>
            <AccordionPanel p={0}>
              <NavItem link={'/admin/user/all'}>전체 유저 관리</NavItem>
              <NavItem link={'/admin/user/user'}>Customer 관리</NavItem>
              <NavItem link={'/admin/user/store'}>Shop 관리</NavItem>
              <NavItem link={'/admin/user/florist'}>Florist 관리</NavItem>
              <NavItem link={'/admin/user/seceder'}>탈퇴 유저 관리</NavItem>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={0} w={'100%'}>
              <NavTitle>상품 관리<AccordionIcon /></NavTitle>
            </AccordionButton>
            <AccordionPanel p={0}>
              <NavItem link={'/admin/product/1'}>상품 관리</NavItem>
              <NavItem link={'/admin/portfolio/1'}>포트폴리오 관리</NavItem>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={0} w={'100%'}>
              <NavTitle>거래 관리<AccordionIcon /></NavTitle>
            </AccordionButton>
            <AccordionPanel p={0}>
              <NavItem link={'/admin/order'}>주문 관리</NavItem>
              {/* <NavItem>수발주 관리</NavItem> */}
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
              <NavItem link={'/admin/coupon/1'}>쿠폰</NavItem>
              <NavItem >광고</NavItem>
              <NavItem link={'/admin/notice/list/1'}>공지/이벤트</NavItem>
              <NavItem link={'/admin/plan'}>플릿일정</NavItem>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton p={0} w={'100%'}>
              <NavTitle>입점센터<AccordionIcon /></NavTitle>
            </AccordionButton>
            <AccordionPanel p={0}>
              <NavItem link={'/admin/submit/dashboard'}>입점현황</NavItem>
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
            <Route path='/admin/user/*' element={<UserDashboard />} />
            <Route path='/admin/submit/dashboard' element={<SubmitDashboard/>} />
            <Route path='/admin/submit/list/*' element={<SubmitList/>} />
            <Route path='/admin/submit/view/*' element={<SubmitView/>} />
            <Route path='/admin/product/*' element={<ProductList />} />
            <Route path='/admin/product/view/*' element={<ProductView />} />
            <Route path='/admin/portfolio/*' element={<PortfolioList />} />
            <Route path='/admin/portfolio/view/*' element={<PortfolioView />} />
            <Route path='/admin/notice/list/*' element={<NoticeList />} />
            <Route path='/admin/notice/add' element={<AddNotice />} />
            <Route path='/admin/coupon/1' element={<CouponList/>} />
            <Route path='/admin/coupon/register' element={<CouponAdd/>} />
            <Route path='/admin/plan' element={<Plan/>} />
            <Route path='/admin/order' element={<Order/>} />
            <Route path='/order/view/*' element={<OrderView/>} />
          </Routes>
        </BrowserRouter>
        </Box>
      </Box>
    </Box>
  )
}

export default SidebarWithHeader