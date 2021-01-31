// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'

// default export
export default function LineHeight({ props }) {
  // state
  const global = useContext(Context)
  const [displayValue, setDisplayValue] = useState(props.style.lineHeight)

  // handlers
  const handleLineHeightChange = e => {
    setDisplayValue(e.currentTarget.value)
  }

  const handleLineHeightBlur = () => {
    // TODO: consider a debounce in tandem or a save button component
    const newEntry = {
      ...props,
      style: { ...props.style, lineHeight: `${displayValue}` },
    }
    useUpdateActiveElement({ global, newEntry })
  }

  // render
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
        disabled={global.state.verticalRhythmEnabled ? true : false}
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
