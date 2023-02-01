import styles from "../styles/Cart.module.css"
import CartProduct from "./CartProduct"
import { useState } from "react"
import { connect } from "react-redux"
import ProductModel from "../models/ProductModel"
import CartModel from "../models/CartModel"
import BAG_DUMMY from "../data/BAG_DUMMY"

function Cart(props: any) {
    const products = BAG_DUMMY
    console.log(props.cart)
    const [productsBag, setProductsBag] = useState(products)
    return (
        <div className={styles.cartApp}>
            <div className={styles.cartAppBar}>
                <div className={styles.cartTitle}>
                    Carrinho de compras
                </div>
                <button className={styles.cartCloseButton}>x</button>
            </div>
            <div className={styles.cartProductCards}>
                <div className={styles.cartContent}>
                    {productsBag.map((product, index) => (
                        <CartProduct cart={product} key={index} />
                    ))}
                </div>
            </div>
            <div className={styles.test2}>
                <div className={styles.CartProductTotalValue}>
                    <div className={styles.CartProductTotal}>Total:</div>
                    <div className={styles.CartProductValue}>R$798</div>
                </div>
                <div className={styles.cartProductFooter}>Finalizar Compra</div>
            </div>
        </div>
    )
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

export default connect(mapStateToProps)(Cart)