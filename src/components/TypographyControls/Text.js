// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'

export default function Text({ props }) {
  const global = useContext(Context)
  const [displayValue, setDisplayValue] = useState(props.text)

  const handleTextChange = e => {
    setDisplayValue(e.currentTarget.value)
  }

  const handleColorBlur = () => {
    const newEntry = {
      ...props,
      text: displayValue,
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
    <div className='typography-controls__control-wrapper typography-controls__control-wrapper--text'>
      <label htmlFor={`${props.element}-input-text`}>Text</label>
      <input
        className='typography-controls__input'
        id={`${props.element}-input-text`}
        name={`${props.element}-input-text`}
        onBlur={handleColorBlur}
        onChange={handleTextChange}
        type='text'
        value={displayValue}
      ></input>
    </div>
  )
}
