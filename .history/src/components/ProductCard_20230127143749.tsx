import styles from "../styles/ProductCard.module.css"

interface ProductCardProps {
    product: {
      id: number;
      name: string;
      price: number;
      description: string;
      photo: string;
    };
  }
  
  export default function ProductCard({ product }: ProductCardProps) {
    return (
      <div className={styles.productCard}>
        <img
          className={styles.productImageCard}
          src={product.photo}
          alt="img"
        />
        <div className={styles.productDescriptionCard}>
          <div className={styles.productDescriptionCardRow}>
            <div className={styles.productTitleCard}>{product.name}</div>
            <div className={styles.productPriceCard}>R${product.price}</div>
          </div>
          <div className={styles.productTextCard}>{product.description}</div>
        </div>
        <div className={styles.productButtonCard}>
          <img src="/shopping-bag.svg" alt="image" />
          <div>COMPRAR</div>
        </div>
      </div>
    );
  }