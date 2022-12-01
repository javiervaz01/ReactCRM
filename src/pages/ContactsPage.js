import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import React from 'react'
import "./ContactsPage.css"
import NavigationBar from '../components/NavigationBar';

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
                <NavigationBar />

        <div className='rows'>
        {
          this.state.contacts.map(contact =>
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

      </div>


    )

  }


}
