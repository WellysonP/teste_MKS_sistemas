import styles from "../styles/ProductCard.module.css"

interface ProductCardProps {
    product: {
      id: number;
      name: string;
      price: number;
      photo: string;
      image: string;
    };
  }
  
  export default function ProductCard({ product }: ProductCardProps) {
    return (
      <div className={styles.productCard}>
        <img
          className={styles.productImageCard}
          src={product.image}
          alt="img"
        />
        <div className={styles.productDescriptionCard}>
          <div className={styles.productDescriptionCardRow}>
            <div className={styles.productTitleCard}>{product.name}</div>
            <div className={styles.productPriceCard}>R${product.price}</div>
          </div>
          <div className={styles.productTextCard}>{product.photo}</div>
        </div>
        <div className={styles.productButtonCard}>
          <img src="/shopping-bag.svg" alt="image" />
          <div>COMPRAR</div>
        </div>
      </div>
    );
  }