import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from "./pages/NotFoundPage"
import ContactsPage from "./pages/ContactsPage"
import React, { useState, useEffect } from 'react'





function App() {

  const [contacts, fetchContacts] = useState([])
  const [futureactions, fetchFutureactions] = useState([])



  // const getContacts = () => {
  //   fetch('http://localhost:8081/contacts')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res)
  //       fetchContacts(res)
  //     })
  // }
  // const getFutureactions= () => {
  //   fetch('http://localhost:8081/futureactions')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res)
  //       fetchFutureactions(res)
  //     })
  // }



  useEffect(() => {
    fetchContacts()
  }, [])

  useEffect(() => {
    fetchFutureactions()
  }, [])

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/contacts" element={<ContactsPage contacts={contacts.map((item,i) => {
          return item
        })} />}>
        
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

