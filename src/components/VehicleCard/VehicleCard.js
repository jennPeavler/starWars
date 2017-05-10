import React from 'react'

export const VehicleCard = ({ singleVehicle, handleToggle, favoriteClass, favorites }) => {
  let favoriteCssClass = favoriteClass(singleVehicle.name, favorites)
  return (
    <section className={`vehicle-card ${favoriteCssClass}`} onClick={() => {handleToggle(singleVehicle.name)}}>
      <h1>{singleVehicle.name}</h1>
      <h3>{singleVehicle.model}</h3>
      <h3>{singleVehicle.class}</h3>
      <h3>{singleVehicle.numberOfPassengers}</h3>
    </section>
  )
}
