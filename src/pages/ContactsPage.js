import Box from '../components/Box';

function ContactsPage(props){
   


  
    return(
      <div className="App">
      {
       props.contacts.map((contact) => (
          <Box
            nombre={contact}
            />
        ))
       }
       </div>)
}
export default ContactsPage;