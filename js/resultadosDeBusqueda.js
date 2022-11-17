//Primer paso: capturar la query --> CHECK

//Segundo paso armar la url --> CHECK

//Tercer paso traer la info de la api --> CHECK

//Cuarto paso poner esa info en el HTML


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
const query = queryStringObj.get('busqueda');

let apiKey = `c8c96a59cf4e2e778a6bf46883490734`
const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
let container = document.querySelector(".peliculaspop");

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info = data.results;
        let search='';

        for (let i=0; i<info.length; i++){
            search += `<article>
            <img src= ${info[i].image} alt= '' /> 
            </article> `

        }
        container.innerHTML = search;



    })
    .catch(function (err) {
        console.log(err)
    })

    // Creamos texto para el resultado de la busqueda
    //let campoA = queryStringToObject.get('busqueda'); 
    //let infobuscada = document.querySelector('.barras')
    //infobuscada.innerText = `"Resultados de busqueda para: ${campoA}"`;
        //buscador.addEventListener('input', function(){
            //infobuscada.innerText= '';

            //})

    document.querySelector(".barras").innerText= `"RESULTADO DE BUSQUEDA: ${campoAEvaluar}"`;
    console.log(campoAEvaluar);
