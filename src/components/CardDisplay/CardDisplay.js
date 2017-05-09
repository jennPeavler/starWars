import React from 'react'
import { VehicleCard } from '../VehicleCard/VehicleCard'

export const CardDisplay = ({ people, planets, vehicles, lastClick }) => {

  console.log(Object.keys(vehicles));

  switch(lastClick) {
    case 'people':
      return (
        <div>people</div>
      )
    case 'planets':
      return (
        <div>planets</div>
      )
    case 'vehicles':

      return (
        <section>
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
