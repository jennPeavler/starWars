import React from 'react'

export const Controls = ( {getPeople, getVehicles, getPlanets, handleClick }) => {
  return (
    <div>
      <button className='button' onClick= {() => handleClick('people')}>PEOPLE</button>
      <button className='button' onClick= {() => handleClick('planets')}>PLANETS</button>
      <button className='button' onClick= {() => handleClick('vehicles')}>VEHICLES</button>


    </div>
  )
}
