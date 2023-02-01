import styles from "../styles/CartProduct.module.css"

export default function CartProduct() {
    return (
        <div>
            <div className={styles.cartProduct}>
                <img src="https://http2.mlstatic.com/D_NQ_NP_750485-MLM51559388158_092022-O.jpg"
                    alt="iphone" />
                <div className={styles.cartProductTitle}>
                    Iphone 14 PRO MAX 250gb gold
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
                    R$399
                </div>
            <div className={styles.cartProductButtonLocation}>
                <div className={styles.cartProductRemoveButton}>x</div>
            </div>
        </div>
            </div>
    )
}