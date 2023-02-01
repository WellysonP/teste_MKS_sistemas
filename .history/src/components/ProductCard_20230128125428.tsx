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
  const price = product.price
  const description = product.description
  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImageCard}
        src={product.photo}
        alt="img"
      />
      <div className={styles.productDescriptionCard}>
        <div className={styles.productDescriptionCardRow}>
          <div className={styles.productTitleCard}>
            {name}
          </div>
          <div className={styles.productPriceCard}>
            R${price.split(',')[0]}
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