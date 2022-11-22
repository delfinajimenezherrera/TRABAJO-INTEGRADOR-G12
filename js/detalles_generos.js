
let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('idPersonaje'); 
let media = queryStringToObject.get('media')
console.log(media)

let generosPeli = "https://api.themoviedb.org/3/genre/movie/list?api_key=c8c96a59cf4e2e778a6bf46883490734&language=en-US"
let detGenPe = document.querySelector(".detalleGeneroPeli");
let titulo = document.querySelector(".titulogenpeli")

// titulo en barras que cambia

fetch (generosPeli)
.then(function(response){
    return response.json();
})
.then(function(rta){
    console.log(rta)
let tituloGeneros = document.querySelector(".titulogenpeli");
console.log(tituloGeneros)
for (let i=0; i<rta.genres.length; i++){
    if(id == rta.genres[i].id){
        tituloGeneros.innerText = `Peliculas de ${rta.genres[i].name} `
    }
}
})


// URL

let urlDetalleGeneroPeli = `https://api.themoviedb.org/3/discover/movie?api_key=c8c96a59cf4e2e778a6bf46883490734&language=en-US&with_genres=${id}&sort_by=popularity.desc`



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
        
        finalHtml += `<a class= "bordegen" href="./detail- movie.html?idPersonaje=${id}">
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
