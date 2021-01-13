import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import Login from './authorization/Login'
import DetailProduct from './detailproduct/DetailProduct'
import DetailNewProduct from './detailproduct/DetailNewProduct'
import DetailSaleProduct from './detailproduct/DetailSaleProduct'
import Register from './authorization/Register'
import Cart from './cart/Cart'

function MainPage() {
    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/product/:id" exact component={DetailProduct} />
            <Route path="/newproduct/:id" exact component={DetailNewProduct} />
            <Route path="/saleproduct/:id" exact component={DetailSaleProduct} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/cart" exact component={Cart} />
        </Switch>
    );
}

export default MainPage;