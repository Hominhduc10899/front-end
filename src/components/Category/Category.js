import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import Menu from "./icons/menu.svg";
import Cart from "./icons/cart.svg";
import Car from "./icons/car.png";

import Close from "./icons/close.svg";
import { Link } from "react-router-dom";

function Category() {
  const [categoryList, setCategoryList] = useState([])
  
  useEffect(() => {
	  fetch("http://localhost:9000/category/get/all")
	  .then((res) => res.json())
	  .then(json => {
		  console.log(json);
		  return json;
    })
    .then(json => json.slice(0, 12))
	  .then(json => {
		  json.forEach(element => {
			  element.id = element.shopeeCategoryID;
		  });
		  return json;
	  })
	  .then(json => setCategoryList(json))
  }, [])

  return (
    <Collapsible trigger="CATEGORY">
      <div className="products">
        {categoryList.map((category) => (
          <div style={{ height: "100px", width: "100px" }} className="product_card">
            <Link to={"/sub-category/" + category.id} onClick={() => window.open("/sub-category/" + category.id, "_self")}>
              <img style={{ width: "50px", height: "50px", "margin-left": "10px" }} src={Car}></img>
            </Link>

            <div class="product_box">
              <h2 name="" style={{ "font-size": "15px", "text-align": "center", "margin-top": "10px" }}>
                {category.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </Collapsible>
  );
}

export default Category;
