let favortios= []
let recuperoStorage= localStorage.getItem ("favortitos")
//trasnformar datos en un array de json
if (recuperoStorage != null){
    favortios= JSON.parse(recuperoStorage);
}
//Capturar un elemento del dom que refiera a favoritos 
let link= document.querySelector (".circuloFavoritos") //en detalles. html= habia una línea que habíamos creado para que pudiera ser evaluada (punto 5 línea 1) 
// Chequear que el id este en el array para poder cambiar el texto al usuario 
//vamos a crear un condicional y si lo incluye hay que escribir el nombre con el cual lo guardamos y ponerle un inner text 
if (favortios.includes (id)){
    link.innerHTML= "Sacar de favoritos"
}
// Cuando el usuario haga clic en agregar a favoritos → agregue ese id dentro del array 
link.addEventListener ("click", function(e) {
        //comportamiento por default
    e.defaultPrevented();
    if (favortios.includes(id)){
        // Si lo incluye: lo que tiene que hacer es sacarlo
            //1. Buscar la posición en la cual está el id y después borrarla (línea 60)
            //2.Poner el texto: agregar a favoritos 

        let indice= favortios.indexOf (id);
        favortios.splice (indice,1);
        link.innerText= "Agregar a favoritos";    
    }
    else {
        //SI el id no lo incluye: hay que agregarlo 
        favortios.push (id); 
        console.log(favortios );
        link.innerText= "Sacar de favoritos";
    }

})
