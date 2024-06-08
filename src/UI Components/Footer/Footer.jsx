import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container d-flex align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-column flex-column">
        <p>Build With <span className={`${styles.heart_icon}`}><i className="fa-solid fa-heart"></i></span> 2024</p>
        <div className={`${styles.social} d-flex align-items-center justify-content-center`}>
          <span className={`${styles.txt}`}>Find Us:</span>
          <span className={styles.facebook}><i className="fa-brands fa-facebook"></i></span>
          <span className={styles.twitter}><i className="fa-brands fa-twitter"></i></span>
          <span className={styles.instagram}><i className="fa-brands fa-instagram"></i></span>
        </div>
      </div>
    </footer>
  )
}
export default Footer;