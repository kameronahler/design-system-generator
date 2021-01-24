// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'

// default export
export default function RemoveElement({ props }) {
  // state
  const global = useContext(Context)

  // handler
  const handleClick = () => {
    const newEntry = global.state.typographyElementsActive.filter(
      obj => obj.element !== props.element
    )
    useUpdateActiveElement({ global, newEntry })
  }

  // render
  return (
    <button
      className='typography-control-group__input typography-control-group__input--remove'
      onClick={handleClick}
    >
      Delete
    </button>
  )
}
