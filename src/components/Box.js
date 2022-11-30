// import './Cuadrado.css'
import {Link} from "react-router-dom";

function Box(props){

    return(
    <div className="main">
        <h1 className="t"><Link to={`/contacts/${props.id}`}>{props.nombre}</Link></h1>
        <h2 className="t">{props.action}</h2>
    </div>
    )

}

export default Box;