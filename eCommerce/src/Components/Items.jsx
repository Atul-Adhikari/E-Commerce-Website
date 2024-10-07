import React, { useContext } from "react";
import { MyContext } from "../App";
import styles from "../Styles/Items.module.css";
const Items = ({product}) => {
  const products = useContext(MyContext);
  return (
    <div>
      <div className={styles.singleItem}>
        <div className={styles.eachItem}>
          <img className={styles.productImage} src={product.image} />
          <h2>{product.title}</h2>
        </div>
        {/* <h2>{products.title}</h2> */}
      </div>
    </div>
  );
};

export default Items;
