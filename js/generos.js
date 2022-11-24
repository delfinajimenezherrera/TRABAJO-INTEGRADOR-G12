let apiKey = "c8c96a59cf4e2e778a6bf46883490734" //mi api generado con la cuenta
let urlGenPe = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
let urlGenSe = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`;

let genPe = document.querySelector(".generoPeli");

fetch(urlGenPe)
.then(function(response){
    return response.json()
})
.then(function (data) {
    console.log(data)
    let finalHtmlPeli="" //vacio para que se vaya rellenando a medida que pasa el for
    let infopeli = data.genres;
    for (let i=0; i<infopeli.length; i++) {
        let nombre = infopeli[i].name //vas agarrando dentro de la api, dependiendo de como se llame la seccion en la cual esta el titulo. Con el [i], se va modificando a medida que trascurre el id
        let id = infopeli[i].id

    //ahora habria que poner que se modifique en la pagina HTML con el inner

        finalHtmlPeli += `<div class= "cajagen">
        <a class= "angen" href="./detail-genres.html?idPersonaje=${id}">        
                <h3 class ="titulosgenero">${nombre} </h3>
            </a>
        </div>`
    }
    genPe.innerHTML= finalHtmlPeli;
    return data
})

.catch(function(error){
    console.log(error)
    return error
})

let genSerie = document.querySelector(".generoSerie");

fetch(urlGenSe)
.then(function(response){
    return response.json()
})

.then(function (data) {
    console.log(data)
    let finalHtmlSerie="" //vacio para que se vaya rellenando a medida que pasa el for
    let infoserie = data.genres;
    for (let i=0; i<infoserie.length; i++) {
        let nombre = infoserie[i].name //vas agarrando dentro de la api, dependiendo de como se llame la seccion en la cual esta el titulo. Con el [i], se va modificando a medida que trascurre el id
        let id = infoserie[i].id

    //ahora habria que poner que se modifique en la pagina HTML con el inner

        finalHtmlSerie += `<div class= "cajagen">
        <a class= "angen" href="./detail-genres-series.html?idPersonaje=${id}">        
                <h3 class ="titulosgenero">${nombre} </h3>
            </a>
        </div>`
    }
    genSerie.innerHTML= finalHtmlSerie;
    return data
})

.catch(function(error){
    console.log(error)
    return error
})

/* 
 fetch(url)
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

fetch(url2)
.then(function(response){
        return response.json();
    }
)
.then(function(data2){
    series=''
    console.log(data2);
    let info = data2.results;
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
    return data2;
})  
.catch(function(error){
        console.log(error)
        return error;
})
 */

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
