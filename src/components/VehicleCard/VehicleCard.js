import React from 'react'

export const VehicleCard = ({ singleVehicle }) => {
  console.log(singleVehicle.name);
  return (
    <section className='vehicle-card'>
      <h1>{singleVehicle.name}</h1>
      <h3>{singleVehicle.model}</h3>
      <h3>{singleVehicle.class}</h3>
      <h3>{singleVehicle.numberOfPassengers}</h3>
    </section>
  )
}
