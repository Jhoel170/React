/*function saludar(){
    console.log("Hola");
}

saludar();*/

/*const insertarEstudiante = () => {
    const titulo = document.getElementById("principal").innerHTML ="Xd";
    principal.style.backgroundColor = "brown";
    console.log(principal);
}

insertarEstudiante();*/

const agregarEstudiante = () => {
    const divContenedor = document.getElementById("contenedor");
    const itemEstudiante = document.createElement("p");
    itemEstudiante.innerText = "Jhoel";
    divContenedor.appendChild(itemEstudiante);
}