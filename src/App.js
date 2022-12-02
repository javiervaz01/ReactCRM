import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from "./pages/NotFoundPage"
import ContactsPage from "./pages/ContactsPage"
import LandingPage from "./pages/LandingPage"
import React, { useState, useEffect } from 'react'
import FutureActionsPage from './pages/FutureActionsPage';
import OpportunitiesPage from './pages/OpportunitiesPAge';
import ClientsPage from './pages/ClientsPage';
import Contact from './components/Contact'




function App() {

  

  return (
    <div className="App">
    
      
      {/* <ContactsPage/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/notfound' element={<NotFoundPage/>}></Route>
        <Route path='/contacts' element={<ContactsPage/>}></Route>
        <Route path='/futureactions' element={<FutureActionsPage/>}></Route>
        <Route path='/opportunities' element={<OpportunitiesPage/>}></Route>
        <Route path='/clients' element={<ClientsPage/>}></Route>
        <Route path='contacts/:contactId' element={<Contact/>} />






      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

