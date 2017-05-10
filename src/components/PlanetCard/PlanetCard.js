import React from 'react'

export const PlanetCard = ({ singlePlanet }) => {
  // console.log(singlePlanet.residents)
  return (
    <section>
      <h1>{singlePlanet.name}</h1>
      <h3>{singlePlanet.terrain}</h3>
      <h3>{singlePlanet.population}</h3>
      <h3>{singlePlanet.climate}</h3>
      <h3>{singlePlanet.residents[0]}</h3>
      <h1> CARD BREAK </h1>

    </section>
  )
}
