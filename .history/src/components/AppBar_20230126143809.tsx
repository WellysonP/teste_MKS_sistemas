import styles from "../styles/AppBar.module.css";
export default function AppBar() {
    return (
        <div className={styles.appBar}>
            <div className={styles.appLogo}>
                <div className={styles.title}>MKS</div>
                <div className={styles.subTitle}>Sistemas</div>
            </div>
            <div>
                <button className={styles.carButton}>
                    <img src="../public/Vector.svg" alt="image" />
                </button>
            </div>
        </div>
    )
}