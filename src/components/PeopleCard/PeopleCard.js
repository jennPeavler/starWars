import React from 'react'

export const PeopleCard = ({ singlePerson, handleToggle, favoriteClass, favorites }) => {
  let favoriteCssClass = favoriteClass(singlePerson.name, favorites)


  return(
    <section className={`people-card ${favoriteCssClass}`} onClick={() => {handleToggle(singlePerson)}}>
      <h1>{singlePerson.name}</h1>
      <h3>{singlePerson.species}</h3>
      <h3>{singlePerson.language}</h3>
      <h3>{singlePerson.homeworld}</h3>
      <h3>{singlePerson.population}</h3>
    </section>
  )
}
