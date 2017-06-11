import React, { Component } from 'react';
import './App.css';
import {Controls} from '../Controls/Controls'
import {SideBar} from '../SideBar/SideBar'
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
      lastClick: '',
      favorites: []
    }
  }

  componentWillMount() {
    this.getScrollingQuote()
    this.getPeople()
    this.getPlanets()
    this.getVehicles()
  }

  handleClick(cardType) {
    this.setState({ lastClick: cardType })
  }

  handleToggle(name){
    if(!this.state.favorites.includes(name)) {
      this.state.favorites.push(name)
      return this.setState( {favorites: this.state.favorites} )
    } else if (this.state.favorites.includes(name)) {
      let match = this.state.favorites.indexOf(name)

      this.state.favorites.splice(match, 1)
      return this.setState({favorites: this.state.favorites})
    }
  }

  getScrollingQuote() {
    fetch('https://swapi.co/api/films/')
    .then((resp) => resp.json())
    .then((data) => {
    this.state.quotes.push(this.dataScrubber.scrubQuotes(data))
    this.setState({ quotes: this.state.quotes })
  })
  .catch((response) => {
      this.setState({ quotes: 'For quote more API calls you must have' })
  })
  }

  getPeople() {
    fetch('https://swapi.co/api/people/')
    .then((resp) => resp.json())
    .then((data) => {
    this.setState({ people: this.dataScrubber.scrubPeople(data) })
    })
    .catch((error) => {
      this.setState({ people: 'Need people, you do' })
    })
  }

  getPlanets() {
    fetch('https://swapi.co/api/planets/')
    .then((resp) => resp.json())
    .then((data) => {
      this.setState({ planets: this.dataScrubber.scrubPlanets(data) })
    })
    .catch((error) => {
      this.setState({ planets: 'Need planets, you do' })
    })
  }

  getVehicles() {
    fetch('https://swapi.co/api/vehicles/')
    .then((resp) => resp.json())
    .then((data) => {
      this.setState({ vehicles: this.dataScrubber.scrubVehicles(data) })
    })
    .catch((error) => {
      this.setState({ vehicles: 'Invisbile vehicles, you have!' })
    })
  }

  render() {
    return (
      <main className="App">
        <aside id='side-bar-wrapper'>
          <section id='side-bar'>
            <div id='side-bar-content'>
              <h3 id='side-bar-title'>STAR WARS</h3>
              <SideBar
                id='movie-quote'
                quotes={this.state.quotes} />
            </div>
          </section>
        </aside>
        <section id='content-wrapper'>
          <header>
            <h1 id='title'>star wars is rad</h1>
            <section id='button-wrapper'>
              <Controls
                id='controls'
                handleClick={this.handleClick.bind(this)}
                getPeople={this.getPeople.bind(this)}
                getVehicles={this.getVehicles.bind(this)}
                getPlanets={this.getPlanets.bind(this)}
                favorites={this.state.favorites} />
            </section>
            </header>
            <section id='card-display'>
              <CardDisplay
                people={this.state.people}
                planets={this.state.planets}
                vehicles={this.state.vehicles}
                lastClick={this.state.lastClick}
                handleToggle={this.handleToggle.bind(this)}
                favoriteClass={this.dataScrubber.favoriteClass}
                favorites={this.state.favorites}/>
            </section>
        </section>
      </main>
    );
  }
}

export default App;
