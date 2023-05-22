import { Route, Routes } from 'react-router-dom';

import "./css/App.css"

import NavBar from './componentes/Navbar';
import Contactanos from './componentes/Contactanos';
import Footer from "./componentes/Footer";

import Home from "./secciones/Home";
import Formulario from "./secciones/Formulario";
import Lista from "./secciones/Lista";



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
              element={<Lista/>} >
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
      <Footer></Footer>  

    </>
  );
}

export default App;
