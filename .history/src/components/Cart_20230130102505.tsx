import styles from "../styles/Cart.module.css"

export default function Cart() {
    return (
        <div className={styles.cart}>
            <div className={styles.cartTitle}>
                Carrinho de compras
            </div>
            <div className={styles.cartCloseButton}>X</div>
        </div>
    )
}