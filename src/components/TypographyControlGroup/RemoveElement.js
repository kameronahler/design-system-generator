// packages
import React, { useContext } from 'react'

// components
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'
import { Context } from '../App/App'

export default function RemoveElement({ props }) {
  const global = useContext(Context)

  const handleClick = () => {
    const newEntry = global.state.typographyElementsActive.filter(
      obj => obj.element !== props.element
    )
    useUpdateActiveElement({ global, newEntry })
  }

  return (
    <button
      className='typography-control-group__input typography-control-group__input--remove'
      onClick={handleClick}
    >
      Delete
    </button>
  )
}
