import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import styles from "../Styles/Items.module.css";
import { ShoppingCart } from "phosphor-react";
const Items = ({ product }) => {
  const { products, setProducts, carts, setCarts } = useContext(MyContext);
  const saveToCart=()=>{
    setCarts([...carts,product])
  }
  return (
    <div>
      <div className={styles.singleItem}>
        <div className={styles.eachItem}>
          <img className={styles.productImage} src={product.image} />
          <p className={styles.productName}>{product.title}</p>
          <p className={styles.productPrice}>
            ${product.price}
            <button onClick={saveToCart}>
              Add to Cart <ShoppingCart size={20} />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Items;
