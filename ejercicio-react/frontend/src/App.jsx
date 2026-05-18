import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estudiante from "./components/Estudiante";
import EstudiantesPage from "./pages/EstudiantesPage";
import { EstudianteForm } from "./components/EstudianteForm";
import { HomePage } from "./pages/HomePage";

//Se añadio esto veras
import { useEstudiante } from "./hooks/useEstudiante";

function App() {

  // y se añadio esto tambien
  //ya que el app es el padre de los dos
  const { estudiantes, agregarEstudiante} = useEstudiante();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/estudiantes" element={<EstudiantesPage estudiantes = {estudiantes}/> }></Route>
        <Route path="/estudiantes/nuevo" element={<EstudianteForm onAgregar = {agregarEstudiante}/> }></Route>
        <Route path="/home" element={<HomePage/> }></Route>
      </Routes>
    </ BrowserRouter>

  );
}

export default App;