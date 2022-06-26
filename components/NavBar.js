import styles from "../styles/NavBar.module.css";
import { useEffect } from "react";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";

export default function NavBar() {
  return (
    <>
      <div className={styles.NavBar}>
        <div className={styles.start}>
          <a className="fa fa-qrcode" aria-hidden="true"></a>
        </div>
        <div className={styles.end}>
          <div className={styles.items}>
            <Link
              activeClass="active"
              to="generate"
              smooth={true}
              duration={500}
            >
              <a>Generate</a>
            </Link>
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
  );
}
