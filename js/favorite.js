let apiKey = "c8c96a59cf4e2e778a6bf46883490734"; //mi api generado con la cuenta
//declarar una variable y ahí guardo con getitem lo que está guardado en la propiedad favoritos pelicula
let recuperoStorage=localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage); 
//declarar una variable y ahí guardo con getitem lo que está guardado en la propiedad favoritos pelicula
let recuperoStorageSeries=localStorage.getItem('seriefav'); /*metodo  que me dice que insertes la key como string, recupero la informacion en el local storage*/
let seriefav = JSON.parse(recuperoStorageSeries);


//Capturar el contenedor de html en favoritos 

let lista1 = document.querySelector(".favoritospeli");
let lista2 = document.querySelector(".favoritosserie")
//EMPEZAMOS CON PELICULAS 
// Si el local storage está vacío, quiero indicarle al usuario que no hay favoritos seleccionados 
//usar un condicional: si seleccionados no hay seleccionados → Quiero que le diga al usuario “no hay nada en favoritos”
if (favoritos.length == 0 || favoritos==null){
    lista1.innerHTML = '<p>No hay lista de series favoritas aún</p>'
    
} else {
    let peliculas = ''
    for (let i = 0; i < favoritos.length; i++) {
        let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${apiKey}&language=en-US` /*Url donde busco los datos de mi pelicula */
        /* Abro fetch para buscar la información de los personajes */
        fetch(url)
        .then (function (respuesta) {
            return respuesta.json()
        })
        .then(function (data){
            console.log(data)
            let id = data.id
            let dia = data.release_date
            let nombre = data.title
            let imagenes = data.poster_path
            peliculas += `<a href="./detail_movie.html?idPersonaje=${id}">
                                    <img class= "imagenserie" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
                                    <p class= "js"> Titulo: ${nombre}</p>
                                    <p class= "js" >Fecha : ${dia}</p>
                                    </a>`
                                
            lista1.innerHTML=peliculas

            return data
        })
        .catch(function (error) {
            console.log(error);
            return error
})
    }
}
    //SEGUIIMOS CON SERIES 
    // Si el local storage está vacío, quiero indicarle al usuario que no hay favoritos seleccionados 
    //usar un condicional: si seleccionados no hay seleccionados → Quiero que le diga al usuario “no hay nada en favoritos”
if (seriefav.length == 0 || seriefav==null){
    lista2.innerHTML = '<p>No hay lista de series favoritas aún</p>'
        
    } else {
        let seriesFavoritas = ''
        for (let i = 0; i < seriefav.length; i++) {
            let urlSeries = `https://api.themoviedb.org/3/tv/${seriefav[i]}?api_key=${apiKey}&language=en-US` /*Url donde busco los datos de mi serie */
            /* Abro fetch para buscar la información de los personajes */
            fetch(urlSeries)
            .then (function (respuesta) {
                return respuesta.json()
            })
            .then(function (data){
                console.log(data)
                let titulo = data.name
                let imagenes = data.poster_path
                let id = data.id
                let fecha = data.first_air_date    
                seriesFavoritas += ` <a class"bordegen"href="./detail_series.html?idPersonajes=${id}">
                <img class= "imagenserie" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
                <p class= "js" > Titulo: ${titulo}</p>
                <p class= "js" >Fecha : ${fecha}</p>
                </a>`
            
            lista2.innerHTML=seriesFavoritas

            return data
})
            .catch(function (error) {
            console.log(error);
            return error
            })
            }
            }

