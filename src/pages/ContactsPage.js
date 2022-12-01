import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import React from 'react'
import "./ContactsPage.css"

export default class ContactsPage extends React.Component {


  state = {
    contacts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/contacts`).then(res => {
      const contacts = res.data;
      this.setState({ contacts });
    })
  }


  render() {
    return (
      <div className="App">

        {
          this.state.contacts.map(contact =>
            <div className='card' key={contact.id}>
              <div className='container'>
                <ul className='list'>
                <li><h3>{contact.id}</h3></li>

                <li><h3>{contact.contactNameAndSurname}</h3></li>
                <li><h3>{contact.contactMethod}</h3></li>
                <li><h3>{contact.date}</h3></li>
                </ul>
                <img class="resize" src="avatar.png" alt="Avatar"></img>
              
            </div>
            </div>
          )
        }

      </div>


    )

  }


}
