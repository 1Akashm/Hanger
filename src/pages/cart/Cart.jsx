import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [item, setItems] = useState([]);

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("shoes")) || [];
    setItems(getItem);
  }, []);

  // console.log(getItem,typeof getItem);

  if (item.length < 1) {
    return <p>No item available</p>;
  }

  console.log("item is", item);

  return (
    <div className="display-container">
      {item.map((i) => {
        return (
          <div className="display">
            <img src={i.image} alt="display-image" className="display-image" />
            <div className="display-content">
              <p>{i.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
