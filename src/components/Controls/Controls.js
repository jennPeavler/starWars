import React from 'react'
import PropTypes from 'prop-types';

export const Controls = ( {getPeople, getVehicles, getPlanets, handleClick, favorites }) => {
  return (
    <div className='button-container'>
      <button className='button people-btn' onClick={() => handleClick('people')}>PEOPLE</button>
      <button className='button planets-btn' onClick={() => handleClick('planets')}>PLANETS</button>
      <button className='button vehicles-btn' onClick={() => handleClick('vehicles')}>VEHICLES</button>
      <button className='button' id='favorites-btn' onClick={(e) => handleClick('favorites')}>FAVORITES<span id='favorites-indicator'>{favorites.length}</span></button>


    </div>
  )
}

Controls.PropTypes = {
  handleClick: PropTypes.func.isRequired,
  getPeople: PropTypes.func,
  getVehicles: PropTypes.func,
  getPlanets: PropTypes.func
}
