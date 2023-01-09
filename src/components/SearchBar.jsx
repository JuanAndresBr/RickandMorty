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
    <div>
      <input
        className={styles.search}
        type="search"
        onChange={handleInputChange}
      />
      <button
        className={styles.button}
        onClick={() => props.onSearch(characterName.name)}
      >
        Agregar
      </button>
      <button className={styles.button2} onClick={()=>props.onRandom()}>Random</button>
    </div>
  );
}
