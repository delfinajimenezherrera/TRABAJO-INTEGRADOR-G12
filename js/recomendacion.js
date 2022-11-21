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


let recomendarSerie = document.querySelector(".recomendarSerie")


recomendarSerie.addEventListener("click", function(r){
    r.preventDefault();
    if (recomendarSerie) {
        recomendaciones.style.display="none";
        recomendaciones.innerText="Ver Recomendaciones";
    }})