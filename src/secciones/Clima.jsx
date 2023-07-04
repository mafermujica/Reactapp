import SearchCountry from '../componentes/SearchCointry';
import Cardclima from '../componentes/Cardclima';
import Api from '../componentes/Api';
import React, {useEffect, useState} from 'react';
import getApiInfo from '../action/getApiInfo';
import '../css/Clima.css';


function Clima () {

  const [data, setData] = useState({
    city: '',
    country: '',
    temp: '',
  })

  const [city, setCity] = useState('')

  useEffect(()=>{
       
    getApiInfo(city).then(data =>{
      console.log("esta es mi data", data)

      setData ( prevState => ({
        ...prevState,
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        
      }))
      
    })

},[city])

const handleSumit = (e) => {
  e.preventDefault()
  setCity(e.target[0].value);
    console.log(e.target[0].value)
    e.target.reset() 
}
  return (
    <div>
      <h1>Clima</h1>
          <SearchCountry handleSumit={handleSumit}/>
            <div className='containerClima'>
              <Cardclima data={data}/>
            </div>
          <Api />
    </div>
    );
}

export default Clima;
