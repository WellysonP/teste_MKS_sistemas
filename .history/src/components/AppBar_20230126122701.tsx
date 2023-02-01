import styles from "../styles/AppBar.module.css";
export default function AppBar() {
    return (
        <div className={styles.appBar}>
            <div className={styles.title}>MKS</div>
            <div className={styles.subtitle}>Sistemas</div>
        </div>
    )
}