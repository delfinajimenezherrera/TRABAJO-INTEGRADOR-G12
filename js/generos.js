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
