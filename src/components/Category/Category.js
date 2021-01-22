import React from "react";
import Collapsible from "react-collapsible";
import Menu from "./icons/menu.svg";
import Cart from "./icons/cart.svg";
import Car from "./icons/car.png";

import Close from "./icons/close.svg";
import { Link } from "react-router-dom";

function Category() {
  const categoryList = [
    {
      title: "Car",
      id: 1,
      image1: { Car },
    },
    {
      title: "Clothes",
      id: 2,
      image: "",
    },
    {
      title: "Tennis",
      id: 3,
      image: "",
    },
    {
      title: "Ball",
      id: 4,
      image: "",
    },
    {
      title: "Laptop",
      id: 5,
      image: "",
    },
    {
      title: "Shoes",
      id: 6,
      image: "",
    },
    {
      title: "Camera",
      id: 7,
      image: "",
    },
    {
      title: "Jean",
      id: 8,
      image: "",
    },
    {
      title: "Relax",
      id: 9,
      image: "",
    },
    {
      title: "House",
      id: 9,
      image: "",
    },
  ];

  return (
    <Collapsible trigger="CATEGORY">
      <div className="products">
        {categoryList.map((category) => (
          <div style={{ height: "100px", width: "100px" }} className="product_card">
            <Link to={"/sub-category/" + category.id}>
              <img style={{ width: "50px", height: "50px", "margin-left": "10px" }} src={Car}></img>
            </Link>

            <div class="product_box">
              <h2 title="" style={{ "font-size": "15px", "text-align": "center", "margin-top": "10px" }}>
                {category.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </Collapsible>
  );
}

export default Category;
