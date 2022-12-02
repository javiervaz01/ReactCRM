import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import React from 'react'
import "./AllPages.css"
import NavigationBar from '../components/NavigationBar';

export default class FutureActionsPage extends React.Component {


  state = {
    futureactions: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/futureactions`).then(res => {
      const futureactions = res.data;
      this.setState({ futureactions });
    })
  }


  render() {
    return (
      <div className="App">
           <NavigationBar />

        {/* <div className='rows'> */}

          <div className='message'><h3>Actions planned to be performed in the future</h3></div>
        {
          this.state.futureactions.map(futureaction =>
            <div className='card' key={futureaction.id}>
              <div className='container'>
                <div className='list'>
                <h4>Id: {futureaction.id}</h4>

                <p>Name: {futureaction.contactNameAndSurname}</p>
                <p>{futureaction.contactMethod}</p>
                <p>{futureaction.date}</p>
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
