let urlRecomSerie = `https://api.themoviedb.org/3/tv/${serie}/recommendations?api_key=c8c96a59cf4e2e778a6bf46883490734&language=en-US&page=1`;
let recomendaciones = document.querySelector(".series")

fetch(urlRecomSerie)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    let info = data.results;
    for (let i=0; i<3; i++) {
        let titulo = info[i].name
        let imagen = info[i].backdrop_path
        let id = info[i].id
        recomendaciones.innerHTML += info;
}})

.catch(function(error){
console.log (error)
})

let mostrarRec = false;

recomendarSerie.addEventListener("click", function(r){
    r.preventDefault();
    if (mostrarRec) {
        recomendaciones.style.display="none";
        recomendaciones.innerText="Ver Recomendaciones";
    }})
  

    //aca es el de ej
    let similares = document.querySelector(".peliculas")
    let urlSimilares = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}&language=es-ES&page=1`

    fetch(urlSimilares)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
            
        let results = data.results
        
        if(results[0]){
            for(let i=0; i<20; i++){
                let id_p = results[i].id
                let info = `<article class="art-peli">
                                <a class="peli" href="detallepeli.html?id=${id_p}&media=${media}">
                                    <img src=${image_url + results[i].poster_path} alt=${results[i].title}>
                                    <h3>${results[i].title}</h3>
                                </a>
                            </article>`
                similares.innerHTML += info;
            };
        }
        else{
            similares.innerHTML += '<h3 class="sorry">Lo sentimos, no tenemos películas relacionadas para mostrarte.</h3>'
        }
        
    })
    .catch(function(error){
        console.log('El error fue: ', error);
    })
