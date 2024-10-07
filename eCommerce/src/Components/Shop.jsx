import React, { useContext } from "react";
import styles from "../Styles/Shop.module.css";
import Items from "./Items";
import { MyContext } from "../App";
const Shop = () => {
  const {products, setProducts} = useContext(MyContext);
  return (
    <div className={styles.shop}>
      <div className={styles.intropart}>
        <h1>Welcome to the Store</h1>
      </div>
      {products.map((product) => (
        <Items product={product} />
      ))}
    </div>
  );
};

export default Shop;
