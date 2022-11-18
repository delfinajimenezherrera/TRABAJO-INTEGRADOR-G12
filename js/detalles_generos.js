let apiKey = `c8c96a59cf4e2e778a6bf46883490734`; //mi api generado con la cuenta
let urlDetalleGeneroPeli = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
let urlDetalleGeneroSerie = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

//El listado de las películas o series pertenecientes al género que seleccionó. El end point para usar es "Discover". crear un if
// El nombre del género. En caso de que no se encuentre el género o no exista, debe indicarse un mensaje de error. repetir lo de resultados de busqueda
//Lista de películas o series con su foto y su nombre. Al clickear en cualquiera de las series/ películas debe redirigir al detalle (punto 4). check
let barras= document.querySelector (".barras")
//barras.innerText = `"Resultados de busqueda para: ${query}"`;

let queryString = location.search //Caputramos qs
let queryStringToObject = new URLSearchParams(queryString); //La transformamos en OL
let id = queryStringToObject.get('idPersonaje'); 
let detGenPe = document.querySelector(".detalleGeneroPeli")

fetch (urlDetalleGeneroPeli)
.then( function(response){
    return response.json();
})
.then(function(data){
    let finalHtml=""
    let info = data.results;
    console.log(info);
    if (info.length === 0)  {
        barras.innerText = `No existe el resultado para: ${query}`;
    }
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

// el nombre de genero


