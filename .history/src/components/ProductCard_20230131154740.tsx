import React from "react";
import { connect, useDispatch } from "react-redux";
import { addItemToCart } from "../store/actions/cartAction";
import ProductModel from "../models/ProductModel";
import styles from "../styles/ProductCard.module.css"

interface ProductCardProps {
  product: ProductModel;
}

const ProductCard = ({ product, 
}: ProductCardProps)=> {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addItemToCart(product));
  };

  const name = product.name
  const price = parseInt(product.price)
  const photo = product.photo
  const description = product.description
  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImageCard}
        src={photo}
        alt="img"
      />
      <div className={styles.productDescriptionCard}>
        <div className={styles.productDescriptionCardRow}>
          <div className={styles.productTitleCard}>
            {name}
          </div>
          <div className={styles.productPriceCard}>
            R${price.toLocaleString()}
          </div>
        </div>
        <div className={styles.productTextCard}>
          {description}
        </div>
      </div>
      <button className={styles.productButtonCard}
      onClick={handleClick}>
        <img src="/shopping-bag.svg" alt="image" />
        <div>COMPRAR</div>
      </button>
    </div>
  );
}

export default connect()(ProductCard);