import React from "react";
import { connect, useDispatch } from "react-redux";
import CartModel from "../models/CartModel";
import ProductModel from "../models/ProductModel";
import styles from "../styles/ProductCard.module.css"
import {addItemToCart} from "../store/actions/cartAction"

interface ProductCardProps {
  product: ProductModel;
}

function ProductCard({product} : ProductCardProps){
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
      // onClick={props.addToCart(product)}
      >
        <img src="/shopping-bag.svg" alt="image" />
        <div>COMPRAR</div>
      </button>
    </div>
  );
}

// function mapDispatchToProps(dispatch: any){
//   return{
//     addToCart(product: ProductModel){
//       const newCart = new CartModel({
//         id: product.id,
//         productId: product.id,
//         name: product.name,
//         price: product.price,
//         photo: product.photo,
//         quantity: 10
//       })
//       const action = addItemToCart(newCart);
//       dispatch(action)
//     }
//   }
// }

export default connect()(ProductCard);