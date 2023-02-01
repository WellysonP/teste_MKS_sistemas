import ProductModel from "../models/ProductModel";
import styles from "../styles/ProductCard.module.css"

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    description: string;
    photo: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const name = product.name
  const price = parseInt(product.price)
  const photo = product.photo
  const description = product.description
  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImageCard}
        src={photo}
        alt="img"
      />
      <div className={styles.productDescriptionCard}>
        <div className={styles.productDescriptionCardRow}>
          <div className={styles.productTitleCard}>
            {name}
          </div>
          <div className={styles.productPriceCard}>
            R${price.toLocaleString()}
          </div>
        </div>
        <div className={styles.productTextCard}>
          {description}
        </div>
      </div>
      <div className={styles.productButtonCard}>
        <img src="/shopping-bag.svg" alt="image" />
        <div>COMPRAR</div>
      </div>
    </div>
  );
}