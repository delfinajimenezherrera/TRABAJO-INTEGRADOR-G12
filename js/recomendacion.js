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
}})

let mostrarRec = false;

recomendarSerie.addEventListener("click", function(r){
    r.preventDefault();
    if (mostrarRec) {
        recomendaciones.style.display="none";
        recomendaciones.innerText="Ver Recomendaciones";
    }})
