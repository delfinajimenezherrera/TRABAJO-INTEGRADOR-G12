let apiKey = `c8c96a59cf4e2e778a6bf46883490734`; //mi api generado con la cuenta
//declarar una variable y ahí guardo con getitem lo que está guardado en la propiedad favoritos pelicula
let recuperoStorage= localStorage.getItem ("favoritos")
let seleccionados= JSON.parse (recuperoStorage)
//declarar una variable y ahí guardo con getitem lo que está guardado en la propiedad favoritos pelicula
let recuperoStorage2= localStorage.getItem ("favoritos_series")
let seleccionados2= JSON.parse (recuperoStorage2)


//Capturar el contenedor de html en favoritos 
let lista1= document.querySelector(".favoritospeli")
let lista2= document.querySelector(".favoritosserie")
//EMPEZAMOS CON PELICULAS 
// Si el local storage está vacío, quiero indicarle al usuario que no hay favoritos seleccionados 
//usar un condicional: si seleccionados no hay seleccionados → Quiero que le diga al usuario “no hay nada en favoritos”
if (seleccionados != null || seleccionados.lenght == 0) {
    lista1.innerHTML = `<p> No hay favoritos seleccionados </p>`

}
// Si hay seleccionados: pedir api los datos de todos los ids del array de personajes elegidos 
else {
    for (let i=0; i <seleccionados.lenght;i++) {
        buscarfavoritos= (seleccionados [i])
    }
}
function buscarfavoritos (id){
    let url= `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
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
        seleccionados.innerHTML += `<a href="./detail- movie.html?idPersonaje= ${id}">
                        <p> Titulo: ${nombre} </p>
                        <img src= "https://image.tmdb.org/t/p/w500/${imagen}" >
                        <p> Fecha: ${dia} </p>
                        </a>`
    })
}