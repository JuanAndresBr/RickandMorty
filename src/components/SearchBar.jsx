import styles from "./SearchBar.module.css";
import React, { useState } from "react";

export default function SearchBar(props) {
  const [characterName, setCharacterName] = useState({
    name: "",
  });
  const handleInputChange = (e) => {
    setCharacterName({ name: e.target.value });
  };
  return (
    <div className={styles.contenedor}>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.onSearch(characterName.name)
        setCharacterName({name: ""})}}>
      <input
        className={styles.search}
        type="search"
        onChange={handleInputChange}
        value={characterName.name}
      />
      <button
      type="submit"
        className={styles.button}
      >
        Agregar
      </button>
      </form>
      <button className={styles.button2} onClick={()=>props.onRandom()}>Random</button>
    </div>
  );
}
