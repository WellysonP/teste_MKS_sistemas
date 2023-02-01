import styles from "../styles/Cart.module.css"
import CartProduct from "./CartProduct"
import { useState } from "react"

export default function Cart() {
    const [productsBag, setProductsBag] = useState([])
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
                        <CartProduct product={product} key={index} />
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