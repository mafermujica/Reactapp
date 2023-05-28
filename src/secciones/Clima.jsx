import '../css/clima.css';

export default function Clima (){
    return(
        <>
            <div className='climaContainer'>
                <h1 className='tituloClima'>Clima</h1>

                    <div className='climaCiudad'>
                        <input type="text" placeholder="Escribe aquí" className='inputClima'/>
                        <button className='buttonClima'>Ver</button>
                    </div>

                    <div className='climaCard'>
                        <p>?</p>
                    </div>
            </div>
        </>
    )
}