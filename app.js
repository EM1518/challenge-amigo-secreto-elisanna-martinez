// Declarar arreglo para almacenar los nombres
let amigos = [];
// Obtener valor del input y almacenarlo en una variable
let nombre = document.getElementById('amigo');
// Obtener el elemento de la lista en el HTML y almacenarlo en una variable
let lista = document.getElementById('listaAmigos');


function agregarAmigo() {
    // Si el input esta en blanco o solo con espacios manda un mensaje
    if (nombre.value.trim() === "") {
        alert("Por favor, inserte un nombre.")
    }
    // Si tiene texto Guarda lo guarda en el arreglo y limpia el input
    else{
        amigos.push(nombre.value.trim());
        nombre.value = "";
        console.log(amigos);
    }
    // Ejecuta la funcion de para agregar el nombre a lista en el HTML
    agregarAmigosLista();

};

// Cada vez que se agrega un nombre se limpia la lista y se recorre el arreglo de nuevo para tener todos los nombres incluyendo el que se acana de agregar.

function agregarAmigosLista() {
    lista.innerHTML= ""; // Limpia toda la lista para evitar duplicados
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
};
