let queryString= location.search;
let queryStringToObject= new URLSearchParams (queryString);
let pelicula= queryStringToObject.get("idPersonaje");

let apiKey = "c8c96a59cf4e2e778a6bf46883490734"; //mi api generado con la cuenta
let urlDetalleMovie= `https://api.themoviedb.org/3/movie/${pelicula}?api_key=${apiKey}&language=en-US`;
let urlDondeVerPeli = `https://api.themoviedb.org/3/movie/${pelicula}/watch/providers?api_key=${apiKey}`;
let urlVerMasPeli = `https://api.themoviedb.org/3/movie/${pelicula}/recommendations?api_key=${apiKey}`;
let contenedor = document.querySelector(".contenedorpadre")

let imagen= document.querySelector(".imgpelicula");
let titulo= document.querySelector(".titulo");
let fecha= document.querySelector (".fecha");
let genero= document.querySelector (".genero");
let duracion= document.querySelector (".duracion");
let calificacion= document.querySelector (".calificacion");
let sinposis= document.querySelector(".sinposis");
let button = document.querySelector(".botonFavs"); 
let verMasPelis = document.querySelector(".verMasMovies");
let dondeVerPeli = document.querySelector(".dondeVerPe");
let recom = document.querySelector(".recomendarPeli")

//DETALLE DE LA PELICULA

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
            genero.innerHTML += `<a class="gendet" href="./detail-genres.html?idPersonaje=${data.genres[i].id}"> ${data.genres[i].name}</a>`;
        }
        duracion.innerText= `${data.runtime} Minutos`; 
        sinposis.innerText= data.overview; 
        calificacion.innerText= `Calificacion: ${data.vote_average}`;

    })
    .catch(function (err) {
        console.log(err)
    })

//RECOMENDACION
fetch(urlVerMasPeli)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
       console.log(data)
        let recomendaciones = ""
        for (let i=0; i<4; i++){
            console.log(data.results[i]);
            recomendaciones +=  `<article class="portada">
            <a class="borde" href="./detail- movie.html?idPersonaje=${data.results[i].id}">
            <img class= "fotorecom" src= "https://image.tmdb.org/t/p/w500/${data.results[i].backdrop_path}">
            <p> ${data.results[i].original_title}</p>
            <p> ${data.results[i].release_date}</p>
            </a>
        </article>`
    }
    recom.innerHTML=recomendaciones;
    return data

    })
    .catch(function(error){
        console.log(error);
    })
    
    verMasPelis.addEventListener("click", function(re) {
        re.preventDefault();
        verMasPelis.innerText="Ver recomendaciones";
        recom.style.display= "block"
        } )

// WATCH PROVIDERS DONDE VER
fetch(urlDondeVerPeli)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
     console.log(data);
     
     let dondeVerPelicula ="";
     for (let i=0; i<  data.length; i++){
         dondeVerPelicula += `<ul class= "dondeVerPe"> ${data.results[i].producer_companies}</ul>`
     }
     dondeVerPeli.innerHTML+=dondeVerPelicula;
    })

    .catch(function(error){
        console.log(error);
        return error
    })


/* let queryString= location.search;
let queryStringToObject= new URLSearchParams (queryString);
let pelicula= queryStringToObject.get("idPersonaje");

let apiKey = "c8c96a59cf4e2e778a6bf46883490734"; //mi api generado con la cuenta
let urlDetalleMovie= `https://api.themoviedb.org/3/movie/${pelicula}?api_key=${apiKey}&language=en-US`;
let urlDondeVerPeli = `https://api.themoviedb.org/3/movie/${pelicula}/watch/providers?api_key=${apiKey}`;
let urlVerMasPeli = `https://api.themoviedb.org/3/movie/${pelicula}/recommendations?api_key=${apiKey}`;
let contenedor = document.querySelector(".contenedorpadre")

let imagen= document.querySelector(".imgpelicula");
let titulo= document.querySelector(".titulo");
let fecha= document.querySelector (".fecha");
let genero= document.querySelector (".genero");
let duracion= document.querySelector (".duracion");
let calificacion= document.querySelector (".calificacion");
let sinposis= document.querySelector(".sinposis");
let button = document.querySelector(".botonFavs"); 
let verMasPelis = document.querySelector(".verMasMovies");
let dondeVerPeli = document.querySelector(".dondeVerPe");
let recom = document.querySelector(".recomendarPeli")



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
            genero.innerHTML += `<a class="gendet" href="./detail-genres.html?idPersonaje=${data.genres[i].id}"> ${data.genres[i].name}</a>`;
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
        for (let i=0; i<  data.length; i++){
            dondeVerPelicula += `<ul class= "dondeVerPe"> ${data.results[i].producer_companies}</ul>`
        }
        dondeVerPeli.innerHTML+=dondeVerPelicula;
    })
    .catch(function(error){
        console.log(error);
        return error
    })

// FETCH  RECOMENDACION!!*
 fetch(urlVerMasPeli)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data)
    let recomendaciones="";  
    for (let i=0; i<4; i++){
        console.log(data.results[i]);
        recomendaciones +=  `<article class="portada">
        <a class="borde" href="./detail- movie.html?idPersonaje=${data.results[i].id}">
        <img class= "fotorecom" src= "https://image.tmdb.org/t/p/w500/${data.results[i].backdrop_path}">
        <p> ${data.results[i].original_title}</p>
        <p> ${data.results[i].release_date}</p>
        </a>
    </article>`

    }
    recom.innerHTML=recomendaciones;
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

let mostrarRecomend = "";

verMasPelis.addEventListener("click", function(e) {
    e.preventDefault();
    if (mostrarRecomend == true) {
        verMasPelis.innerText="Ver recomendaciones";
    } 
}) */

//FAVORITOS
// un id por cada pelicula que agregas a favoritos. cuando agregues estas metiendo el id en le local storage. Cuando cargues la pagina de favortitos vas a hacer un fetch 
let favoritos=[]

let recuperoStorage = localStorage.getItem("favoritos")

if (recuperoStorage != null) {
    favoritos =  JSON.parse(recuperoStorage)
}

if (favoritos.includes(pelicula)) {
    button.innerText = "Quitar de favoritos";
}

button.addEventListener("click", function(e) {
    e.preventDefault();

    if (favoritos.includes(pelicula)) {
       let indice = favoritos.indexOf(pelicula)
       favoritos.splice(indice, 1);
       button.innerText = "Agregar a Favoritos";
    }else{
        favoritos.push(pelicula)
        button.innerText = "Quitar de favoritos"
    }

    let favsToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favsToString )
}) 