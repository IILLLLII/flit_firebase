import React from "react";
import { Container} from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Category";
import Home from "./Home";
import ProductList from "./Product/List";
import ProductView from "./Product/View";

const CustomerApp = () => {
    return (
        <Container maxW={'container.sm'} bgColor={'gray.200'} paddingInline={0} h={'100%'}>

                <BrowserRouter>
          <Routes>
            <Route path='/customer' element={<Home />} />
            <Route path='/customer/category' element={<Category />} />
            <Route path='/customer/product/*' element={<ProductList/>} />
            <Route path='/customer/product/view/*' element={<ProductView/>} />
          </Routes>
        </BrowserRouter>
        </Container>
    )
}
export default CustomerApp;