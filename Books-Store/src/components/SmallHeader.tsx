import '../index.css' 
import styles from '../styles/header.module.css'

interface SmallHeaderProps {
  mainRoot: string;
  subRoot: string;
  pageTitle: string;
}

const SmallHeader: React.FC<SmallHeaderProps> = ({mainRoot, subRoot, pageTitle}) => {
  return (
    <>
      <div className="container" >
        <div className={styles.homePageMain}>
            <p className={styles.pageName}>{mainRoot} <span  style={{margin:"0px 5px"}}>&gt;</span ></p>
            <p className={styles.subRoot}>{subRoot}</p>
        </div>
        <div className={styles.pageTitle}>
          <p className={styles.titleStyle}>{pageTitle}</p>
        </div>
      </div>
    </>
  )
}

export default SmallHeader
