import productDumy from "../data/product_dummy"
import styles from "../styles/ProductCard.module.css"

// export default function ProductCard() {
//     return (
//         <div className={styles.productCard}>
//             <img className={styles.productImageCard} src={productDumy[0].image}
//                 alt="img" />
//             <div className={styles.productDescriptionCard}>
//                 <div className={styles.productDescriptionCardRow}>
//                     <div className={styles.productTitleCard}> Apple Watch Serias 4 GPS</div>
//                     <div className={styles.productPriceCard}>R$399</div>
//                 </div>
//                 <div className={styles.productTextCard}>Redesigned from scratch and completely revised.</div>
//             </div>
//             <div className={styles.productButtonCard}>
//                 <img src="/shopping-bag.svg" alt="image" />
//                 <div>COMPRAR</div>
//             </div>
//         </div>
//     )
// }
interface ProductCardProps {
    product: {
      id: number;
      name: string;
      price: number;
      text: string;
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
          <div className={styles.productTextCard}>{product.text}</div>
        </div>
        <div className={styles.productButtonCard}>
          <img src="/shopping-bag.svg" alt="image" />
          <div>COMPRAR</div>
        </div>
      </div>
    );
  }