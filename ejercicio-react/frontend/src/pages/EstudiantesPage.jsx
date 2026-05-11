import { useState } from "react";
import Estudiante from "../components/Estudiante";
import { listaEstudiantes } from "../utils/data";
import { EstudianteForm } from "../components/EstudianteForm";


const EstudiantesPage = () => {
    //1er Paso
    const [lstEstudiantes, setLstEstudiantes] = useState(listaEstudiantes);
    
        console.log("Renderizando...");

    const AgregarEstudiante = (nuevoEstudiante) => {
        //Temporalmente el ID se contruye a partir de la fecha del sistema actual
        const estudianteFinal = {...nuevoEstudiante, id: Date.now()}
        setLstEstudiantes(prev => ([...prev, estudianteFinal]))
    }
    {/*const handlerAgregarEstudiante = (e) => {
        e.preventDefault();
        //Temporalmente el id se contruye a partir de la fecha del sistema actual
        const estudianteFinal = {...nuevoEstudiante, id: Date.now()}
        setLstEstudiantes([...lstEstudiantes, estudianteFinal])
        setNuevoEstudiante({...nuevoEstudiante, nombre: "", edad: 0, url:""})
    }*/}

    return (
        <div>
            <h1>Estudiantes</h1>
            <EstudianteForm onAgregar = {AgregarEstudiante} />
            <hr />
            
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