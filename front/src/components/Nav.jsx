import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
export default function Nav(props) {
  return (
    <div className={styles.navBar}>
      <div className={styles.Links}>
        <Link className={styles.Link} to="/home">
          <h2>Home</h2>
        </Link>
        <Link className={styles.Link} to="/about">
          <h2>About</h2>
        </Link>
      </div>

      <SearchBar
        onSearch={props.onSearch}
        onRandom={props.onRandom}
      ></SearchBar>
      <Link to="/favorites"><button className={styles.LogOut} >My favorites</button></Link>
      <Link to="/portfolio"> <button className={styles.LogOut}>Portfolio</button></Link>
      
      <button className={styles.LogOut} onClick={()=>props.logOut()}>Log out</button>
    </div>
  );
}
