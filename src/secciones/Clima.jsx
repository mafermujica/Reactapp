import SearchCountry from '../componentes/SearchCointry';
import Cardclima from '../componentes/Cardclima';
import React, {useEffect, useState} from 'react';
import getApiInfo from '../action/getApiInfo';
import '../css/Clima.css';


function Clima () {

  const [data, setData] = useState({
    city: '',
    country: '',
    temp: '',
    temp_max: '',
    temp_min: '',
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
    <div className="">
      <h1>Clima</h1>
      <SearchCountry handleSumit={handleSumit}/>
      <div className='container'>
      <Cardclima data={data}/>
      </div>
    </div>
    
  
  );
}

export default Clima;
