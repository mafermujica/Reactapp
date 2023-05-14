import SobreNosotras from "./Sobrenosotras";



const Tarjetas = () => {
    <SobreNosotras/>
    const datos = [
        {name: "Maria Torres"},
        {name: "Carelis Adrián"},
        {name: "Fabiola Pacheco"},
        {name: "Alix Vivas"},
        {name: "Yetsymar Quintero"},
        {name:"Sorys Perez"},
        {name: "Josveli Hernández"},
        {name: "Maria F. Mujica"}
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
                        <li>{el.name}</li>
                    ))
                }
          </figcaption>
          
      </figure>
    )
    
  };
  export default Tarjetas;