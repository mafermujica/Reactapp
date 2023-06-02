import muyFrio from '../Imagenes/muyFrio.png';
import caliente from '../Imagenes/caliente.png';
import frio from '../Imagenes/frio.png';
import templado from '../Imagenes/templado.png';
import React from "react";



const Cardclima = ({data}) => {
    console.log(data)
    let image = 
    data.temp <= 0 ? muyFrio:
    data.temp >= 1 && data.temp <= 15 ? frio:
    data.temp >= 16 && data.temp <= 25 ? templado:
    data.temp > 25 ? caliente: ''


    return (
    <div className="cardInfo">
    <h2>Ciudad:{data.city}</h2>
    <h4>Pais:{data.country}</h4>
    <h5>Temperatura:{data.temp}</h5>
    <img src={image} alt="imagen-clima" />
    
    
    </div>
    )
}

export default Cardclima;


