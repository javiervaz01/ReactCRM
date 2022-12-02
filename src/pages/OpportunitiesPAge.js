import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import {BrowserRouter as Router,Route,Routes,Link,} from "react-router-dom";

import React from 'react'
import "./AllPages.css"
import NavigationBar from '../components/NavigationBar';

export default class OpportunitiesPage extends React.Component {


  state = {
    opportunities: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/opportunities`).then(res => {
      const opportunities = res.data;
      this.setState({ opportunities });
    })
  }


  render() {
    return (
      <div className="App">
                <NavigationBar />

        {/* <div className='rows'> */}
        {
          this.state.opportunities.map(opportunity =>
            <div className='card' key={opportunity.id}>
              <div className='container'>
                <div className='list'>
                <h4>Id: {opportunity.id}</h4>

                <p>Name: {opportunity.name}</p>
                <Link to={`/contacts/${opportunity.contactId}`}>Contact Related: {opportunity.contactId}</Link>

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
