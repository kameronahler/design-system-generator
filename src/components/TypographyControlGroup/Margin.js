// packages
import React, { useContext, useState } from 'react'

// components
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'
import { Context } from '../App/App'

export default function Margin({ props }) {
  const global = useContext(Context)
  const [displayValue, setDisplayValue] = useState(props.style.margin)

  const handleMarginChange = e => {
    setDisplayValue(e.currentTarget.value)
  }

  // TODO: consider a debounce in tandem or a save button component
  const handleMarginBlur = () => {
    const newEntry = {
      ...props,
      style: { ...props.style, margin: `${displayValue}` },
    }
    useUpdateActiveElement({ global, newEntry })
  }

  return (
    <div className='typography-control-group__input-wrapper'>
      <label
        className='typography-control-group__label'
        htmlFor={`${props.element}-input-margin`}
      >
        Margin (CSS)
      </label>
      <input
        className='typography-control-group__input'
        id={`${props.element}-input-margin`}
        name={`${props.element}-input-margin`}
        onBlur={handleMarginBlur}
        onChange={handleMarginChange}
        type='text'
        value={displayValue}
      ></input>
    </div>
  )
}
