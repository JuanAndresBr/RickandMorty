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
<<<<<<< HEAD:front/src/components/SearchBar.jsx
        props.onSearch(characterName)
        setCharacterName("")}}>
=======
        props.onSearch(characterName.name)
        setCharacterName({name: ""})}}>
>>>>>>> 621739357ba753c9c452deeb3cdbf55e2b2e044a:src/components/SearchBar.jsx
      <input
        className={styles.search}
        type="search"
        onChange={handleInputChange}
<<<<<<< HEAD:front/src/components/SearchBar.jsx
        value={characterName}
        placeholder="Type ID"
=======
        value={characterName.name}
>>>>>>> 621739357ba753c9c452deeb3cdbf55e2b2e044a:src/components/SearchBar.jsx
      />
      <button
      type="submit"
        className={styles.button}
<<<<<<< HEAD:front/src/components/SearchBar.jsx
        
        type="submit"
=======
>>>>>>> 621739357ba753c9c452deeb3cdbf55e2b2e044a:src/components/SearchBar.jsx
      >
        Agregar
      </button>
      </form>
      <button className={styles.button2} onClick={()=>props.onRandom()}>Random</button>
    </div>
  );
}
