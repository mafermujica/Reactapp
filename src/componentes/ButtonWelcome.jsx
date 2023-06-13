import { Link } from "react-router-dom";

export default function ButtonWelcome () {
    return(
        <button className="buttonHome cambioColor"><Link to="/Clima" className="link">Clima</Link></button>
    )
    
}