// import "../index.css"; 
import styles from '../styles/header.module.css' 
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.mainSearchBox}>
        <div className={styles.mainSearchBoxItems}>
          <input type="text" className={styles.searchInput}  placeholder="What are you looking for..."/>
        </div>
        <div className={styles.mainSearchBoxItems}>
          <button className={`btn ${styles.searchBtn}`} style={{background:"green", borderRadius:'5px', width:"136px", height:"40px"}} > <FaSearch size="19" /> <span style={{marginLeft:"5px"}}>Search</span> </button>

        </div>
        <div className={styles.mainSearchBoxItems}>

          <button className="btn" style={{backgroundColor:'var(--red)', borderRadius:"5px", width:"136px", height:"40px"}} >Cancle</button>
        </div>
       
      </div>
    </div>
  )
}

export default SearchBar
