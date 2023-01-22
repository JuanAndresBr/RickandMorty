import axios from "axios";
export const orderCards = (id) => {
  return {
    type: "ORDER",
    payload: id,
  };
};
export const filterCards = (status) => {
  return {
    type: "FILTER",
    payload: status,
  };
};
export const addFavorite = (character) => {
  return async function (dispatch) {
    try {
      const result = await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        character
      );
      dispatch({
        type: "addFavorite",
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteFavorite = (id) => {
  return async function (dispatch) {
    try {
      const result = await axios.delete(
        `http://localhost:3001/rickandmorty/fav/${id}`
      );
      dispatch({
        type: "deleteFavorite",
        payload: id,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
