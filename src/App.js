import './App.css';
import Formulario from './components/Formulario';
import Navegacion from './components/Navegacion.js';
import PieDePagina from './components/PieDePagina';




function App() {
  return (
    <div>
      <Navegacion />
      <Formulario />
      <PieDePagina/>
    </div>
  );
}

export default App;
