import React from 'react'

export const Controls = ( {getPeople, getVehicles, getPlanets, handleClick }) => {
  return (
    <div>
      <button className='button people-btn' onClick= {() => handleClick('people')}>PEOPLE</button>
      <button className='button planets-btn' onClick= {() => handleClick('planets')}>PLANETS</button>
      <button className='button vehicles-btn' onClick= {() => handleClick('vehicles')}>VEHICLES</button>


    </div>
  )
}
