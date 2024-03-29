import React, { useState,useEffect } from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function Detail() {
const {detailId}= useParams();
const [character, setCharacter]=useState({});
useEffect(() => {
  axios(`http://localhost:3001/rickandmorty/detail/${detailId}`)
    .then((response) => response.data)
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
}, [detailId]);

  return( <div className={styles.contenido}>
    <div className={styles.Datos}>
    <h1>{character.name}</h1>    
    <h2>STATUS: {character.status}</h2>
    <h2>SPECIE: {character.species}</h2>
    <h2>GENDER: {character.gender}</h2> 
    <h2>ORIGIN: {character.origin?.name}</h2>
    </div>
    <img  src={character.image}></img>
  </div>)
}