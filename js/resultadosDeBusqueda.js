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
//let realUrl= `https://api.themoviedb.org/3/search/multi?api_key=c8c96a59cf4e2e778a6bf46883490734&language=en-US&query=${query}&page=1&include_adult=false`;
let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
let url2= `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`; 
barras.innerText = `"Resultados de busqueda para: ${query}"`;

  
 //PELI

 fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info = data.results;
        if (info.length === 0)  {
            barras.innerText = `No existe el resultado para: ${query}`;
        }
        let peliculapadre=document.querySelector(".resultadopeli")

        for (let i=0; i<info.length; i++){
            peliculapadre.innerHTML+=`<a class="borde" href="./detail- movie.html?idPersonaje=${info[i].id}">
            <article class="pelicula">
                <img class="imagenport" src="https://image.tmdb.org/t/p/w500/${info[i].backdrop_path}">
                <div class= "titaño">
                    <h3 class ="titulos">${info[i].title} </h3>
                    <h3 class="fecha"> ${info[i].release_date}</h3>
                </div>
                </a>
            </article>`

        }
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
    console.log(data2);
    let info = data2.results;
    if (info.length== 0){
        barras.innerText=`No existe el resultado para ${query}`;
    }
    let peliculaserie= document.querySelector(".resultadoserie")
    for (let i =0; i<info.length; i++){

        peliculaserie.innerHTML+=`<a class="borde" href="./detail-serie.html?idPersonaje=${info[i].id}">
        <article class="pelicula">
            <img class="imagenport" src="https://image.tmdb.org/t/p/w500/${info[i].backdrop_path}">
            <div class= "titaño">
                <h3 class ="titulos">${info[i].name} </h3>
                <h3 class="fecha"> ${info[i].first_air_date}</h3>
            </div>
            </a>
        </article>`

    }

})  
.catch(function(error){
        console.log(error)
        return error;
})

