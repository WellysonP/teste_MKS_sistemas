import CartModel from "../models/CartModel"
import styles from "../styles/CartProduct.module.css"

interface CartProps{
    product: CartModel
}

export default function CartProduct({product}: CartProps) {
    return (
        <div>
            <div className={styles.cartProduct}>
                <img src={product.photo}
                    alt="img" />
                <div className={styles.cartProductTitle}>
                    {product.name}
                </div>
                <div className={styles.cartProductQuantity}>
                    <div>Qtd:</div>
                    <div className={styles.cartProductQuantityButtons}>
                        <button className={styles.cartProductQuantityContent}>-</button>
                        <div className={styles.cartProductQuantityLine}></div>
                        <div className={styles.cartProductQuantityContent}>1</div>
                        <div className={styles.cartProductQuantityLine}></div>
                        <button className={styles.cartProductQuantityContent}>+</button>
                    </div>
                </div>
                <div className={styles.cartProductprice}>
                    {product.price}
                </div>
                <div className={styles.cartProductButtonLocation}>
                    <button className={styles.cartProductRemoveButton}>x</button>
                </div>
            </div>
        </div>
    )
}