import "../css/Formulario.css"



const Formulario = () =>{
    return(
        <>

          <form action="" method="post">
            <div id="contenedor">
            <label htmlFor="">Nombre</label>
            
            <input className="inputFormulario cambioColor" type="text" name="" id="" placeholder="Escriba su nombre" />
           
            <label htmlFor="">Email</label>
            
            <input className="inputFormulario cambioColor" type="email" name="EMAIL" id="" placeholder="Escriba su email" />
            
            <label htmlFor="">Telefono</label>
            
            <input className="inputFormulario cambioColor" type="tel" name="TELEFONO" id="" placeholder="Escriba su telefono"/>
            
            <label htmlFor="">Deje su comentario</label>
            
            <textarea className="cambioColor" name="" id="" cols="41" rows="6" placeholder="Comentarios"></textarea>
            
            <input className="enviar cambioColor colorBoton" type="submit" value="Enviar" />
            </div>
          </form>


        </>
    )
};
export default Formulario;

