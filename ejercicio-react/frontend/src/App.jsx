import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estudiante from "./components/Estudiante";
import EstudiantesPage from "./pages/EstudiantesPage";
import { EstudianteForm } from "./components/EstudianteForm";
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/estudiantes" element={<EstudiantesPage/> }></Route>
        <Route path="/estudiantes/nuevo" element={<EstudianteForm/> }></Route>
        <Route path="/home" element={<HomePage/> }></Route>
      </Routes>
    </ BrowserRouter>

  );
}

export default App;