import Welcome from '../componentes/Welcome';
import ButtonWelcome from '../componentes/ButtonWelcome';
import '../Imagenes/imagenHome.gif';
import '../css/Home.css';


export default function Home (){
    return(
        <>
        <div className="homeContainer">
        <h1 className="tituloHome">Home</h1>
        <Welcome />
        <img src={"https://i.pinimg.com/originals/05/bd/e4/05bde4c8cf2e0f2debabd56ae1589e4d.gif"} alt="ImagenHome" className='imagenHome' />
        <ButtonWelcome />
        </div>
        </>
    )
}