import React from 'react'
import { VehicleCard } from '../VehicleCard/VehicleCard'
import { PlanetCard } from '../PlanetCard/PlanetCard'
import { PeopleCard } from '../PeopleCard/PeopleCard'
import PropTypes from 'prop-types'

export const CardDisplay = ({ people, planets, vehicles, lastClick, handleToggle, favoriteClass, favorites }) => {
  let handleFavorites = (card, index) => {
    switch(card.type){
      case 'people':
        return(
          <PeopleCard
            key={index}
            singlePerson={card}
            handleToggle={handleToggle}
            favoriteClass={favoriteClass}
            favorites={favorites}/>
        )
        case 'planets':
          return(
            <PlanetCard
              key={index}
              singlePlanet={card}
              handleToggle={handleToggle}
              favoriteClass={favoriteClass}
              favorites={favorites}/>
          )
          case 'vehicles':
            return(
              <VehicleCard
                key={index}
                singleVehicle={card}
                handleToggle={handleToggle}
                favoriteClass={favoriteClass}
                favorites={favorites}
               />
            )
          default:
            return(
              <div>Add Some Favorites</div>
            )
    }
  }

  switch(lastClick) {
    case 'people':
      return (
        <section id='people-section'>
          {Object.keys(people).map((key, index) => {
            return(
              <PeopleCard
                key={index}
                singlePerson={people[key]}
                handleToggle={handleToggle}
                favoriteClass={favoriteClass}
                favorites={favorites}/>
            )
          })}
        </section>
      )
    case 'planets':
      return (
        <section id='planet-section'>
          {Object.keys(planets).map((key, index) => {
            return (
              <PlanetCard
                key={index}
                singlePlanet={planets[key]}
                handleToggle={handleToggle}
                favoriteClass={favoriteClass}
                favorites={favorites}/>
            )
          })}
        </section>
      )
    case 'vehicles':
      return (
        <section id='vehicle-section'>
          {Object.keys(vehicles).map((key, index) => {
            return(
              <VehicleCard
                key={index}
                singleVehicle={vehicles[key]}
                handleToggle={handleToggle}
                favoriteClass={favoriteClass}
                favorites={favorites}
               />
            )
          })}
        </section>
      )
    case 'favorites':
    if(!favorites.length) {
      return (
        <div id='select-favorites-display'>Add your favorites, you must!</div>
      )
    }
    return(
      <div id='favorites-section'>
      {favorites.map((card, index) => {
        return(
          <div >
          {handleFavorites(card, index)}
          </div>
        )
      })}
      </div>
    )

    default:
      return (
        <div id='category-div'>Select a category, you must!</div>
      )
  }

}

CardDisplay.PropTypes = {
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object,
  lastClick: PropTypes.string,
  handleToggle: PropTypes.func,
  favoriteClass: PropTypes.string,
  favorites: PropTypes.array
}
