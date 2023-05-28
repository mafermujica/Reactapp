import Welcome from '../componentes/Welcome';
import ButtonWelcome from '../componentes/ButtonWelcome';
import '../css/Home.css';


export default function Home (){
    return(
        <>
        <div className="homeContainer">
        <h1 className="tituloHome">Home</h1>
        <Welcome />
        <ButtonWelcome />
        </div>
        </>
    )
}