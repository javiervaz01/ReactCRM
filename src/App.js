import './App.css';
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage"
import ContactsPage from "./pages/ContactsPage"
import React, { useState, useEffect } from 'react'





function App() {

  const [contacts, fetchContacts] = useState([])
  const [futureactions, fetchFutureactions] = useState([])



  const getContacts = () => {
    fetch('http://localhost:8081/contacts')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchContacts(res)
      })
  }
  const getFutureactions= () => {
    fetch('http://localhost:8081/futureactions')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchFutureactions(res)
      })
  }



  useEffect(() => {
    getContacts()
  }, [])

  useEffect(() => {
    getFutureactions()
  }, [])

  return (
    <div className="App">

      <Routes>
      <Route path="/contacts" element={<ContactsPage contacts={contacts.map((item,i) => {
        return item
      })} />}/>


      </Routes>



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

