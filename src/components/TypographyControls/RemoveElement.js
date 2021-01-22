// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'

export default function RemoveElement({ props }) {
  const global = useContext(Context)

  const handleClick = () => {
    const newEntry = global.state.typographyElementsActive.filter(
      obj => obj.element !== props.element
    )
    const newContext = { ...global.state, typographyElementsActive: newEntry }
    global.dispatch({ payload: newContext })
  }

  return <button onClick={handleClick}>Delete</button>
}
