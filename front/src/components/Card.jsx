import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

function Card(props) {
  //console.log(props)
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    props.myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [props.myFavorites]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);

    }
  }
  return (
    <div className={styles.carta}>
      <div className={styles.header}>
      {isFav ? (
        <button className={styles.fav} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.fav} onClick={handleFavorite}>🤍</button>
      )}
      <button className={styles.button} onClick={() => props.onClose(props.id)}>
        X
      </button>
      </div>
 
      <img className={styles.image} src={props.image} alt="" />
      <Link className={styles.name} to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <div className={styles.text}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  );
}


const mapStateToProps=(state)=>{
  return{
    myFavorites: state.myFavorites
  }
}
export default connect(mapStateToProps, {addFavorite,deleteFavorite})(Card);
