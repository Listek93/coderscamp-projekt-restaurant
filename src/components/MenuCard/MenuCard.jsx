import React from "react";
import "./MenuCard.css";
import pizza from "./pizza-pepperoni.jpeg";

/* eslint-disable react/prop-types */

const MenuCard = ({ dish }) => {
  return (
    <div className="menu_menucard">
      <div className="menu_items">
        <div className="menu-card-image">
          <img src={pizza} alt="pizza" />
        </div>
        <div className="details">
          <div className="details-sub">
            <div className="menucard-name">{dish.name}</div>
            <div className="menucard_price">{dish.price}</div>
          </div>
          {/* <div className="menucard-description">{dish.description}</div> */}
          <button type="submit" className="menucard-orderbutton">
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
