import { useState } from "react";
import Estudiante from "../components/Estudiante";
import { listaEstudiantes } from "../utils/data";


const EstudiantesPage = () => {
    const [lstEstudiantes, setLstEstudiantes] = useState(listaEstudiantes);
    const [nuevoEstudiante, setNuevoEstudiante] = useState ({
            id: Date.now(),
            nombre: "",
            edad: 170,
            url: "",
        })

    const handlerAgregarEstudiante = (e) => {
        e.preventDefault();
        setLstEstudiantes([...lstEstudiantes, nuevoEstudiante])
        setNuevoEstudiante({...nuevoEstudiante, nombre: "", edad: 0, url:""})
    }

    return (
        <div>
            <h1>Estudiantes</h1>
            <hr />
            <form onSubmit={handlerAgregarEstudiante}>
                <div>
                    <label htmlFor="est_nombre">Nombre: </label>
                    <input 
                        type="text" 
                        name="est_nombre" 
                        id="est_nombre" 
                        value={nuevoEstudiante.nombre} 
                        onChange={(e) => setNuevoEstudiante({...nuevoEstudiante, nombre: e.target.value})} 
                        placeholder="Ingresa nombre" 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="est_edad">Edad: </label>
                    <input 
                    type="number" 
                    name="est_edad" 
                    id="est_edad" 
                    value={nuevoEstudiante.edad} 
                    onChange={(e) => setNuevoEstudiante({...nuevoEstudiante, edad: e.target.value})} 
                    placeholder="Ingresa edad" 
                    required
                    />
                </div>
                <div>
                    <label htmlFor="est_url">URL: </label>
                    <input 
                    type="text" 
                    name="est_url" 
                    id="est_url" 
                    value={nuevoEstudiante.url} 
                    onChange={(e) => setNuevoEstudiante({...nuevoEstudiante, url: e.target.value})} 
                    placeholder="Ingresa url" 
                    required
                    />
                </div>
                <div>
                    <input type="submit" value="Agregar"/>
                </div>
            </form>
            {/*<Estudiante nombre={"Esteban Gutierrez"} 
            edad={20} 
            url={"https://www.google.com"} />
            <Estudiante nombre={"Jheols butron"} 
            edad={70} 
            url={"https://www.wikipedia.com"} />
            <Estudiante nombre={"Daniel Pozo"} 
            edad={30} 
            url={"https://www.facebook.com"} />*/}

            {
                lstEstudiantes.map((estudiante) => {
                    return <Estudiante
                        key = {estudiante.id}
                        nombre = {estudiante.nombre}
                        edad = {estudiante.edad}
                        url = {estudiante.url}
                    />
                })
            }
        </div>
    );
}
export default EstudiantesPage;