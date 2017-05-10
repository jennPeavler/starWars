import React from 'react'

export const Controls = ( {getPeople, getVehicles, getPlanets, handleClick }) => {
  return (
    <div>
      <button className='button' onClick= {(e) => handleClick(e)}>PEOPLE</button>
      <button className='button' onClick= {(e) => handleClick(e)}>PLANETS</button>
      <button className='button' onClick= {(e) => handleClick(e)}>VEHICLES</button>


    </div>
  )
}
