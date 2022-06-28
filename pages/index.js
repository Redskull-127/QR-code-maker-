import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Body from "../components/Body";
import Genrate from "../components/Genrate";
import Aos from "aos";
import "aos/dist/aos.css";
import Scan from "../components/Scan";


export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>QT | QR</title>
        <meta name="QT | QR Code Generator" content="QT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Body />
      <div className={styles.main} data-aos="fade-up">
        <Genrate />
        <Scan />
      </div>
    </div>
  );
}
