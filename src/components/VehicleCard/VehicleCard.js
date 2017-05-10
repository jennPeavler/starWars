import React from 'react'

export const VehicleCard = ({ singleVehicle }) => {
  // console.log(singleVehicle.name);
  return (
    <section className='vehicle-card'>
      <h2>{singleVehicle.name}</h2>
      <h4>{singleVehicle.model}</h4>
      <h4>{singleVehicle.class}</h4>
      <h4>{singleVehicle.numberOfPassengers}</h4>
    </section>
  )
}
