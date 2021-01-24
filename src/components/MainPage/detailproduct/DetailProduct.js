import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataLoader from "../products/data";

function DetailProduct(props) {
  const [product, setProduct] = useState(null);


  useEffect(() => {
    fetch("http://localhost:9000/product/get/" + props.match.params.id)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
      })
      .catch(err => {
        console.log(err)
      })
      ;
  }, []);

  // setProduct(products.find(x => x.id === props.match.params.id));
  return (
    <div>
      {!product ? (
        "Sorry, product is currently unavailable."
      ) : (
        <>
          <div className="detail">
            <img src={"https://cf.shopee.vn/file/" + product.productAvatar} alt="product"></img>
            <div className="box-detail">
              <div className="row">
                <h2>{product.name}</h2>
                {/* <h6>{product.id}</h6> */}
              </div>
              <p>Price: {product.currentPrice} đ</p>
              <p>Category: {product.categories[product.categories.length - 1].name}</p>
              <div className="row_btn">
                <a id="btn_direct" href={product.url} className="cart">
                  Direct Link
                </a>
                {/* <Link to="/cart" className="cart">
                  Add to cart
                </Link> */}
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
              {product.moreLikeThisProducts.map((product) => {
                return product.name;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DetailProduct;
