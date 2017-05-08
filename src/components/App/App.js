import React, { Component } from 'react';
import './App.css';
import {Controls} from '../Controls/Controls'
import {SideBar} from '../SideBar/SideBar'
import {Favorites} from '../Favorites/Favorites'
import {CardDisplay} from '../CardDisplay/CardDisplay'
import DataScrubbers from '../DataScrubbers/DataScrubbers'

class App extends Component {
  constructor() {
    super()
    this.dataScrubber = new DataScrubbers()
    this.state = {
      quote: []
    }
  }

  componentDidMount() {
    this.getScrollingQuote()
  }

  getScrollingQuote() {
        fetch('http://swapi.co/api/films')
        .then((resp) => resp.json())
        .then((data) => {
        this.setState({ quote: this.dataScrubber.scrubQuotes(data) })
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
