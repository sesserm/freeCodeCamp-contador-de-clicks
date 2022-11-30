import './App.css';
import freeCodeCampLogo from './imagenes/logo-freecodecamp.png';
import Boton from './componentes/Boton.js'

const manejarClick = () => {
    console.log("click");
  }

  const reiniciarContador = () => {
    console.log('reiniciar');
  }

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo-freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
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
