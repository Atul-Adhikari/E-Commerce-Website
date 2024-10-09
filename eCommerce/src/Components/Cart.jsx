import React, { useContext, useState } from "react";
import styles from "../Styles/Items.module.css";
import { MyContext } from "../App";
import { X } from "phosphor-react";
import { RxCross2 } from "react-icons/rx";
const Cart = () => {

  const { carts, setCarts } = useContext(MyContext);
  const clearCart = () => {
    localStorage.removeItem("carItem");
    setCarts([]);
  };

  const removeEachItem = (product) => {
    const allData = JSON.parse(localStorage.getItem("carItem"));

    const afterRemoving = allData.filter((item) => item.id !== product.id);
    setCarts(afterRemoving);
    localStorage.setItem("carItem", JSON.stringify(afterRemoving));
  };

  const cartItems = JSON.parse(localStorage.getItem("carItem")) || [];
  console.log(cartItems);

  const openImage=(product)=>{
    window.open(product.image, "_blank")
  }

  const itemsInCart=cartItems.length;
  if(itemsInCart<1){
    return(
      <h1 className={styles.noItems}>No items in cart.</h1>
    )
  }
  return (
    <div>
      <h1>Your items here</h1>
      <button className={styles.clearCart} onClick={clearCart}>
        Clear Cart
      </button>
      <div className={styles.intropart}>
        {cartItems.map((product) => {
          return (
            <div className={styles.cartItems}>
              <div className={styles.singleItem}>
                <div className={styles.eachItem}>
                  <RxCross2
                    className={styles.removeFromCart}
                    onClick={() => removeEachItem(product)}
                  />
                  <img className={styles.productImage} src={product.image} onClick={()=>openImage(product)}/>
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
