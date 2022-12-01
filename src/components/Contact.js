// import './Cuadrado.css'
import {useNavigate} from "react-router-dom"


function Contact(props){

    const navigate = useNavigate()

    //change to opportunity and viceversa then
    //change to client and viceversa then (with axios both)

    return(
    <div className="AllContacts" >
        {/* put images to contacts would be nice */}
        <div class="container">
            <h3>{props.action}</h3>
        </div>
        {/* add buttons here for doing things with the props */}
    </div>
    )

}

export default Contact;