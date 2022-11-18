let apiKey = `c8c96a59cf4e2e778a6bf46883490734` //mi api generado con la cuenta
let urlGenPe = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
let urlGenSe = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`;

let genPe = document.querySelector(".generoPeli");

fetch(urlGenPe)
.then(function(response){
    return response.json()
})
.then(function (data) {
    console.log(data)
    let finalHtml="" //vacio para que se vaya rellenando a medida que pasa el for
    let info = data.results;
    for (let i=0; i<info.genres; i++) {
        let nombre = info[i].name //vas agarrando dentro de la api, dependiendo de como se llame la seccion en la cual esta el titulo. Con el [i], se va modificando a medida que trascurre el id
        let id = info[i].id

    //ahora habria que poner que se modifique en la pagina HTML con el inner
        finalHtml += `<a href="./detail-genres.html?idPersonaje=${id}">
        <article class="pelicula">         
                <h3 class ="titulos">${nombre} </h3>
            </a>
        </article>`
    }
    genPe.innerHTML= finalHtml;
    return data
})

.catch(function(error){
    console.log(error)
    return error
})