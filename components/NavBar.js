import styles from "../styles/NavBar.module.css";
import { Badge } from '@chakra-ui/react'

export default function NavBar() {
  return(
    <>
        <div className={styles.NavBar}>
            <div className={styles.start}>
                <a>QT</a>
            </div>
            <div className={styles.end}>
                <div className={styles.items}>
                    <a>Home</a>
                    <div className={styles.dot}></div>
                </div>
                <div className={styles.items}>
                    <a>About</a>
                    <div className={styles.dot}></div>
                </div>
                <div className={styles.items}>
                    <a>Support</a>
                    <div className={styles.dot}></div>
                </div>
            </div>
        </div>
    </>
  )
}
