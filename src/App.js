import "./css/App.css"

import NavBar from './componentes/Navbar';

import Contactanos from './componentes/Contactanos';

import { Route, Routes } from 'react-router-dom';
import Home from "./secciones/Home";
import Formulario from "./secciones/Formulario";



function App() {
  return (
    <>
    

      
 

    <NavBar />
      <Routes>
          <Route 
            path="/" 
            element={<Home/>} >
          </Route>
          <Route 
            path="/contactanos" 
            element={<Contactanos />} >
          </Route>
          <Route 
            path="/about" 
            element={<Contactanos />} >
          </Route>
          <Route 
            path="/formulario" 
            element={<Formulario />} >
          </Route>
          
      </Routes>
    
    </>
  );
}

export default App;
