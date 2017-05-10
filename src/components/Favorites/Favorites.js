import React from 'react'

export const Favorites = ({ handleClick }) => {
  return (
    <div>
      <button className='button' id='favorites-btn' onClick={(e) => handleClick('favorites')}>FAVORITES</button>


    </div>
  )
}

//<span id='favorites-indicator'>{favorites.length}</span>
