import styles from "../styles/AppBar.module.css";
export default function AppBar() {
    return (
        <div className={styles.appBar}>
            <div className={styles.appLogo}>
                <div className={styles.title}>MKS</div>
                <div className={styles.subTitle}>Sistemas</div>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    )
}