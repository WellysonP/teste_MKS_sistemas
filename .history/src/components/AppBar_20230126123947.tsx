import styles from "../styles/AppBar.module.css";
export default function AppBar() {
    return (
        <div className={styles.appBar}>
            <div>
                <div className={styles.title}>MKS</div>
                <div className={styles.subTitle}>Sistemas</div>
            </div>
            <div>
                <button>
                    car
                </button>
            </div>
        </div>
    )
}