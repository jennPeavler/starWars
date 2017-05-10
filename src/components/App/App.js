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
      people: {},
      planets: {},
      vehicles: {},
      lastClick: ''
    }
  }

  componentWillMount() {
    this.getScrollingQuote()
    // this.getPeople()
    // this.getPlanets()
    // this.getVehicles()
  }

  getScrollingQuote() {
    fetch('http://swapi.co/api/films')
    .then((resp) => resp.json())
    .then((data) => {
    this.setState({ quotes: this.dataScrubber.scrubQuotes(data) })
    })
  }

  getPeople() {
    fetch('http://swapi.co/api/people')
    .then((resp) => resp.json())
    .then((data) => {
    this.setState({ people: this.dataScrubber.scrubPeople(data), lastClick: 'people' })
    })
  }

  getPlanets() {
    fetch('http://swapi.co/api/planets/')
    .then((resp) => resp.json())
    .then((data) => {
      this.setState({ planets: this.dataScrubber.scrubPlanets(data), lastClick: 'planets' })
      // console.log(this.state.planets)
    })
  }

  getVehicles() {
    fetch('http://swapi.co/api/vehicles/')
    .then((resp) => resp.json())
    .then((data) => {
      this.setState({ vehicles: this.dataScrubber.scrubVehicles(data), lastClick: 'vehicles' })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Swapi-Box</h1>
        <Controls
          getPeople={this.getPeople.bind(this)}
          getVehicles={this.getVehicles.bind(this)}
          getPlanets={this.getPlanets.bind(this)}/>
        <SideBar quotes={this.state.quotes}/>
        <Favorites />
        <CardDisplay
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles}
          lastClick={this.state.lastClick}
          />
      </div>
    );
  }
}

export default App;
