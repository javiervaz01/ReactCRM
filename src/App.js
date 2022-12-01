import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from "./pages/NotFoundPage"
import ContactsPage from "./pages/ContactsPage"
import LandingPage from "./pages/LandingPage"
import React, { useState, useEffect } from 'react'
import NavigationBar from ".//components/NavigationBar"
import FutureActionsPage from './pages/FutureActionsPage';





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



      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

