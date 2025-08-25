// Declarar arreglo para almacenar los nombres
let amigos = [];

function agregarAmigo() {
    // Obtener valor del input y almacenarlo en una variable
    let nombre = document.getElementById('amigo');
    // Si el input esta en blanco o solo con espacios manda un mensaje
    if (nombre.value.trim() === "") {
        alert("Por favor, inserte un nombre.")
    }
    // Si no: Guarda el nombre en el arreglo y limpia el input
    else{
        amigos.push(nombre.value);
        nombre.value = "";
        console.log(amigos);
    }

};

