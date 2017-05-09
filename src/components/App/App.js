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
      quotes: [],
      people: {}
    }
  }

  componentDidMount() {
    this.getScrollingQuote()
    this.getPeople()
  }

  getScrollingQuote() {
    fetch('http://swapi.co/api/films')
    .then((resp) => resp.json())
    .then((data) => {
    this.setState({ quotes: this.dataScrubber.scrubQuotes(data) })
    })
  }
  getPeople() {
    fetch('http://swapi.co/api/people/')
    .then((resp) => resp.json())
    .then((data) => {
      this.dataScrubber.scrubPeople(data)
    // this.setState({ quote: this.dataScrubber.scrubPeople(data) })
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
