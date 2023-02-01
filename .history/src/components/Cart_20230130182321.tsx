import styles from "../styles/Cart.module.css"
import CartProduct from "./CartProduct"
import BAG_DUMMY from "../data/BAG_DUMMY"

export default function Cart() {
    const products = BAG_DUMMY
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
                    {products.map((product, index) => (
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