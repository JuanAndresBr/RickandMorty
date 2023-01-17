// var http = require("http");
// const characters = require("../utils/data.js");

// const PORT = 3001;
// http
//   .createServer((req, res) => {
//     if (req.url.includes("rickandmorty/character")) {
//       // console.log("jhjfdhf")
//       var id = req.url.split("/");
//       id = Number(id.pop());
//       console.log(id);
//       const character = characters.find((ch) => {
//         return ch.id === id;
//       });
//       if (character) {
//         res.writeHead(200, { "Content-Type": "application/json" });

//         res.end(JSON.stringify(character));
//       } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("id not found");
//       }
//     } else {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("Route not found");
//     }
//   })
//   .listen(PORT, "localhost");




/////////////////////////////////////////////////////////////////////////////////
// var http = require("http");
// var getCharById = require("../controllers/getCharById.js");
// var getCharDetail = require("../controllers/getCharDetail.js");

// const PORT = 3000;
// http
//   .createServer((req, res) => {
//     if (req.url.includes("onsearch")) {
//       var id = req.url.split("/");
//       id = Number(id.pop());
//       getCharById(res, id);
      
//     } else if (req.url.includes("detail")) {
//       var id = req.url.split("/");
//       id = Number(id.pop());
//       getCharDetail(res, id);
//     } else {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("json not found");
//     }
//   })
//   .listen(PORT, "localhost");
