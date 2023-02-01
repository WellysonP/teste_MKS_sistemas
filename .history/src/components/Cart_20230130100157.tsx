import styles from "../styles/Cart.module.css"

export default function Cart(){
    return(
        <div>
            <div className={styles.cartTitle}>
                Carrinho
            </div>
            <div className={styles.cartTitle}>
                de compras
            </div>
        </div>
    )
}