import styles from "../styles/Cart.module.css"
import CartProduct from "./CartProduct"

export default function Cart() {
    return (
        <div className={styles.cartApp}>
            <div className={styles.cartAppBar}>
                <div className={styles.cartTitle}>
                    Carrinho de compras
                </div>
                <button className={styles.cartCloseButton}>x</button>
            </div>
            <div className={styles.cartContent}>
                <CartProduct/>
            </div>
            <div className={styles.cartContent}>
                <CartProduct/>
            </div>
            <div>
                <div>Total:</div>
                <div>R$798</div>
            </div>
        </div>
    )
}