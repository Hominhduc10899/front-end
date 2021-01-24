import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Category from "../../Category/Category";
import Filter from "../products/Filter";

function SubCategory(props) {
    const [catid, setCatid] = useState((props.match.params.id ? props.match.params.id : 1))
    const [page, setPage] = useState(0)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/product/get/category/" + catid + "?page=" + page)
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
        infinite: false,
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
                    {products.map((product) => {
                        console.log(products.length);

                        return (
                            <div className="product_card" key={product.id}>
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
                        )
                    })}
                </Slider>
            </div>
        </>
    ); 
}

export default SubCategory;
