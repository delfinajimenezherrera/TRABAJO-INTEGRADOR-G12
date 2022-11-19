let queryString= location.search;
let queryStringToObject= new URLSearchParams (queryString);
let id= queryStringToObject.get("idPersonaje");

let apiKey = `c8c96a59cf4e2e778a6bf46883490734`; //mi api generado con la cuenta
let urlDetalleMovie= `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
let contenedor = document.querySelector(".contenedorpadre")

let imagen= document.querySelector(".imgpelicula");
let titulo= document.querySelector(".titulo");
let fecha= document.querySelector (".fecha");
let genero= document.querySelector (".genero");
let duracion= document.querySelector (".duracion");
let calificacion= document.querySelector (".calificacion");
let sinposis= document.querySelector(".sinposis");


fetch(urlDetalleMovie)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        imagen.src= `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
        titulo.innerText= data.original_title; 
        fecha.innerText= data.release_date;
        for (i=0; i< data.genres.length; i++){
            genero.innerHTML += `<a href="./detail-genres.html?id=${data.genres [i].id}"> ${data.genres[i].name}</a>`;
        }
        duracion.innerText= `${data.runtime} Minutos`; 
        sinposis.innerText= data.overview; 
        calificacion.innerText= `Calificacion: ${data.vote_average}`;

    })
    .catch(function (err) {
        console.log(err)
    })








        