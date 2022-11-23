//Primer paso: capturar la query --> CHECK

//Segundo paso armar la url --> CHECK

//Tercer paso traer la info de la api --> CHECK

//Cuarto paso poner esa info en el HTML


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let query = queryStringObj.get('busqueda'); //duda: cuando agrego el punto adelante, me toma el nombre pero se me van las imagenes de la api
let barras= document.querySelector (".barras")
//let mediaType = queryStringObj.get('mediaType');

let apiKey = "c8c96a59cf4e2e778a6bf46883490734"
//let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
//let url2= `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`; 
let realUrl= `https://api.themoviedb.org/3/search/multi?api_key=c8c96a59cf4e2e778a6bf46883490734&language=en-US&query=${query}&page=1&include_adult=false`;
let containerResults = document.querySelector(".peliculaspop");
barras.innerText = `"Resultados de busqueda para: ${query}"`;

  
 //PELI
 fetch(realUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info = data.results;
        let search='';
        if (info.length === 0)  {
            barras.innerText = `No existe el resultado para: ${query}`;
        }

        for (let i=0; i<info.length; i++){
            let imagen = info[i].backdrop_path;
            let titulo = info[i].title;
            let fechaEstreno = info[i].release_date;
            let id = info[i].id;
            search += `<a class="borde" href="./detail- movie.html?idPersonaje=${id}">
            <article class="pelicula">
                <img class="imagenport" src="https://image.tmdb.org/t/p/w500/${imagen}">
                <div class= "titaño">
                    <h3 class ="titulos">${titulo} </h3>
                    <h3 class="fecha"> ${fechaEstreno}</h3>
                </div>
                </a>
            </article>`

        }
        container.innerHTML = search;
        return data
    })
    .catch(function (err) {
        console.log(err)
    })
//SERIE
fetch(realUrl)
.then(
    function(response){
        return response.json();
    }
)
.then(function(data){
    series=''
    console.log(data);
    let info = data.results;
    if (info.length== 0){
        barras.innerText=`No existe el resultado para ${query}`;
    }
    for (let i =0; i<info.length; i++){ ;
        let titulo = info[i].name
        let imagenes = info[i].backdrop_path;
        let id = info[i].id
        let fecha = info[i].first_air_date

        series += `<article class="portadaCard">
                        <a href="./detail_movie.html?idPersonaje=${id}">
                        <img class= "portada" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
                        <p > Titulo: ${titulo}</p>
                        <p>Fecha : ${fecha}</p>
                        </a>
                    </article>`
    }
    container.innerHTML=series;  
    return data;
})  
.catch(function(error){
        console.log(error)
        return error;
})


/*     // Filtro: TODOS [MOVIES + SERIES + PERSONAS]
    if (mediaType == "all") {
        fetch (realUrl)
        .then (datos=>datos.json() )
        .then (respuesta => {
        
            console.log (respuesta);
            let results = ''
        
            respuesta.results.forEach ((multi, index) => {
              console.log(index)
                // Series
              if (multi.media_type == "tv"){
                results += 
                `<a class="borde" href="./detail-serie.html?idPersonaje=${multi.id}">
                <article class="pelicula">
                    <img class="imagenport" src="https://image.tmdb.org/t/p/w500/${multi.poster_path}">
                    <div class= "titaño">
                        <h3 class ="titulos">${multi.name} </h3>
                        <h3 class="fecha"> ${multi.first_air_date}</h3>
                    </div>
                    </a>
                </article>`
               
               containerResults.innerHTML= results
              
              }
              
              // Películas
              else if (multi.media_type == "movie"){
                results +=
                `<a class="borde" href="./detail- movie.html?idPersonaje=${multi.id}">
                <article class="pelicula">
                    <img class="imagenport" src="https://image.tmdb.org/t/p/w500/${multi.poster_path}">
                    <div class= "titaño">
                        <h3 class ="titulos">${multi.title} </h3>
                        <h3 class="fecha"> ${multi.release_date}</h3>
                    </div>
                    </a>
                </article>`
                    containerResults.innerHTML= results
                  }
                
                })
              })
               .catch(function(error){
                console.log('El error fué: ' + error);
            })
            } */
      