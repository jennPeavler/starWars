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
      <h4><span className='labels'>Species:</span><br />{singlePerson.species}</h4>
      <h4><span className='labels'>Language:</span><br />{singlePerson.language}</h4>
      <h4><span className='labels'>Home:</span><br />{singlePerson.homeworld}</h4>
      <h4><span className='labels'>Population:</span><br />{singlePerson.population}</h4>
    </section>
  )
}

PeopleCard.PropTypes = {
  singlePerson: PropTypes.object,
  handleToggle: PropTypes.func,
  favoriteClass: PropTypes.string,
  favorites: PropTypes.array
}
