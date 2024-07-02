const {createServer} = require("http");
// import {createServer} from "http";

const {createReadStream} = require("fs");

function contentType(extension){
    if(extension == "html") return "text/html";
    if(extension == "css") return "text/css";
    if(extension == "js") return "text/javascript";
    if(extension == "jpg" || extension == "jpeg") return "image/jpeg";
    if(extension == "png") return "image/png";
    if(extension == "json") return "application/json";
}

const servidor = createServer((peticion, respuesta) => {
    respuesta.writeHead(200, {"Content-type" : "text/html"});
    respuesta.write("algo");
    respuesta.end();
});

servidor.listen(process.env.PORT || 3000);