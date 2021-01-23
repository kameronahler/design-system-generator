// packages
import React, { useEffect, useContext } from 'react'

// components
import { Context } from '../App/App'

export default function Order({ renderIndex, props }) {
  // state
  const global = useContext(Context)

  // handlers
  const handleOrderChange = e => {
    const incomingIndex = parseInt(
      e.currentTarget.querySelector('option:checked').value
    )
    const newContext = { ...global.state }

    newContext.typographyElementsActive.forEach((activeElementObj, i) => {
      if (activeElementObj.element === props.element) {
        newContext.typographyElementsActive.splice(i, 1)
        newContext.typographyElementsActive.splice(incomingIndex, 0, props)
      }
    })

    global.dispatch({ payload: newContext })
  }

  // jsx
  const jsxToDisplay = () => {
    const jsx = []

    for (let i = 0; i < global.state.typographyElementsActive.length; i++) {
      jsx.push(
        <option key={`${props.element}-select-order-${i}`} value={i}>
          {i + 1}
        </option>
      )
    }

    return jsx
  }

  // normally you'd store state for the value of the select and what option was
  // selected based on that because defaultValue does not update on rerender.
  // in this case we have to fire a context which forces a cascade of rerendering
  // so setting state here wouldn't do anything, so we just do this in the dom
  // after the component has mounted
  const checkSelectedOptions = () => {
    const options = document.querySelectorAll(
      `#${props.element}-select-order option`
    )

    options.forEach(option => {
      if (parseInt(option.value) === renderIndex) {
        option.selected = true
      }
    })
  }

  useEffect(checkSelectedOptions)

  return (
    <div className='typography-controls__control-wrapper typography-controls__control-wrapper--order'>
      <label htmlFor={`${props.element}-select-order`}></label>
      <select
        className='typography-controls__input'
        id={`${props.element}-select-order`}
        name={`${props.element}-select-order`}
        onChange={handleOrderChange}
      >
        {jsxToDisplay()}
      </select>
    </div>
  )
}
