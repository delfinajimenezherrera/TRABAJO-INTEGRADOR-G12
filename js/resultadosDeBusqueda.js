//Primer paso: capturar la query --> CHECK

//Segundo paso armar la url --> CHECK

//Tercer paso traer la info de la api --> CHECK

//Cuarto paso poner esa info en el HTML


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let query = queryStringObj.get('busqueda'); //duda: cuando agrego el punto adelante, me toma el nombre pero se me van las imagenes de la api
let barras= document.querySelector (".barras")
barras.innerText = `"Resultados de busqueda para: ${query}"`;



let query2 = queryStringObj.get('.busqueda'); //por eso tuve que agregar otra variable agregandole el punto pero todavia no entiendo porque se produce el error 
let apiKey = `c8c96a59cf4e2e778a6bf46883490734`
let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query2}&page=1&include_adult=false`;
let container = document.querySelector(".peliculaspop");


fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info = data.results;
        let search='';
        //  if (info.title.includes(`${query}`) == false)  {
            //barras.innerText = `"No existe el resultado para: ${query}"`;
        //})

        for (let i=0; i<info.length; i++){
            let imagen = info[i].poster_path
            search += `<article>
            <img src="https://image.tmdb.org/t/p/w500/${imagen}">
            </article> `

        }
        container.innerHTML = search;
        return data
    })
    .catch(function (err) {
        console.log(err)
    })




