// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'

// default export
export default function Margin({ props }) {
  // state
  const global = useContext(Context)
  const [displayValue, setDisplayValue] = useState(props.style.margin)

  // handlers
  const handleMarginChange = e => {
    setDisplayValue(e.currentTarget.value)
  }

  const handleMarginBlur = () => {
    // TODO: consider a debounce in tandem or a save button component
    const newEntry = {
      ...props,
      style: { ...props.style, margin: `${displayValue}` },
    }
    useUpdateActiveElement({ global, newEntry })
  }

  // render
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
