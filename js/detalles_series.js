//capturo el dom
let queryString= location.search; // capturo qs, le asigno ol con la prop location.search (quedan guardados los datos)
let queryStringToObject= new URLSearchParams(queryString); // obj lit
let serie = queryStringToObject.get("idPersonaje");

let apiKey = "c8c96a59cf4e2e778a6bf46883490734"; //mi api generado con la cuenta
let urlDetalleSerie = `https://api.themoviedb.org/3/tv/${serie}?api_key=${apiKey}&language=en-US`;
let urlDondeVerS = `https://api.themoviedb.org/3/tv/${serie}/watch/providers?api_key=c8c96a59cf4e2e778a6bf46883490734`;
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
let portadaSerie = document.querySelector(".portadaSerie");
let button = document.querySelector(".botonFavs") 


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
             genero.innerHTML += `<a href="./detail-genres.html?id=${data.genres[i].serie}">${data.genres[i].name}</a>`;
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
    
// un id por cada pelicula que agregas a favoritos. cuando agureges etsas metineod el id ne le local storage. Cuanod cargues la pagina de favortitos vas a hacer un fecthn 
let favortios_series= []
let recuperoStorage= localStorage.getItem("favortios_series")
//trasnformar datos en un array de json
if (recuperoStorage != null){
    favortios_series= JSON.parse(recuperoStorage);
}
//Capturar un elemento del dom que refiera a favoritos 
// Chequear que el id este en el array para poder cambiar el texto al usuario 
//vamos a crear un condicional y si lo incluye hay que escribir el nombre con el cual lo guardamos y ponerle un inner text 
if (favortios_series.includes (serie)){
    button.innerText= "Sacar de favoritos"
}
// Cuando el usuario haga clic en agregar a favoritos → agregue ese id dentro del array 
button.addEventListener ("click", function(e) {
        //comportamiento por default
    e.preventDefault();
    if (favortios_series.includes(serie)){
        // Si lo incluye: lo que tiene que hacer es sacarlo
            //1. Buscar la posición en la cual está el id y después borrarla (línea 60)
            //2.Poner el texto: agregar a favoritos 

        let indice= favortios_series.indexOf (serie);
        favortios_series.splice (indice,1);
        button.innerText= "Agregar a favoritos";    
    }
    else {
        //SI el id no lo incluye: hay que agregarlo 
        favortios_series.push (serie); 
        console.log(favortios_series);
        button.innerText= "Sacar de favoritos";
    }
    let pasarAString= JSON.stringify(favortios_series);
    localStorage.setItem("favortios_series",pasarAString)
    console.log (localStorage)
}) 
