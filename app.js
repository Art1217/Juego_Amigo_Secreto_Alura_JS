// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigo = [];
let rango =listaAmigo.length

function asignarTextoElemento(elemento, lista){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= "";
    lista.forEach(amigo => {              
        let li = document.createElement("li");
        li.textContent = amigo;             
        elementoHTML.appendChild(li);       
      });
}

function  agregarAmigo() {
let nombre = (document.getElementById(`amigo`).value);
    console.log(nombre);
    if(nombre !== ""){
        listaAmigo.push(nombre);
        asignarTextoElemento(`#listaAmigos`,listaAmigo);
        console.log(listaAmigo);
        document.getElementById("amigo").value = ""; 

    }else{
        alert("Ingrese un nombre")
}
    limpiarCaja()
}

function sortearAmigo() {
    if(listaAmigo.length === 0){
        alert("No hay amigos para sortear");
        return;
    }else{
    let numSorteado =  Math.floor(Math.random() * rango);
    let amigoSorteado = listaAmigo[numSorteado]; 
    console.log(listaAmigo[numSorteado]); 
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = "";          
    let li = document.createElement("li");
    li.textContent = `El amigo secreto sorteado: ${amigoSorteado}`;
    resultadoHTML.appendChild(li);
    }
}


function limpiarCaja() {
    document.querySelector(`#amigo`).value= ``;
 }
