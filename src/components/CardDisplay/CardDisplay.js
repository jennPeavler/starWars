import React from 'react'

export const CardDisplay = ({ people, planets, vehicles, lastClick}) => {

  switch(lastClick) {
    case 'people':
      return (
        <div>people</div>
      )
    case 'planets':
      return (
        <div>planets</div>
      )
    case 'vehicles':
      return (
        <div>vehicles</div>
      )
    default:
      return (
        <div>please select category</div>
      )
  }
}
