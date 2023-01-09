import Card from "./Card";
import styles from "./Favorites.module.css";
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../redux/actions";

function Favorites(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((e) => e.myFavorites);

  function handleClick(e) {
    e.preventDefault();
    if (e.target.name === "order") {
      console.log(myFavorites);
      dispatch(orderCards(e.target.value));
    } else {
      dispatch(filterCards(e.target.value));
    }
  }

  return (
    <div>
      <div className={styles.contenedor}>
        <select
          name="order"
          onClick={handleClick}
          defaultValue={"DEFAULT"}
          className={styles.select}
        >
          <option disabled value="DEFAULT">
            Select order
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select
          defaultValue={"DEFAULT"}
          name="filter"
          onClick={handleClick}
          className={styles.select}
        >
          <option disabled value="DEFAULT">
            Select filter
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styles.cartas}>
        {myFavorites?.map((e) => {
          return (
            <Card
              id={e.id}
              name={e.name}
              species={e.species}
              gender={e.gender}
              image={e.image}
              onClose={props.onClose}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
