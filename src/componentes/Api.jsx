import { Link } from "react-router-dom";

export default function Api (){
    return(
        <>
            <div>
                <p className="textoClima">Datos brindados por: <Link to="https://www.weatherapi.com/" target="_blank" className="link">Weatherapi</Link></p>
            </div>
        </>
    )
}