
import ButtonWelcome from '../componentes/ButtonWelcome';
import homeClima from '../Imagenes/homeClima.png';
import '../css/Home.css';


export default function Home (){
    return(
        <>
        <div className="homeContainer">
        <h1 className="tituloHome">Descubre el clima con precisión en nuestra aplicación</h1>
       <img src={homeClima} alt="ImagenHome" className='imagenHome' />
        <ButtonWelcome />
        </div>
        </>
    )
}