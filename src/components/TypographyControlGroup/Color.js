// packages
import React, { useContext, useState } from 'react'

// components
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'
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
    useUpdateActiveElement({ global, newEntry })
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
