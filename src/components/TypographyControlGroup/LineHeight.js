// packages
import React, { useContext, useState } from 'react'

// components
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'
import { Context } from '../App/App'

export default function LineHeight({ props }) {
  const global = useContext(Context)
  const [displayValue, setDisplayValue] = useState(props.style.lineHeight)

  const handleLineHeightChange = e => {
    setDisplayValue(e.currentTarget.value)
  }

  // TODO: consider a debounce in tandem or a save button component
  const handleLineHeightBlur = () => {
    const newEntry = {
      ...props,
      style: { ...props.style, lineHeight: `${displayValue}` },
    }
    useUpdateActiveElement({ global, newEntry })
  }

  return (
    <div className='typography-control-group__input-wrapper'>
      <label
        className='typography-control-group__label'
        htmlFor={`${props.element}-input-line-height`}
      >
        Line Height
      </label>
      <input
        className='typography-control-group__input'
        id={`${props.element}-input-line-height`}
        name={`${props.element}-input-line-height`}
        onBlur={handleLineHeightBlur}
        onChange={handleLineHeightChange}
        type='text'
        value={displayValue}
      ></input>
    </div>
  )
}
