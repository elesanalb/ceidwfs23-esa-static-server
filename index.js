const {createServer} = require("http");
// import {createServer} from "http";

const {createReadStream} = require("fs");

const servidor = createServer((peticion, respuesta) => {
    respuesta.writeHead(200, {"Content-type" : "text/html"});
    respuesta.write("algo");
    respuesta.end();
});

servidor.listen(process.env.PORT || 3000);