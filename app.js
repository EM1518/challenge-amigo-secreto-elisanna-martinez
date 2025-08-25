let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo');
    if (nombre.value.trim() === "") {
        alert("Por favor, inserte un nombre.")
    }
    else{
        amigos.push(nombre.value);
        nombre.value = "";
        console.log(amigos);
    }

};

