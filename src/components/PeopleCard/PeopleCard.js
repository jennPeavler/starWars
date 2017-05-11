import React from 'react'
import PropTypes from 'prop-types'

export const PeopleCard = ({ singlePerson, handleToggle, favoriteClass, favorites }) => {
  let favs = favorites.map((obj) => {
    return obj.name
  })

  let favoriteCssClass = favoriteClass(singlePerson.name, favs)


  return(
    <section id={singlePerson.name} className={`people-card ${favoriteCssClass}`} onClick={() => {handleToggle(singlePerson)}}>
      <h2>{singlePerson.name}</h2>
      <h4>{singlePerson.species}</h4>
      <h4>{singlePerson.language}</h4>
      <h4>{singlePerson.homeworld}</h4>
      <h4>{singlePerson.population}</h4>
    </section>
  )
}

PeopleCard.PropTypes = {
  singlePerson: PropTypes.object,
  handleToggle: PropTypes.func,
  favoriteClass: PropTypes.string,
  favorites: PropTypes.array
}
