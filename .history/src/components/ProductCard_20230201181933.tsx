import React from "react";
import { connect, useDispatch } from "react-redux";
import CartModel from "../models/CartModel";
import ProductModel from "../models/ProductModel";
import styles from "../styles/ProductCard.module.css"
import {addItemToCart} from "../store/actions/cartAction"

interface ProductCardProps {
  product: ProductModel;
}

function ProductCard({product} : ProductCardProps, props: any){
  const cartProducts = props.cart.cart
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
      onClick={handleClick}
      >
        <img src="/shopping-bag.svg" alt="image" />
        <div>COMPRAR</div>
      </button>
    </div>
  );
}

interface State {
  cart: CartModel[
      
  ];
}

function mapStateToProps(state: State){
  return{
      cart: state.cart
  }
}

export default connect(mapStateToProps)(ProductCard);