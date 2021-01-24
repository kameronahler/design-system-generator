// packages
import React, { useEffect, useContext } from 'react'

// components
import { Context } from '../App/App'

// default export
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

  // useEffect
  const checkSelectedOptions = () => {
    // normally you'd store state for the value of the select and what option was
    // selected based on that because defaultValue does not update on rerender.
    // in this case we have to fire a context which forces a cascade of rerendering
    // so setting state here wouldn't do anything, so we just do this in the dom
    // after the component has mounted
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

  // render
  return (
    <div className='typography-control-group__input-wrapper typography-control-group__input-wrapper--order'>
      <label
        className='accessibly-hidden'
        htmlFor={`${props.element}-select-order`}
      >
        Order
      </label>
      <select
        className='typography-control-group__input typography-control-group__input--order'
        id={`${props.element}-select-order`}
        name={`${props.element}-select-order`}
        onChange={handleOrderChange}
      >
        {jsxToDisplay()}
      </select>
    </div>
  )
}
