import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from "./pages/NotFoundPage"
import ContactsPage from "./pages/ContactsPage"
import React, { useState, useEffect } from 'react'
import NavigationBar from ".//components/NavigationBar"





function App() {

  const [contacts, fetchContacts] = useState([])
  const [futureactions, fetchFutureactions] = useState([])





  useEffect(() => {
    fetchContacts()
  }, [])

  useEffect(() => {
    fetchFutureactions()
  }, [])

  return (
    <div className="App">
    {/* <BrowserRouter>
      <Routes>
        <Route path="/contacts" element={<ContactsPage contacts={contacts.map((item,i) => {
          return item
        })} />}>
        
          </Route>
        </Routes>
      </BrowserRouter> */}
      <NavigationBar/>
      <ContactsPage/>

    </div>
  );
}

export default App;

