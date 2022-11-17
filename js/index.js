let apiKey = `c8c96a59cf4e2e778a6bf46883490734`
let urlPeliculasPopu = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
let urlSeriesPopu = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`

let seccion= document.querySelector(".peliculaspop")

//agarraste ka url y querias que re deuleva todos los datos en modo json 
fetch(urlPeliculasPopu)

.then(function(response){
    return response.json()
})

.then(function (data) {
    console.log(data)
    let finalHtml=""
    for (let i=0; i<5; i++) {
        

        let titulo = data.results[i].title
        let fechaEstreno = data.results[i].release_date
        let imagen = data.results[i].poster_path
        let id = data.results[i].id

    //ahora abria que poner que se modifique en la pagina HTML
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
    seccion.innerHTML= finalHtml;
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
    let finalHtml=""
    for (let i=0; i<5; i++) {
        

        let titulo = data.results[i].name
        let fechaEstreno = data.results[i].release_date
        let imagen = data.results[i].poster_path
        let id = data.results[i].id

    //ahora abria que poner que se modifique en la pagina HTML
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
    seccion.innerHTML= finalHtml;
    return data
})

.catch(function(error){
    console.log(error)
    return error
})

fetch(urlPeliculasPopu)

.then(function(response){
    return response.json()
})

.then(function (data) {
    console.log(data)
    let finalHtml=""
    for (let i=0; i<5; i++) {
        

        let titulo = data.results[i].title
        let fechaEstreno = data.results[i].release_date
        let imagen = data.results[i].poster_path
        let id = data.results[i].id

    //ahora abria que poner que se modifique en la pagina HTML
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
    seccion.innerHTML= finalHtml;
    return data
})

.catch(function(error){
    console.log(error)
    return error
})
