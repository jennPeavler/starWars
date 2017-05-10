import React from 'react'
import { VehicleCard } from '../VehicleCard/VehicleCard'
import { PlanetCard } from '../PlanetCard/PlanetCard'

export const CardDisplay = ({ people, planets, vehicles, lastClick }) => {
 console.log(planets.Naboo)
 // if(planets.Naboo.residents === undefined) {
 //   console.log('I am not happy')
 // }

  // console.log(Object.keys(vehicles));

  switch(lastClick) {
    case 'people':
      return (
        <div>people</div>
      )
    case 'planets':
      return (
        <section>
          {Object.keys(planets).map((key, index) => {
            return (
              <PlanetCard
                key={index}
                singlePlanet={planets[key]} />
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
