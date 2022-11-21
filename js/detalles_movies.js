let queryString= location.search;
let queryStringToObject= new URLSearchParams (queryString);
let pelicula= queryStringToObject.get("idPersonaje");

let apiKey = "c8c96a59cf4e2e778a6bf46883490734"; //mi api generado con la cuenta
let urlDetalleMovie= `https://api.themoviedb.org/3/movie/${pelicula}?api_key=${apiKey}&language=en-US`;
let urlDondeVerPeli = `https://api.themoviedb.org/3/movie/${pelicula}/watch/providers?api_key=${apiKey}`;
let contenedor = document.querySelector(".contenedorpadre")

let imagen= document.querySelector(".imgpelicula");
let titulo= document.querySelector(".titulo");
let fecha= document.querySelector (".fecha");
let genero= document.querySelector (".genero");
let duracion= document.querySelector (".duracion");
let calificacion= document.querySelector (".calificacion");
let sinposis= document.querySelector(".sinposis");
let button = document.querySelector(".botonFavs"); 
let verMas = document.querySelector(".verMas");
let dondeVer = document.querySelector(".dondeVer");



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
            genero.innerHTML += `<a href="./detail-genres.html?id=${data.genres [i].pelicula}"> ${data.genres[i].name}</a>`;
        }
        duracion.innerText= `${data.runtime} Minutos`; 
        sinposis.innerText= data.overview; 
        calificacion.innerText= `Calificacion: ${data.vote_average}`;

    })
    .catch(function (err) {
        console.log(err)
    })

    // FETCH mostrar donde ver la pelicula
    fetch(urlDondeVerPeli)
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        console.log( data)
        let dondeVerPelicula ="";
        for (let i=0; i< data.results.US.flatrate.length; i++){
            dondeVerPelicula += `<li class= "dondeVer">${data.results.US.flatrate[i].provider_name}</li>`;
        }
        dondeVer.innerHTML+=dondeVerPelicula;
    })
    .catch(function(error){
        console.log(error);
        return error
    })

// FETCH  RECOMENDACION!!*

// un id por cada pelicula que agregas a favoritos. cuando agureges etsas metineod el id ne le local storage. Cuanod cargues la pagina de favortitos vas a hacer un fecthn 
let favortios= []
let recuperoStorage= localStorage.getItem("favortios")
//trasnformar datos en un array de json
if (recuperoStorage != null){
    favortios= JSON.parse(recuperoStorage);
}

//Capturar un elemento del dom que refiera a favoritos 
// Chequear que el id este en el array para poder cambiar el texto al usuario 
//vamos a crear un condicional y si lo incluye hay que escribir el nombre con el cual lo guardamos y ponerle un inner text 
if (favortios.includes (pelicula)){
    button.innerText= "Sacar de favoritos"
}
// Cuando el usuario haga clic en agregar a favoritos → agregue ese id dentro del array 
button.addEventListener ("click", function(e) {
        //comportamiento por default
    e.preventDefault();
    if (favortios.includes(pelicula)){
        // Si lo incluye: lo que tiene que hacer es sacarlo
            //1. Buscar la posición en la cual está el id y después borrarla (línea 60)
            //2.Poner el texto: agregar a favoritos 

        let indice= favortios.indexOf(pelicula);
        favortios.splice (indice,1);
        button.innerText= "Agregar a favoritos";    
    }
    else {
        //SI el id no lo incluye: hay que agregarlo 
        favortios.push (pelicula); 
        button.innerText= "Sacar de favoritos";
    }
    let pasarAString= JSON.stringify(favortios);
    localStorage.setItem("favoritos",pasarAString)
    console.log (localStorage)
}) 








        