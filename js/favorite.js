//declarar una variable y ahí guardo con getitem lo que está guardado en la propiedad favoritos
let recuperoStorage= localStorage.getItem ("favoritos")
let seleccionados= JSON.parse (recuperoStorage)
//Capturar el contenedor de html en favoritos 
let lista= document.querySelector(".favoritos")
// Si el local storage está vacío, quiero indicarle al usuario que no hay favoritos seleccionados 
//usar un condicional: si seleccionados no hay seleccionados → Quiero que le diga al usuario “no hay nada en favoritos”
if (seleccionados != null || seleccionados.lenght == 0) {
    lista.innerHTML = `<p>No hay favoritos seleccionados</p>`

}
// Si hay seleccionados: pedir api los datos de todos los ids del array de personajes elegidos 
else {
    for (let i=0; i <seleccionados.lenght;i++) {
        buscarfavoritos= (seleccionados [i])
    }
}
function buscarfavoritos (id)