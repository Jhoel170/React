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

/*const estudiante = {id: 1, nombre: "Jhoel Beltrán"};*/

const lstEstudiante = [
    {id: 1, nombre: "Jhoel"},
    {id: 2, nombre: "Oscar"},
    {id: 3, nombre: "Daniel"}
]

const renderizarListaEstudiantes = () => {
    const divContenedor = document.getElementById("contenedor");
    divContenedor.innerText = "";
    lstEstudiante.forEach((estudiante) => {
        const itemEstudiante = document.createElement("p");
        itemEstudiante.innerText = estudiante.nombre;
        divContenedor.appendChild(itemEstudiante);
    })
}



/*lstEstudiante.forEach((estudiante) => {
    console.log(estudiante);
})*/

/*const agregarEstudiante = () => {
    const divContenedor = document.getElementById("contenedor");
    const itemEstudiante = document.createElement("p");
    itemEstudiante.innerText = estudiante.nombre;
    divContenedor.appendChild(itemEstudiante);
}*/

/*const agregarEstudiante = () => {

    const divContenedor = document.getElementById("contenedor");
    const itemEstudiante = document.createElement("p");
    itemEstudiante.innerText = "Jhoel";
    divContenedor.appendChild(itemEstudiante);
}*/

const insertarEstudiante = (event) => {
    event.preventDefault();
    const nombreEstudiante = document.getElementById("txtEstudiante").value;
    lstEstudiante.push({id: 0, nombre: nombreEstudiante});
    renderizarListaEstudiante();
}

renderizarListaEstudiantes();