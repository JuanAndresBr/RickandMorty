const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addFavorite":
      const copia = [...state.allCharacters, action.payload];
      return {
        ...state,
        myFavorites: copia,
        allCharacters: copia,
      };
    case "deleteFavorite":
      const result = state.allCharacters.filter(e => e.id !== action.payload);
      return { ...state,allCharacters: result, myFavorites: result };
    case "FILTER":
      const sameGender = state.allCharacters.filter(
        (e) => e.gender === action.payload
      );
      return { ...state, myFavorites: sameGender };
    case "ORDER":
      const copy=[...state.allCharacters]
      const ordenado= copy.sort((x, y) => x.id - y.id);
      if (action.payload === "Descendente") {
        return { ...state, myFavorites: ordenado.reverse() };
      }else{
        return { ...state, myFavorites: ordenado }; 
      }
      
    default:
      return { ...state };
  }
};
export default rootReducer;
