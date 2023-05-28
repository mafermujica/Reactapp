import { Link } from "react-router-dom";
import '../css/NavBar.css'



export default function Navbar() {
    return (
      <nav>
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to='/Clima' className="link">Clima</Link></li>
          <li><Link to='/Sobrenosotras' className="link">Sobre Nosotras</Link></li>
          <li><Link to='/Contacto' className="link">Contacto</Link></li>
        </ul>
      </nav>
    );
  }