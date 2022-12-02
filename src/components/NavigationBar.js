import React from "react"
import {useNavigate} from "react-router-dom"
import "./NavigationBar.css"



function NavigationBar(props){

    const nav = useNavigate

    // const contacts = ()=>{ NavigationPreloadManager("/contacts")}
    // const futureactions = ()=>{ NavigationPreloadManager("/futureactions")}

    return(
        <div className="NavigationBar">
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contacts">Contacts</a></li>
            <li><a href="/futureactions">Future Actions</a></li>
            <li><a href="/opportunities">Opportunities</a></li>
            <li><a href="/clients">Clients</a></li>
            <li ><a href="/notfound">Help</a></li>

            </ul>






        </div>


    )




}




export default NavigationBar;