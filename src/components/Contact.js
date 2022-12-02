import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import React from 'react'
import '../pages/AllPages.css'
import NavigationBar from '../components/NavigationBar';
import { useParams } from 'react-router-dom'


export default function ContactsPage(){


    const {id} = useParams()


  
    axios.get(`http://localhost:8081/contacts`+id).then(res => {
      const contact = res.data;
    })
  

    return (
      <div className="App">
                <NavigationBar />

        {/* <div className='rows'> */}
        {
          this.contact.map(contact =>
            <div className='card' key={contact.id}>
              <div className='container'>
                <div className='list'>
                <h4>Id: {contact.id}</h4>

                <p>Name: {contact.contactNameAndSurname}</p>
                <p>{contact.contactMethod}</p>
                <p>{contact.date}</p>
                </div>
                <img class="resize" src="avatar.png" alt="Avatar"></img>
              
            </div>
            </div>
          )
        }
        </div>

      // </div>


    )

  }



