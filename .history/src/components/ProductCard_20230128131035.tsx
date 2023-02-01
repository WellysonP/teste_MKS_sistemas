import styles from "../styles/ProductCard.module.css"

interface ProductCardProps {
  props: {
    id: number;
    name: string;
    price: string;
    description: string;
    photo: string;
  };
}

export default function ProductCard({ props }: ProductCardProps) {
  const name = props.name
  const price = props.price
  const photo = props.photo
  const description = props.description
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