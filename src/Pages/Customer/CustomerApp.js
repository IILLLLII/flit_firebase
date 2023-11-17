import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Category";
import Home from "./Home";
import ProductList from "./Product/List";
import ProductView from "./Product/View";
import Submit from "./Submit";
import Login from "./Login";
import Cart from "./Cart";
import Purchase from "./Purchase";
import ShopInfo from "./ShopInfo";
import Notice from "./Notice/Notice";
import Event from "./Notice/Event";
import NoticeView from "./Notice/View";
import Chat from "./Chat";
import ReviewList from './Review/List'
import ReviewWrite from "./Review/Write";
import PurchaseComplete from "./PurchaseComplete";
import Info from "./MyPage/Info";
import PortfolioView from "./Portfolio/PortfolioView";
import Order from "./Order";
import Main from "./MyPage/Main";
import Setting from "./MyPage/Setting";

const CustomerApp = () => {
    return (
        // <Container maxW={'container.sm'} bgColor={'gray.200'} h={'100%'}>
                <BrowserRouter>
          <Routes>
            <Route path='/customer' element={<Home />} />
            <Route path='/customer/info' element={<Info />} />
            <Route path='/customer/category' element={<Category />} />
            <Route path='/customer/product/*' element={<ProductList/>} />
            <Route path='/customer/product/view/*' element={<ProductView/>} />
            <Route path='/customer/submit' element={<Submit/>} />
            <Route path='/customer/login' element={<Login/>} />
            <Route path='/customer/cart' element={<Cart/>} />
            <Route path='/customer/purchase' element={<Purchase/>} />
            <Route path='/customer/shopinfo' element={<ShopInfo/>} />
            <Route path='/customer/notice' element={<Notice/>} />
            <Route path='/customer/event' element={<Event/>} />
            <Route path='/customer/notice/view' element={<NoticeView/>} />
            <Route path='/customer/chat' element={<Chat/>} />
            <Route path='/customer/review/post' element={<ReviewList/>} />
            <Route path='/customer/review/list' element={<ReviewList/>} />
            <Route path='/customer/review/write' element={<ReviewWrite/>} />
            <Route path='/customer/purchase/complete' element={<PurchaseComplete/>} />
            <Route path='/customer/portfolio/view' element={<PortfolioView/>} />
            <Route path='/customer/order' element={<Order/>} />
            <Route path='/customer/mypage' element={<Main/>} />
            <Route path='/customer/setting' element={<Setting/>} />
          </Routes>
        </BrowserRouter>
        // </Container>
    )
}
export default CustomerApp;