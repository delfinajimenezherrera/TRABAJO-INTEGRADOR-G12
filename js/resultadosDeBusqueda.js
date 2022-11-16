//Primer paso: capturar la query --> CHECK

//Segundo paso armar la url --> CHECK

//Tercer paso traer la info de la api --> CHECK

//Cuarto paso poner esa info en el HTML


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
const query = queryStringObj.get('busqueda');

const url = `https://api.themoviedb.org/3/search/movie?api_key=15370bef1a25ea674deaaf70270ad202&language=en-US&query=${query}&page=1&include_adult=false`;

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info = data.results;
        let container = document.querySelector(".peliculaspop");
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

    let buscador = document.querySelector(".buscador");
    let formulario = document.querySelector("form");
    let campoAEvaluar = document.querySelector("[name='busqueda']")
    let alert= document.querySelector(".alert")


    //planteamos el eveento
    //evaluamos lo que el usuario ingrese

    campoAEvaluar.addEventListener("focus", function(){
        alert.innerText = "estas completando el campo"
    })

    // evaluamos el formulario con submit
    formulario.addEventListener("submit", function (evento){
        evento.preventDefault();
        if(campoAEvaluar.value==""){
            alert.innerText= "No podes dejar vacio el campo"
        } else if (campoAEvaluar.value.length <3){
            alert.innerText= "Tenes que ingresar mas de 3 caracteres"
        } else{
            this.submit();
        }
    
    })

    