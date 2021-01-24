// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'

export default function Color({ props }) {
  const global = useContext(Context)
  const [displayValue, setDisplayValue] = useState(props.style.color)

  const handleColorChange = e => {
    setDisplayValue(e.currentTarget.value)
  }

  // TODO: consider a debounce in tandem or a save button component
  const handleColorBlur = () => {
    const newEntry = {
      ...props,
      style: { ...props.style, color: `${displayValue}` },
    }
    const newContext = { ...global.state }

    newContext.typographyElementsActive.forEach((activeElementObj, i) => {
      if (activeElementObj.element === props.element) {
        newContext.typographyElementsActive.splice(i, 1, newEntry)
      }
    })

    global.dispatch({ payload: newContext })
  }

  return (
    <div className='typography-control-group__input-wrapper'>
      <label
        className='typography-control-group__label'
        htmlFor={`${props.element}-input-color`}
      >
        Color
      </label>
      <input
        className='typography-control-group__input'
        id={`${props.element}-input-color`}
        name={`${props.element}-input-color`}
        onBlur={handleColorBlur}
        onChange={handleColorChange}
        type='text'
        value={displayValue}
      ></input>
    </div>
  )
}
