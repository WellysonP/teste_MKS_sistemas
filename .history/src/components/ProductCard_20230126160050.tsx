import styles from "../styles/ProductCard.module.css"
export default function ProductCard() {
    return (
        <div className={styles.card}>
            <img className={styles.productImageCard} src="https://images-americanas.b2w.io/produtos/01/00/img/133839/3/133839352_1GG.jpg"
                alt="img" />
            <div className={styles.productContentCard}>
                <div className={styles.productTitleCard}> Apple Watch Serias 4 GPS</div>
                <div className={styles.productPriceCard}>R$399,0000</div>
            </div>
            <div>Redesigned from scratch and completely revised.</div>
            <div className={styles.productButtonCard}>
                <img src="/shopping-bag.svg" alt="image" />
            </div>
        </div>
    )
}