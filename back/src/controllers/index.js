const axios = require("axios");
var fav=[]

const getCharacterId = function (req, res) {
  const { id } = req.params;
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(err.toString());
    });
};

const getDetailId = function (req, res) {
  const { detailId } = req.params;
  axios(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(err);
    });
};

const getFav = function (req, res) {
  res.status(200).end(JSON.stringify(fav))
};

const postFav = function (req, res) {
  fav.push(req.body)
  res.status(200).end(JSON.stringify(req.body))
};
const deleteFavId = function (req, res) {
  const {id}=req.params
  const character= fav.find(c=>c.id===Number(id))
  if(character){
    fav = fav.filter(e=>e.id !== Number(id))
    res.status(200).end(JSON.stringify(character))
  }else{
    res.status(400).end("este character ya no se encuentra en fav")
  }
};

module.exports = {
  getCharacterId,
  getDetailId,
  getFav,
  postFav,
  deleteFavId,
};
