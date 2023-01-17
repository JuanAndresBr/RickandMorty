import axios from 'axios'
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
  return function(dispatch){
    axios.post("http://localhost:3001/rickandmorty/fav", character).then((v)=>v.data).then((d)=>{
      dispatch(
        {
          type: "addFavorite",
          payload: d
        }
      )
    })
  }
  // return{
  //   type: "addFavorite",
  //   payload: character
  // }
}
export const deleteFavorite=(id)=>{
  return function(dispatch){
    axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`).then((v)=>v.data).then((d)=>{
      dispatch(
        {
          type: "deleteFavorite",
          payload: id
        }
      )
    })
  }
  // return{
  //   type: "deleteFavorite",
  //   payload: id
  // }
}

