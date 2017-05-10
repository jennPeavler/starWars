import React from 'react'

export const Favorites = ({ handleClick, favorites }) => {
  return (
    <div>
      <button className='button' id='favorites-btn' onClick={(e) => handleClick('favorites')}>FAVORITES<span id='favorites-indicator'>{favorites.length}</span></button>

    </div>
  )
}
