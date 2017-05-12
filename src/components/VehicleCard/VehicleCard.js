import React from 'react'
import PropTypes from 'prop-types';

export const VehicleCard = ({ singleVehicle, handleToggle, favoriteClass, favorites }) => {
  let favs = favorites.map((obj) => {
    return obj.name
  })

  let favoriteCssClass = favoriteClass(singleVehicle.name, favs)

  return (
    <section id={singleVehicle.name} className={`vehicle-card ${favoriteCssClass}`} onClick={() => {handleToggle(singleVehicle)}}>
      <h2>{singleVehicle.name}</h2>
      <h4><span className='labels'>Model:</span><br />{singleVehicle.model}</h4>
      <h4><span className='labels'>Class:</span><br />{singleVehicle.class}</h4>
      <h4><span className='labels'>Passengers:</span><br />{singleVehicle.numberOfPassengers}</h4>
    </section>
  )
}

VehicleCard.PropTypes = {
  singleVehicle: PropTypes.object,
  handleToggle: PropTypes.func,
  favoriteClass: PropTypes.string,
  favorites: PropTypes.array
}
