import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import React from 'react'
import "./AllPages.css"
import {BrowserRouter as Router,Route,Routes,Link,} from "react-router-dom";
import NavigationBar from '../components/NavigationBar';

export default class ClientsPage extends React.Component {


  state = {
    clients: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/clients`).then(res => {
      const clients = res.data;
      this.setState({ clients });
    })
  }


  render() {
    return (
      <div className="App">
                <NavigationBar />

        {/* <div className='rows'> */}
        {
          this.state.clients.map(client =>
            <div className='card' key={client.id}>
              <div className='container'>
                <div className='list'>
                <h4>Id: {client.id}</h4>

                <p>Name: {client.name}</p>
                {/* <p><a href="/contacts/{client.contactId}">Contact related:{}</a></p> */}
                <Link to={`/contacts/${client.contactId}`}>Contact Related: {client.contactId}</Link>
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


}
