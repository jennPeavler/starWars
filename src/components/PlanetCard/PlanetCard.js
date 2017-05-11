import React from 'react'
import PropTypes from 'prop-types'

export const PlanetCard = ({ singlePlanet, handleToggle, favoriteClass, favorites }) => {
  let favoriteCssClass = favoriteClass(singlePlanet.name, favorites)
  return (
    <section id={singlePlanet.name} className={`planet-card ${favoriteCssClass}`} onClick={() => {handleToggle(singlePlanet)}}>
      <h1>{singlePlanet.name}</h1>
      <h3>{singlePlanet.terrain}</h3>
      <h3>{singlePlanet.population}</h3>
      <h3>{singlePlanet.climate}</h3>
      {singlePlanet.residents.map((res) => {
        return(
      <h3 key={res.name}>{res}</h3>
        )
      })}
    </section>
  )
}

PlanetCard.PropTypes = {
  singlePlanet: PropTypes.object,
  handleToggle: PropTypes.func,
  favoriteClass: PropTypes.string,
  favorites: PropTypes.array
}
