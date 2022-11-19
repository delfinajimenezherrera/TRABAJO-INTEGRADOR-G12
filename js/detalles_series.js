

//  capturo el DOM 
let queryString= location.search; // capturo qs, le asigno ol con la prop location.search (quedan guardados los datos)
let queryStringToObject= new URLSearchParams (queryString); // obj lit
let id = queryStringToObject.get("idPersonaje");


let apiKey = `c8c96a59cf4e2e778a6bf46883490734`; //mi api generado con la cuenta
let urlDetalleSerie = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;
let detSerie = document.querySelector(".contenedorp")


// guardamos en cada variable el elemento q capturamos
let imagen= document.querySelector(".imgserie");
let titulo= document.querySelector(".titulos");
let fecha= document.querySelector (".fechas");
let genero= document.querySelector (".generos");
let duracion= document.querySelector (".tiempo");
let calificacion= document.querySelector (".calificaciones");
let sinopsis= document.querySelector(".resumen");

// fetch 
fetch (urlDetalleSerie) // la info viene en formato json
    .then(function(response){
        return response.json // .json decodifica la info y la convierte en tipo de dato (array o obj, etc)
    })

    .then(function (data) {
        console.log(data);
        imagen.src =  `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
        titulo.innerText= data.original_title; 
        fecha.innerText= data.release_date;
        for (i=0; i< data.genres.length; i++){
        genero.innerHTML += `<a href="./detail-genres.html?id=${data.genres [i].id}"> ${data.genres[i].name}</a>`;
        }
        duracion.innerText= `${data.runtime} Minutos`; 
        sinopsis.innerText= data.overview; 
        calificacion.innerText= `Calificacion: ${data.vote_average}`;
        return data
    })
    .catch(function (err) {
        console.log(err)

        return err
    })


// un id por cada pelicula que agregas a favoritos. cuando agureges etsas metineod el id ne le local storage. Cuanod cargues la pagina de favortitos vas a hacer un fecthn 
let favortios= []
let recuperoStorage= localStorage.getItem("favoritos")
//trasnformar datos en un array de json
if (recuperoStorage != null){
    favortios= JSON.parse(recuperoStorage);
}
//Capturar un elemento del dom que refiera a favoritos 
let button = document.querySelector(".botonFavs") 
// Chequear que el id este en el array para poder cambiar el texto al usuario 
//vamos a crear un condicional y si lo incluye hay que escribir el nombre con el cual lo guardamos y ponerle un inner text 
if (favortios.includes (id)){
    button.innerHTML= "Sacar de favoritos"
}
// Cuando el usuario haga clic en agregar a favoritos → agregue ese id dentro del array 
button.addEventListener ("click", function(e) {
        //comportamiento por default
    e.defaultPrevented();
    if (favortios.includes(id)){
        // Si lo incluye: lo que tiene que hacer es sacarlo
            //1. Buscar la posición en la cual está el id y después borrarla (línea 60)
            //2.Poner el texto: agregar a favoritos 

        let indice= favortios.indexOf (id);
        favortios.splice (indice,1);
        button.innerText= "Agregar a favoritos";    
    }
    else {
        //SI el id no lo incluye: hay que agregarlo 
        favortios.push (id); 
        console.log(favortios );
        button.innerText= "Sacar de favoritos";
    }
    let pasarAString= JSON.stringify(favortios);
    localStorage.setItem("favoritos",pasarAString)
    console.log (localStorage)
}) 
