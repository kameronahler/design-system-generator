// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'

// default export
export default function Text({ props }) {
  // state
  const global = useContext(Context)
  const [displayValue, setDisplayValue] = useState(props.text)

  // handlers
  const handleTextChange = e => {
    setDisplayValue(e.currentTarget.value)
  }

  const handleColorBlur = () => {
    const newEntry = {
      ...props,
      text: displayValue,
    }
    useUpdateActiveElement({ global, newEntry })
  }

  // render
  return (
    <div className='typography-control-group__input-wrapper typography-control-group__input-wrapper--text'>
      <label
        className='typography-control-group__label'
        htmlFor={`${props.element}-input-text`}
      >
        Text
      </label>
      <input
        className='typography-control-group__input'
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
