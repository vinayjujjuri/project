import styles from './header.module.css';

export default function MyFirstComponent() {
    return (
        <div className={styles.container}>
            
            <h1 className={styles.header}>My React Application</h1>
        </div>
    )
}