import React, { useContext } from "react";
import { MyContext } from "../App";
import styles from "../Styles/Items.module.css";
import {ShoppingCart} from 'phosphor-react'
const Items = ({product}) => {
  const products = useContext(MyContext);
  return (
    <div>
      <div className={styles.singleItem}>
        <div className={styles.eachItem}>
          <img className={styles.productImage} src={product.image} />
          <p className={styles.productName}>{product.title}</p>
          <p className={styles.productPrice}>${product.price}<button>Add to Cart <ShoppingCart size={20}/></button></p>
        </div>
      </div>
    </div>
  );
};

export default Items;
