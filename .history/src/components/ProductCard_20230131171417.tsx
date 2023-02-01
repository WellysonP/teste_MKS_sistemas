import React, { Dispatch } from "react";
import { connect, DispatchProp } from "react-redux";
import { Action } from "redux";
import CartModel from "../models/CartModel";
import ProductModel from "../models/ProductModel";
import styles from "../styles/ProductCard.module.css"
import {addItemToCart} from "../store/actions/cartAction"

interface ProductCardProps {
  product: ProductModel;
}

function ProductCard({product} : ProductCardProps, props:any){
 
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
      <button className={styles.productButtonCard}>
        <img src="/shopping-bag.svg" alt="image" />
        <div>COMPRAR</div>
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch: any){
  return{
    addToCart(cart: CartModel){
      const action = addItemToCart(cart);
      dispatch(action)
    }
  }
}

export default connect(mapDispatchToProps)(ProductCard);