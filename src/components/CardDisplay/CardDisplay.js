import React from 'react'
import { VehicleCard } from '../VehicleCard/VehicleCard'
import { PlanetCard } from '../PlanetCard/PlanetCard'
import { PeopleCard } from '../PeopleCard/PeopleCard'

export const CardDisplay = ({ people, planets, vehicles, lastClick, handleToggle, favoriteClass, favorites }) => {

 // if(planets.Naboo.residents === undefined) {
 //   console.log('I am not happy')
 // }

  // console.log(Object.keys(vehicles));

  switch(lastClick) {
    case 'people':
      return (
        <section>
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
        <section>
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
        <section>
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
    default:
      return (
        <div>please select category</div>
      )
  }
}
