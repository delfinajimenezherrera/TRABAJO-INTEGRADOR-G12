//hicimos esta js aparte, ya que el boton estan en todos los HTMLS y los linkeamos directamente con todos

let buscador = document.querySelector(".buscador");
let formulario = document.querySelector("form");
let campoAEvaluar = document.querySelector("[name='busqueda']")
let alert= document.querySelector(".alert")


//planteamos el eveento
//evaluamos lo que el usuario ingrese

campoAEvaluar.addEventListener("focus", function(){
    alert.innerText = "Estas completando el campo"
})

// evaluamos el formulario con submit
formulario.addEventListener("submit", function (evento){
    evento.preventDefault();
    if(campoAEvaluar.value==""){
        alert.innerText= "Ups! No podes dejar vacio el campo"
    } else if (campoAEvaluar.value.length <3){
        alert.innerText= "Ups! Tenes que ingresar mas de 3 caracteres"
    } else{
        this.submit();
    }

})
