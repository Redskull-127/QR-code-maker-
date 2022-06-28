import styles from "../styles/Scan.module.css";

export default function Scan() {
    const previewStyle = {
        height: 240,
        width: 320,
      }
      
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.text}>
          Scan a QR <i className="fa fa-qrcode" aria-hidden="true"></i>{" "}
        </h1>
      </div>
    </>
  );
}
