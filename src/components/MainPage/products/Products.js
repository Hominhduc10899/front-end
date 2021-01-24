import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import faker from 'faker'
import { Link } from "react-router-dom";
import Filter from "./Filter";
import DataLoader from "./data";
import NewDataLoader from "./newdata";
import SaleDataLoader from "./saledata";
import Category from "../../Category/Category";
import Slider from "react-slick";// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function Products() {
//     // const [page, setPage] = useState(0)
//     // const [products, setProducts] = useState([])

//     // useEffect(() => {
//     //     console.log("http://localhost:9000/product/get/all/page/" + page);

function Product() {
    // const [pagination, setPagination] = useState({
    //     data: new Array(6000).fill().map((value, index) => (({
    //         id: index,
    //     }))),
    //     offset: 0,
    //     numberPerPage: 20,
    //     pageCount: 0,
    //     currentData: []
    // });

    // useEffect(() => {
    //     setPagination((prevState) => ({
    //         ...prevState,
    //         pageCount: prevState.data.length / prevState.numberPerPage,
    //         currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
    //     }))
    // }, [pagination.numberPerPage, pagination.offset])

    // const handlePageClick = event => {
    //     const selected = event.selected;
    //     const offset = selected * pagination.numberPerPage
    //     setPagination({ ...pagination, offset })
    // }
    

    useEffect(() => {
        fetch("http://localhost:9000/product/get/all/page/" + page)
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                return json;
            })
            .then((res) => res.content)
            .then((data) => setProducts(data));
    }, []);



    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <>
            <Filter onSubmit={setProducts}></Filter>
            <Category />
            <h1>Your Products</h1>
            <div className="">
                <Slider {...settings}>
                    {products.map((product) => (
                        <div className="product_card">
                            <Link to={"/product/" + product.id}>
                                <img src={"https://cf.shopee.vn/file/" + product.productAvatar} alt={"Image unavailable"}></img>
                            </Link>
                            <div class="product_box">
                                <h2 title={product.name}>{product.name}</h2>
                                <span>{product.currentPrice} đ</span>
                                <p>{product.description}</p>
                            </div>

                            <div className="row_btn">
                                <a id="btn_direct" href={product.url}>
                                    Link
                                </a>
                                <Link id="btn_view" to={"/product/" + product.id} product_pass={product}>
                                    Detail
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}




export default Products;
