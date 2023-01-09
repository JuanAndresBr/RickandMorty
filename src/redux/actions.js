export const orderCards=(id)=>{
  
  return{
    type: "ORDER",
    payload: id
  }
}
export const filterCards=(status)=>{
  
  return{
    type: "FILTER",
    payload: status
  }
}
export const addFavorite=(character)=>{
  
  return{
    type: "addFavorite",
    payload: character
  }
}
export const deleteFavorite=(id)=>{
  return{
    type: "deleteFavorite",
    payload: id
  }
}

