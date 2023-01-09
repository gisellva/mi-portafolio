
export default function cursos(req, res) {
    res.status(200).json
    ({cursos: 
     [
        {"texto":"curso profesional de javaScript","id":0,"img":"https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png"},
        {"texto":"Curso de Closures y Scope en JavaScript","id":1,"img":"https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge-piezas-clousures-scope-javascript-af54a63d-00d6-42e3-96c3-731028480418.png"},
        {"texto":"Curso de Asincronismo con JavaScript","id":2,"img":"https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge-asincro-js-9f17b092-47d0-4c8a-a59d-67714aa18db3.png"},
        {"texto":"Curso de Manipulación del DOM","id":3,"img":"https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge-manipulacion-dom-js-68f056c0-11d4-4533-8c75-693db60d85f8.png"},
        {"texto":"Curso de React.js: Manejo Profesional del Estado","id":4,"img":"https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/react-a4cc5125-0dee-4ec4-a3e3-f1d799973cfd.png"},
        {"texto":"Curso de React Avanzado","id":5,"img":"https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge-reactjs-avanzado-bc9f61e9-9a1a-485b-b0ad-43a172cdb0aa.png"},
        {"texto":"Curso de Next.js","id":6,"img":"https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge-nextjs-2259fc68-f86b-486e-bc09-95311a887985.png"},
        {"texto":"Curso de Webpack","id":7,"img":"https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge-webpack-3e3867f2-5bcf-4a7e-9af2-cf735850a791.png"},
        {"texto":"Curso de Consumo de API REST con JavaScript","id":8,"img":"https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/image-0ca92613-cd68-4147-993c-751978c2a554.png"},
    ] })
  }
  