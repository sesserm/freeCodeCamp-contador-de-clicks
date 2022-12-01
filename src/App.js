import './App.css';
import freeCodeCampLogo from './imagenes/logo-freecodecamp.png';
import Boton from './componentes/Boton.js'
import Contador from './componentes/Contador.js'
import { useState } from 'react';




function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo-freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numClicks = {numClicks}/>
        <Boton 
          texto = 'Click'
          esBotonDeClick = {true}
          manejarClick = {manejarClick}/>
        <Boton 
          texto = 'Reiniciar'
          esBotonDeClick = {false}
          manejarClick = {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
