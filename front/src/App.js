import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail";
import Forms from "./components/Forms";
import Favorites from "./components/Favorites";
import Error from "./components/Error";
import Portfolio from "./components/Portfolio";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  function onClose(id) {
    setCharacters(characters.filter((c) => c.id !== id));
  }
  const username = "bravobenitezjuanandres@gmail.com";
  const password = "juan12";
  const [access, setAccess] = useState(false);
  function login(userData) {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home");
    } else {
      window.alert("Usuario incorrecto");
    }
  }
  function logOut() {
    setAccess(false);
    navigate("/");
  }
  function onRandom() {
    var x = Math.floor(Math.random() * 826 + 1);
    if (repetido(characters, x)) {
      onRandom();
    } else {
      onSearch(x);
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function repetido(id) {
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].id === Number(id)) {
        return true;
      }
    }
    return false;
  }

  function onSearch(character) {
    if (repetido(character)) {
      window.alert("Personaje repetido");
    } else {
      try {
        const result = axios(
          `http://localhost:3001/rickandmorty/character/${character}`
        );
        const data = result.data;
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {useLocation().pathname === "/" ? null : (
        <Nav onSearch={onSearch} logOut={logOut} onRandom={onRandom}></Nav>
      )}

      <hr></hr>
      <Routes>
        <Route path="/" element={<Forms login={login}></Forms>}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/error" element={<Error />}></Route>
        {
          <Route
            path="*"
            element={<Navigate to="/" replace></Navigate>}
          ></Route>
        }
      </Routes>
      <hr></hr>
    </div>
  );
}

export default App;
