import { useEffect, useState } from 'react';
import Box from '../components/Contact';
import axios from "axios"
import Contact from '../components/Contact';

function ContactsPage(props){
   
  const [contacts,setContacts] = useState([])

  useEffect(()=> { axios.get("http://localhost:8081/contacts").then(
    (contact) => {setContacts(contact.data)}
  )})

  
    return(
      <div className="App">
        {contacts.map((contact)=>{
          // add if statements and all other information
          return(
          <Contact action={contact.action}/>
          )
        })}
       </div>)
}
export default ContactsPage;