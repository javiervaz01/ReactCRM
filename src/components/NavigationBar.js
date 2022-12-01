import React from "react"
import {useNavigate} from "react-router-dom"
import "./NavigationBar.css"



function NavigationBar(props){

    const nav = useNavigate

    const contacts = ()=>{ NavigationPreloadManager("/contacts")}
    const futureactions = ()=>{ NavigationPreloadManager("/futureactions")}

    return(
        <div className="NavigationBar">
            <button className="button" onClick={contacts}>Contacts</button>
            <button className="button" onClick={futureactions}>Future Actions</button>
            {/* <button className="button" onClick={contacts}></button>
            <button className="button" onClick={contacts}></button>
            <button className="button" onClick={contacts}></button>
            <button className="button" onClick={contacts}></button> */}







        </div>


    )




}




export default NavigationBar;