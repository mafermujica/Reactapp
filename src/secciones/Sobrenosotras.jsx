import Lista from "../componentes/Lista"
import '../css/Sobrenosotras.css'


export default function Sobrenosotras (){
    return(
        <div>
            <h1>Sobre nosotras</h1>

            <p className="textoSobreNosotras">Somos un equipo de mujeres comprometidas a mejorar su formación a través de la programación. Con gran entusiasmo por aprender y una motivación implacable, estamos decididas a aprovechar esta oportunidad para crecer en una carrera y contribuir al campo de la tecnología. A pesar de las lingüísticas o de otra índole, estamos trabajando juntas como equipo y apoyándonos en el camino hacia el éxito. Estamos listas para enfrentar los desafíos y aprovechar las oportunidades que se nos presenten en el mundo de la programación y, en última instancia, construir una vida mejor para nosotras y nuestros seres queridos.</p>

            <Lista></Lista>
        </div>
    )
}