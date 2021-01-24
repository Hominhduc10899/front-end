import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import DataLoader from "../products/data";

function DetailProduct(props) {
    const [product, setProduct] = useState(null);
    const [id, setId] = useState(props.match.params.id);


    useEffect(() => {
        fetch("http://localhost:9000/product/get/" + id)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                console.log(json.moreLikeThisProducts.length)
                setProduct(json);
            })
            .catch(err => {
                console.log(err)
            })
            ;
    }, [id]);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // setProduct(products.find(x => x.id === props.match.params.id));
    return (
        <div>
            {!product ? (
                "Sorry, product is currently unavailable."
            ) : (
                    <>
                        <div className="detail">
                            {/* <Slider {...settings}>
                                {product.images.map((img) => (
                                    <img key={img} src={"https://cf.shopee.vn/file/" + img} />
                                ))}
                            </Slider> */}
                            <img src={"https://cf.shopee.vn/file/" + product.productAvatar} />
                            <div className="box-detail">
                                <div className="row">
                                    <h2>{product.name}</h2>
                                    {/* <h6>{product.id}</h6> */}
                                </div>
                                <p>Price: {product.currentPrice} đ</p>
                                {
                                    (<div>
                                        <p>Category:  
                                            <Link to={"/sub-category/" +  product.categories[product.categories.length - 1].shopeeCategoryID} onClick={() => window.open("/sub-category/" + product.categories[product.categories.length - 1].shopeeCategoryID, "_self")}>{ product.categories[product.categories.length - 1].name}</Link>
                                        </p>
                                    </div>)
                                }
                                <p>Rating: {Math.round(product.rating)} &#9733; </p>
                                
                                <div className="row_btn">
                                    <a id="btn_direct" href={product.url} className="cart">
                                        Direct Link
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>Description</h2>
                            <p>{product.description}</p>
                        </div>

                        <div>
                            <h2>Related products</h2>
                            <div className="products">
                                {product.moreLikeThisProducts.map((product) => (
                                    <div className="product_card" key={product.id}>
                                        <Link to={"/product/" + product.id} onClick={() => window.open("/product/" + product.id, "_self")}>
                                            <img src={"https://cf.shopee.vn/file/" + product.productAvatar} alt={"Image unavailable"}></img>
                                        </Link>
                                        <div class="product_box">
                                            <h2 title={product.name}>{product.name}</h2>
                                            <span>{product.currentPrice} đ</span>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
}

export default DetailProduct;
