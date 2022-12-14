let apiKey = "c8c96a59cf4e2e778a6bf46883490734" //mi api generado con la cuenta
let urlPeliculasPopu = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
let urlSeriesPopu = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
let urlLoMasVistoPeli= `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
let seccion= document.querySelector(".peliculaspop")
let seccion2= document.querySelector (".seriesspop")
let seccion3= document.querySelector (".lomasvisto")
//agarraste ka url y querias que re deuleva todos los datos en modo json 
fetch(urlPeliculasPopu)

.then(function(response){
    return response.json()
})


.then(function (data) {
    console.log(data)
    let vacioHTML="" //vacio para que se vaya rellenando a medida que pasa el for
    let info = data.results;
    for (let i=0; i<5; i++) {
        let titulo = info[i].title //vas agarrando dentro de la api, dependiendo de como se llame la seccion en la cual esta el titulo. Con el [i], se va modificando a medida que trascurre el id
        let fechaEstreno = info[i].release_date
        let imagen = info[i].backdrop_path
        let id = info[i].id

    //ahora habria que poner que se modifique en la pagina HTML con el inner
        vacioHTML += `<a class="borde" href="./detail- movie.html?idPersonaje=${id}">
        <article class="pelicula">
            <img class="imagenport" src="https://image.tmdb.org/t/p/w500/${imagen}">
            <div class= "titaño">
                <h3 class ="titulos">${titulo} </h3>
                <h3 class="fecha"> ${fechaEstreno}</h3>
            </div>
            </a>
        </article>`
    }
    seccion.innerHTML= vacioHTML;
    return data
})

.catch(function(error){
    console.log(error)
    return error
})
//SEGUNDO FETCH
fetch(urlSeriesPopu)

.then(function(response){
    return response.json()
})

.then(function (data) {
    console.log(data)
    let info = data.results;
    let vacioHTML=""
    for (let i=0; i<5; i++) {
        let titulo = info[i].name
        let fechaEstreno = info[i].first_air_date
        let imagen = info[i].backdrop_path
        let id = info[i].id

    //ahora habria que poner que se modifique en la pagina HTML
        vacioHTML += `<a class="borde" href="./detail-serie.html?idPersonaje=${id}">
        <article class="pelicula">
            <img class="imagenport" src="https://image.tmdb.org/t/p/w500/${imagen}">
            <div class= "titaño">
                <h3 class ="titulos">${titulo} </h3>
                <h3 class="fecha"> ${fechaEstreno}</h3>
            </div>
            </a>
        </article>`
    }
    seccion2.innerHTML= vacioHTML;
    return data
})

.catch(function(error){
    console.log(error)
    return error
})
//TERCER FETCH

fetch(urlLoMasVistoPeli)

.then(function(response){
    return response.json()
})

.then(function (data) {
    console.log(data)
    let info = data.results;
    let vacioHTML=""
    for (let i=0; i<5; i++) {
        let titulo = info[i].title
        let fechaEstreno = info[i].release_date
        let imagen = info[i].backdrop_path
        let id = info[i].id

    //ahora habria que poner que se modifique en la pagina HTML
    vacioHTML += `<a class="borde" href="./detail- movie.html?idPersonaje=${id}">
        <article class="pelicula">
            <img class="imagenport" src="https://image.tmdb.org/t/p/w500/${imagen}">
            <div class= "titaño">
                <h3 class ="titulos">${titulo} </h3>
                <h3 class="fecha"> ${fechaEstreno}</h3>
            </div>
            </a>
        </article>`
    }
    seccion3.innerHTML= vacioHTML;
    return data
})

.catch(function(error){
    console.log(error)
    return error
})
