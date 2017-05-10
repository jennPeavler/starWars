import React from 'react'

export const Controls = ( {getPeople, getVehicles, getPlanets, handleClick }) => {
  return (
    <div>
      <button onClick= {(e) => handleClick(e)}>PEOPLE</button>
      <button onClick= {(e) => handleClick(e)}>PLANETS</button>
      <button onClick= {(e) => handleClick(e)}>VEHICLES</button>


    </div>
  )
}
