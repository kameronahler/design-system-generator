// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'

// default export
export default function Color({ props }) {
  // state
  const global = useContext(Context)
  const [displayValue, setDisplayValue] = useState(props.style.color)

  // handlers
  const handleColorChange = e => {
    setDisplayValue(e.currentTarget.value)
  }

  const handleColorBlur = () => {
    // TODO: consider a debounce in tandem or a save button component
    const newEntry = {
      ...props,
      style: { ...props.style, color: `${displayValue}` },
    }
    useUpdateActiveElement({ global, newEntry })
  }

  // render
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
