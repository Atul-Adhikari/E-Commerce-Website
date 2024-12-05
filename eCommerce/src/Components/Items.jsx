import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import styles from "../Styles/Items.module.css";
import { ShoppingCart } from "phosphor-react";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

const Items = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const changeFavoriteStatus=()=>{
    setIsFavorite(!isFavorite);
  }
  const { products, setProducts, carts, setCarts } = useContext(MyContext);
  const saveToCart = () => {
    if (carts.includes(product)) {
      alert(product.title + "already in cart.");
      return;
    }
    alert("Item added to card.");
    const updatedCarts = [...carts, product];
    setCarts(updatedCarts);
    localStorage.setItem("carItem", JSON.stringify(updatedCarts));
  };

  const showImage = (product) => {
    window.open(product.image, "_blank");
  };
  return (
    <div>
      <div className={styles.singleItem}>
        <div className={styles.eachItem}>
          <img
            className={styles.productImage}
            src={product.image}
            onClick={() => showImage(product)}
          />
          <p className={styles.productName}>{product.title}</p>
          <p className={styles.productPrice}>$ {product.price}</p>
          <div className={styles.buttons}>
            <button className={styles.addToCart} onClick={saveToCart}>
              Add to Cart <ShoppingCart size={20} />
            </button>
            <div className={styles.favorites} onClick={changeFavoriteStatus}>
              {isFavorite ? (
                <div>
                  <MdFavorite size={18}/>
                </div>
              ) : (
                <div>
                  <MdFavoriteBorder size={18}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
