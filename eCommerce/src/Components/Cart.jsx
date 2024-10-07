import React, { useContext, useState } from "react";
// import styles from "../Styles/Cart.module.css";
import styles from "../Styles/Items.module.css";
import { MyContext } from "../App";
const Cart = () => {
  const { carts, setCarts } = useContext(MyContext);
  const clearCart=()=>{
    setCarts([])
  }
  return (
    <div>
      <h1>Your items here</h1>
      <button className={styles.clearCart} onClick={clearCart}>Clear Cart</button>
      <div className={styles.intropart}>
        {carts.map((product) => {
          return (
            <div className={styles.cartItems}>
              <div className={styles.singleItem}>
                <div className={styles.eachItem}>
                  <img className={styles.productImage} src={product.image} />
                  <p className={styles.productName}>{product.title}</p>
                  <p className={styles.productPrice}>${product.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
