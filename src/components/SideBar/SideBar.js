import React from 'react'
import PropTypes from 'prop-types';

export const SideBar = ({ quotes }) => {
  return (
    <div>
      {quotes}
    </div>
  )
}

SideBar.PropTypes = {
  quotes: PropTypes.array.isRequired
}
