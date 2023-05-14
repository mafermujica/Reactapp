


const Cardclima = () => {
   
    const datos = [
        {city: "Buenos Aires"},
        {city: "Caracas"},
        {city: "Monte Video"},
        ]
    return (
      <figure style={{
          border: "solid 2px black",
          width: "200px",
          height: "275px",
          textAlign: "center"
      }}>
          <figcaption>{
                        datos.map((el)=>(
                        <li>{el.city}</li>
                    ))
                }
          </figcaption>
          
      </figure>
    )
 }

export default Cardclima;