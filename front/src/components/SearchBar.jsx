import styles from "./SearchBar.module.css";
import React, { useState } from "react";

export default function SearchBar(props) {
  const [characterName, setCharacterName] = useState("");
  const handleInputChange = (e) => {
    setCharacterName(e.target.value);
  };
  return (
    <div className={styles.contenedor}>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.onSearch(characterName)
        setCharacterName("")}}>
      <input
        className={styles.search}
        type="search"
        onChange={handleInputChange}
        value={characterName}
        placeholder="Type ID"
      />
      <button
        className={styles.button}
        
        type="submit"
      >
        Agregar
      </button>
      </form>
      <button className={styles.button2} onClick={()=>props.onRandom()}>Random</button>
    </div>
  );
}
