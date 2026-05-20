import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EstudianteForm = (props) => {
    
    const {onAgregar} = props;

    const [nuevoEstudiante, setNuevoEstudiante] = useState ({
        nombre: "",
        edad: 170,
        url: "",
    });

    const handlerSubmit = (e) => {
        e.preventDefault();
        if(nuevoEstudiante.nombre.length >= 8) {
            setErrorNombre("")
        }else{ 
            setErrorNombre("Nombre debe tener al menos 8 caracteres")
        }

        if(nuevoEstudiante.edad >= 18) {
            setErrorEdad()
        }else{
            setErrorEdad("No menores de 18")
        }

        if(nuevoEstudiante.nombre.length >= 8 && nuevoEstudiante.edad >= 18){
            onAgregar(nuevoEstudiante)
            navigation
        }
    }

    const [errorNombre, setErrorNombre] = useState("");
    const [errorEdad, setErrorEdad] = useState();

    return(
        <form onSubmit={handlerSubmit}>
                <div>
                    <label htmlFor="est_nombre">Nombre: </label>
                    <input 
                        type="text" 
                        name="est_nombre" 
                        id="est_nombre" 
                        value={nuevoEstudiante.nombre} 
                        onChange={(e) => setNuevoEstudiante(prev => ({...prev, nombre: e.target.value}))} 
                        placeholder="Ingresa nombre" 
                        required
                    />
                    <div>{errorNombre}</div>
                </div>
                <div>
                    <label htmlFor="est_edad">Edad: </label>
                    <input 
                    type="number" 
                    name="est_edad" 
                    id="est_edad" 
                    value={nuevoEstudiante.edad} 
                    onChange={(e) => setNuevoEstudiante(prev => ({...prev, edad: e.target.value}))} 
                    placeholder="Ingresa edad" 
                    required
                    />
                    <div>{errorEdad}</div>
                </div>
                <div>
                    <label htmlFor="est_url">URL: </label>
                    <input 
                    type="text" 
                    name="est_url" 
                    id="est_url" 
                    value={nuevoEstudiante.url} 
                    onChange={(e) => setNuevoEstudiante(prev => ({...prev, url: e.target.value}))} 
                    placeholder="Ingresa url" 
                    required
                    />
                </div>
                <div>
                    <input type="submit" value="Agregar"/>
                </div>
        </form>
    )
}

export default EstudianteForm;