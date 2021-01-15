import React, { useContext } from 'react'
import { CONTEXT_ACTIONS, Context } from '../App/App'

export default function TypographyElementCheckbox({ id, value, labelText }) {
  const global = useContext(Context)

  const handleCheckChange = e => {
    let newTypographyElements = global.state.typographyElements

    if (newTypographyElements.indexOf(e.currentTarget.value) >= 0) {
      newTypographyElements.splice(
        newTypographyElements.indexOf(e.currentTarget.value),
        1
      )
    } else {
      newTypographyElements.push(e.currentTarget.value)
    }

    const newState = {
      ...global.state,
      typographyElements: newTypographyElements.sort(),
    }

    global.dispatch({
      type: CONTEXT_ACTIONS.TYPOGRAPHY_ELEMENTS_UPDATE,
      payload: newState,
    })
  }

  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        data-typography-element-control='true'
        id={id}
        onChange={handleCheckChange}
        type='checkbox'
        value={value}
      />
    </div>
  )
}
