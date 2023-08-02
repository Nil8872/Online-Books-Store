import '../index.css'
import styles from "../styles/header.module.css"; 
import tatvaLogo from "../assets/tatvaLogo.png";
function Footer() {
  return (
    <>
      <div className="footerMain" style={{}}>
      <div className={styles.logo}>
              <img src={tatvaLogo} alt="Loading..." />
      </div>
      <div>
        <p className='copyRights'>&copy; 2023 Tatvasoft com. All rights reserved</p>
      </div>
      </div>
    </>
  )
}

export default Footer
