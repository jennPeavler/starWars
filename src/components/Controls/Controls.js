import React from 'react'
import PropTypes from 'prop-types';

export const Controls = ( {getPeople, getVehicles, getPlanets, handleClick }) => {
  return (
    <div>
      <button className='button people-btn' onClick={() => handleClick('people')}>PEOPLE</button>
      <button className='button planets-btn' onClick={() => handleClick('planets')}>PLANETS</button>
      <button className='button vehicles-btn' onClick={() => handleClick('vehicles')}>VEHICLES</button>


    </div>
  )
}

Controls.PropTypes = {
  handleClick: PropTypes.func.isRequired,
  getPeople: PropTypes.func,
  getVehicles: PropTypes.func,
  getPlanets: PropTypes.func
}
