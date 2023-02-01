import styles from "../styles/Cart.module.css"
import CartProduct from "./CartProduct"

export default function Cart() {
    return (
        <div className={styles.cartApp}>
            <div className={styles.cartAppBar}>
                <div className={styles.cartTitle}>
                    Carrinho de compras
                </div>
                <div className={styles.cartCloseButton}>X</div>
            </div>
            <div>
                <CartProduct/>
            </div>
        </div>
    )
}