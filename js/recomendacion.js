let urlRecomSerie = `https://api.themoviedb.org/3/tv/${serie}/recommendations?api_key=c8c96a59cf4e2e778a6bf46883490734&language=en-US&page=1`;
let urlDondeVerSerie = `https://api.themoviedb.org/3/tv/${serie}/watch/providers?api_key=c8c96a59cf4e2e778a6bf46883490734`;
let recomendaciones = document.querySelector(".series");

//RECOMENDACION
fetch(urlRecomSerie)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let reco
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
let mostrarRec = false;

verMas.addEventListener("click", function(evento){
    evento.preventDefault();
    if (mostrarRec) {
        recomendaciones.style.display="none";
        verMas.innerText="Ver Recomendaciones";
    }})


    //mostrar donde ver la serie
    fetch(urlDondeVerSerie)
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        console.log( data)
        let dondeVerSerie="";
        for (let i=0; i< data.results.US.flatrate.length ; i++){
            dondeVerSerie += `<li class= "dondeVer">${data.results.US.flatrate[i].provider_name}</li>`;
        }
        dondeVer.innerHTML+=dondeVerSerie;
    })
    .catch(function(error){
        console.log(error);
        return error
    })