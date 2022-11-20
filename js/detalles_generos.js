let apiKey = `c8c96a59cf4e2e778a6bf46883490734`; //mi api generado con la cuenta

let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('idPersonaje'); 

let generosPeli = "https://api.themoviedb.org/3/genre/movie/list?api_key=c8c96a59cf4e2e778a6bf46883490734&language=en-US"

// titulo en barras
fetch (generosPeli)
.then(function(response){
    return response.json();
})
.then(function(respuesta){
    console.log(respuesta)
let tituloGeneros = document.querySelector(".titulogen");
console.log(tituloGeneros)
for (let i=0; i<respuesta.genres.length; i++){
    if(id == respuesta.genres[i].id){
        tituloGeneros.innerText = `Peliculas de ${respuesta.genres[i].name} `
    }
}
})

// URL

let urlDetalleGeneroPeli = `https://api.themoviedb.org/3/discover/movie?api_key=c8c96a59cf4e2e778a6bf46883490734&language=en-US&with_genres=${id}&sort_by=popularity.desc`

let detGenPe = document.querySelector(".detalleGeneroPeli");

// Peliculas
fetch (urlDetalleGeneroPeli)
.then( function(response){
    return response.json();
})
.then(function(data){
    let finalHtml=""
    let info = data.results;
    console.log(info);
  
    for (let i=0; i<info.length; i++) {
        let titulo = info[i].title //vas agarrando dentro de la api, dependiendo de como se llame la seccion en la cual esta el titulo. Con el [i], se va modificando a medida que trascurre el id
        let fechaEstreno = info[i].release_date
        let imagen = info[i].backdrop_path
        let id = info[i].id
        
        finalHtml += `<a href="./detail- movie.html?idPersonaje=${id}">
        <article class="pelicula">
            <img class="imagenport" src="https://image.tmdb.org/t/p/w500/${imagen}">
            <div class= "titaño">
                <h3 class ="titulos">${titulo} </h3>
                <h3 class="fecha"> ${fechaEstreno}</h3>
            </div>
            </a>
        </article>`
    }
    detGenPe.innerHTML= finalHtml;
    return data
})

.catch(function(error){
    console.log(error)
    return error
})


// Series

let generosSeries = "https://api.themoviedb.org/3/genre/tv/list?api_key=c8c96a59cf4e2e778a6bf46883490734&language=en-US"

//titulo en barras
fetch (generosSeries)
.then(function(response){
    return response.json();
})
.then(function(respuesta){
    console.log(respuesta)
let tituloGeneros = document.querySelector(".titulogen");
console.log(tituloGeneros)
for (let i=0; i<respuesta.genres.length; i++){
    if(id == respuesta.genres[i].id){
        tituloGeneros.innerText = `Series de ${respuesta.genres[i].name} `
    }
}
})

// URL
let urlDetalleGeneroSerie =`https://api.themoviedb.org/3/discover/tv?api_key=c8c96a59cf4e2e778a6bf46883490734&language=en-US&with_genres=${id}&sort_by=popularity.desc`

let detGenSerie = document.querySelector(".detalleGeneroPeli");

// Traemos series
fetch (urlDetalleGeneroSerie)
.then( function(response){
    return response.json();
})
.then(function(data){
    let finalHtml=""
    let info = data.results;
    console.log(info);
  
    for (let i=0; i<info.length; i++) {
        let titulo = info[i].name //vas agarrando dentro de la api, dependiendo de como se llame la seccion en la cual esta el titulo. Con el [i], se va modificando a medida que trascurre el id
        let fechaEstreno = info[i].first_air_date
        let imagen = info[i].backdrop_path
        let id = info[i].id
        
        finalHtml += `<a href="./detail- movie.html?idPersonaje=${id}">
        <article class="pelicula">
            <img class="imagenport" src="https://image.tmdb.org/t/p/w500/${imagen}">
            <div class= "titaño">
                <h3 class ="titulos">${titulo} </h3>
                <h3 class="fecha"> ${fechaEstreno}</h3>
            </div>
            </a>
        </article>`
    }
    detGenSerie.innerHTML= finalHtml;
    return data
})

.catch(function(error){
    console.log(error)
    return error
})