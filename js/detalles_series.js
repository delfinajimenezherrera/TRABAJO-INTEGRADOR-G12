//capturo el dom
let queryString= location.search; // capturo qs, le asigno ol con la prop location.search (quedan guardados los datos)
let queryStringToObject= new URLSearchParams(queryString); // obj lit
let serie = queryStringToObject.get("idPersonaje");


let urlDetalleSerie = `https://api.themoviedb.org/3/tv/${serie}?api_key=c8c96a59cf4e2e778a6bf46883490734`;
let urlDondeVerSerie = `https://api.themoviedb.org/3/tv/${serie}/watch/providers?api_key=c8c96a59cf4e2e778a6bf46883490734`;
let urlVerMasSerie = `https://api.themoviedb.org/3/tv/${serie}/recommendations?api_key=c8c96a59cf4e2e778a6bf46883490734&language=en-US&page=1`;
let detSerie = document.querySelector(".contenedorpadre")


console.log (urlDetalleSerie)

// guardamos en cada variable el elemento q capturamos
let imagen= document.querySelector(".imgserie");
let titulo= document.querySelector(".titulos");
let fecha= document.querySelector (".fechas");
let genero= document.querySelector (".generos");
let duracion= document.querySelector (".tiempo");
let calificacion= document.querySelector (".calificaciones");
let sinopsis= document.querySelector(".resumen");
let portadaSerie = document.querySelector(".imgserie");
let button = document.querySelector(".botonFavs");
let verMasSerie = document.querySelector(".verMasSer");
let dondeVerSerie = document.querySelector(".dondeVerSer");
let recom = document.querySelector(".recomendarSerie")


// fetch detalle serie
fetch (urlDetalleSerie) // la info viene en formato json
    .then(function(response){
        return response.json() // .json decodifica la info y la convierte en tipo de dato (array o obj, etc)
    })

    .then(function (data) {
        console.log(data)

        imagen.src = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
        titulo.innerText= data.original_name; 
        fecha.innerText= data.first_air_date;
        for (i=0; i< data.genres.length; i++){
             genero.innerHTML += `<a class="gendet" href="detail-genres-series.html?idPersonaje=${data.genres[i].id}">${data.genres[i].name}</a>`;
        }
        duracion.innerText= `${data.episode_run_time} Minutos`; 
        sinopsis.innerText= data.overview; 
        calificacion.innerText= `Calificacion: ${data.vote_average}`;
        return data
    })
    .catch(function (error) {
        console.log(error)

        return error
    })
   
     //FETCH mostrar donde ver la serie
    
     fetch(urlDondeVerSerie)
     .then(function(response){
         return response.json()
     })
     .then (function(data){
         console.log(data)
         let dondeVer="";
         for (let i=0; i< data.length ; i++){
             dondeVer += `<ul class= "dondeVerSer">${data.results[i].producer_companies}</ul>`;
         }

         dondeVerSerie.innerHTML+=dondeVer
     })
     .catch(function(error){
         console.log(error);
         return error
     })
     
//recomendacion
  fetch(urlVerMasSerie)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data)
    let recomendaciones="";  
    for (let i=0; i<4; i++){
        console.log(data.results[i]);
        recomendaciones += `<article class="portada">
        <a href="./detail-serie.html?idPersonaje=${data.results[i].id}">
        <img class= "fotorecom" src= "https://image.tmdb.org/t/p/w500/${data.results[i].backdrop_path}">
        <p >  ${data.results[i].name}</p>
        <p> ${data.results[i].first_air_date}</p>
        </a>
    </article>`

    }
    recom.innerHTML = recomendaciones;
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

let mostrarRecomendaciones = "";

verMasSerie.addEventListener("click", function(e) {
    e.preventDefault();
    if (mostrarRecomendaciones == true) {
        verMasSerie.innerText="Ver recomendaciones";
    } 
}) 
   
//favoritos

  
// un id por cada pelicula que agregas a favoritos. cuando agureges etsas metineod el id ne le local storage. Cuanod cargues la pagina de favortitos vas a hacer un fecthn 
let seriefav=[]

let recuperoStorage = localStorage.getItem("seriefav")

if (recuperoStorage != null) {
    seriefav =  JSON.parse(recuperoStorage)
}

if (seriefav.includes(serie)) {
    button.innerText = "Quitar de favoritos";
}

button.addEventListener("click", function(e) {
    e.preventDefault();

    if (seriefav.includes(serie)) {
       let indice = seriefav.indexOf(serie)
       seriefav.splice(indice, 1);
       button.innerText = "Agregar a Favoritos";
    }else{
        seriefav.push(serie)
        button.innerText = "Quitar de favoritos"
    }

    let favsToString = JSON.stringify(seriefav);
    localStorage.setItem("seriefav", favsToString )
})
