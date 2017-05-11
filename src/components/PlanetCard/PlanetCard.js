import React from 'react'
import PropTypes from 'prop-types'

export const PlanetCard = ({ singlePlanet, handleToggle, favoriteClass, favorites }) => {
  let favoriteCssClass = favoriteClass(singlePlanet.name, favorites)
  return (
    <section id={singlePlanet.name} className={`planet-card ${favoriteCssClass}`} onClick={() => {handleToggle(singlePlanet)}}>
      <h2>{singlePlanet.name}</h2>
      <h4>{singlePlanet.terrain}</h4>
      <h4>{singlePlanet.population}</h4>
      <h4>{singlePlanet.climate}</h4>
      {singlePlanet.residents.map((res) => {
        return(
      <h4 key={res.name}>{res}</h4>
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
