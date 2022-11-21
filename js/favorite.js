let apiKey = "c8c96a59cf4e2e778a6bf46883490734"; //mi api generado con la cuenta
//declarar una variable y ahí guardo con getitem lo que está guardado en la propiedad favoritos pelicula
let recuperoStorageFav= localStorage.getItem ('favortios')
let favortios= JSON.parse (recuperoStorageFav)
//declarar una variable y ahí guardo con getitem lo que está guardado en la propiedad favoritos pelicula
let recuperoStorage2= localStorage.getItem ('favortios_series')
let favortios_series= JSON.parse (recuperoStorage2)


//Capturar el contenedor de html en favoritos 
let lista1= document.querySelector(".favoritospeli")
let lista2= document.querySelector(".favoritosserie")
//EMPEZAMOS CON PELICULAS 
// Si el local storage está vacío, quiero indicarle al usuario que no hay favoritos seleccionados 
//usar un condicional: si seleccionados no hay seleccionados → Quiero que le diga al usuario “no hay nada en favoritos”
if (favortios.lenght == 0 ||favortios != null) {
    lista1.innerHTML = `<p> No hay favoritos seleccionados </p>`

}
    // Si hay seleccionados: pedir api los datos de todos los ids del array de personajes elegidos 
else {
    let favortios_peli= " ";
    for (let i=0; i <favortios.lenght;i++) {    
        let url= `https://api.themoviedb.org/3/tv/${favortios[i]}?api_key=${apiKey}&language=en-US`
        fecth (url)
        .then (function(response){
            return response.json()
        })
        .then (function(data){
            console.log(data)
            let nombre= data.title;
            let dia= data.release_date;
            let imagen= data.poster_path; 
            let id= data.id;
            favortios_peli += ` <article class="portadaCard">
                            <a href="./detail-movie.html?idPersonaje= ${id}">
                            <p> Titulo: ${nombre} </p>
                            <img src= "https://image.tmdb.org/t/p/w500/${imagen}" >
                            <p> Fecha: ${dia} </p>
                            </a>
                            </article>`
                            
            lista1.innerHTML=favortios_peli
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
if (favortios_series != null || favortios_series.lenght == 0) {
    lista2.innerHTML = `<p> No hay favoritos seleccionados </p>`

}
    // Si hay seleccionados: pedir api los datos de todos los ids del array de personajes elegidos 
else {
    let favoritosserie= " ";
    for (let i=0; i <favortios_series.lenght;i++) {    
        let url= `https://api.themoviedb.org/3/tv/${favortios_series[i]}?api_key=${apiKey}&language=en-US`
        fecth (url)
        .then (function(response){
            return response.json()
        })
        .then (function(data){
            console.log(data)
            let nombre= data.title
            let dia= data.release_date
            let imagen= data.poster_path 
            let id= data.id 
            favoritosserie += `<article class="portadaCard">
                            <a href="./detail-serie.html?idPersonaje= ${id}">
                            <p> Titulo: ${nombre} </p>
                            <img src= "https://image.tmdb.org/t/p/w500/${imagen}" >
                            <p> Fecha: ${dia} </p>
                            </a>
                            </article>`
            lista2.innerHTML=favoritosserie
            return data
            })
            .catch(function (error) {
                console.log(error);
                return error
    })
        }
    }
    