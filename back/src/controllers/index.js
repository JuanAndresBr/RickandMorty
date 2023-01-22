const axios = require("axios");
var fav = [];

const getCharacterId = async function (req, res) {
  const { id } = req.params;
  try {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = result.data;
    const character = {
      id: data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getDetailId = function (req, res) {
  const { detailId } = req.params;
  try {
    const result = axios(
      `https://rickandmortyapi.com/api/character/${detailId}`
    );
    const data = result.data;
    const character = {
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
      status: data.status,
      origin: data.origin,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(200).json(error);
  }
};

const getFav = function (req, res) {
  res.status(200).end(JSON.stringify(fav));
};

const postFav = function (req, res) {
  fav.push(req.body);
  res.status(200).end(JSON.stringify(req.body));
};
const deleteFavId = function (req, res) {
  const { id } = req.params;
  const character = fav.find((c) => c.id === Number(id));
  if (character) {
    fav = fav.filter((e) => e.id !== Number(id));
    res.status(200).end(JSON.stringify(character));
  } else {
    res.status(400).end("este character ya no se encuentra en fav");
  }
};

module.exports = {
  getCharacterId,
  getDetailId,
  getFav,
  postFav,
  deleteFavId,
};
