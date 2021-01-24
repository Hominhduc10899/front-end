import React from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import DataLoader from "./data";
import NewDataLoader from "./newdata";
import SaleDataLoader from "./saledata";
import Category from "../../Category/Category";
import Slider from "react-slick";// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from 'react-loading-skeleton';

function Product(props) {
  const products = DataLoader();
  const newproducts = NewDataLoader();
  const saleproducts = SaleDataLoader();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 10
  };

  return (
    <>
      <Filter></Filter>
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
                <span>${product.currentPrice}</span>
                <p>{product.description}</p>
              </div>

              <div className="row_btn">
                <Link id="btn_direct" to="/">
                  Link
              </Link>
                <Link id="btn_view" to={"/product/" + product.id} product_pass={product}>
                  View
              </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <h1>New Products</h1>
      <div className="">
        <Slider {...settings}>
          {newproducts.map((newproduct) => (
            <div className="product_card">
              <Link to={"/newproduct/" + newproduct.id}>
                <img src={newproduct.image}></img>
              </Link>
              <div class="product_box">
                <h2 title={newproduct.name}>{newproduct.name}</h2>
                <span>${newproduct.currentPrice}</span>
                <p>{newproduct.description}</p>
              </div>

              <div className="row_btn">
                <Link id="btn_direct" to="/">
                  Link
              </Link>
                <Link id="btn_view" to={"/product/" + newproduct.id}>
                  View
              </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <h1>Flash Sale</h1>
      <div className="">
        <Slider {...settings}>
          {saleproducts.map((saleproduct) => (
            <div className="product_card">
              <Link to={"/product/" + saleproduct.id}>
                <img src={saleproduct.image}></img>
              </Link>
              <div class="product_box">
                <h2 title={saleproduct.name}>{saleproduct.name}</h2>
                <span>${saleproduct.currentPrice}</span>
                <p>{saleproduct.description}</p>
              </div>

              <div className="row_btn">
                <Link id="btn_direct" to="/">
                  Link
              </Link>
                <Link id="btn_view" to={"/product/" + saleproduct.id}>
                  View
              </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Product;
