import React, { Component } from 'react';
import './App.css';
import {Controls} from '../Controls/Controls'
import {SideBar} from '../SideBar/SideBar'
import {Favorites} from '../Favorites/Favorites'
import {CardDisplay} from '../CardDisplay/CardDisplay'

class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: []
    }
  }

  componentDidMount() {
    this.getScrollingQuote()
  }

  getScrollingQuote() {
        fetch('http://swapi.co/api/films/')
        .then((resp) => resp.json())
        .then(function(data) {
          console.log(data)
        })
      }






  render() {
    return (
      <div className="App">
        <h1>Swapi-Box</h1>
        <Controls />
        <SideBar />
        <Favorites />
        <CardDisplay />

      </div>
    );
  }
}

export default App;
