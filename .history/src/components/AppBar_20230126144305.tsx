import styles from "../styles/AppBar.module.css";
export default function AppBar() {
    return (
        <div className={styles.appBar}>
            <div className={styles.appLogo}>
                <div className={styles.title}>MKS</div>
                <div className={styles.subTitle}>Sistemas</div>
            </div>
            <div className={styles.carButton}>
                <button>
                    <img src="Vector.svg" alt="image" />
                </button>
            </div>
        </div>
    )
}