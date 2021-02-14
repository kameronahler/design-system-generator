// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'

// default export
export default function MarginBottom({ props }) {
  // state
  const global = useContext(Context)
  const [displayValue, setDisplayValue] = useState(
    global.state.verticalRhythmEnabled
      ? parseInt(props.verticalRhythm.marginBottom)
      : parseInt(props.style.marginBottom)
  )

  // handlers
  const handleMarginChange = e => {
    setDisplayValue(e.currentTarget.value)
  }

  const handleMarginBlur = () => {
    // TODO: consider a debounce in tandem or a save button component
    const newEntry = {
      ...props,
      style: { ...props.style, marginBottom: `${displayValue}px` },
    }
    useUpdateActiveElement({ global, newEntry })
  }

  // render
  return (
    <div className='typography-control-group__input-wrapper'>
      <label
        className='typography-control-group__label'
        htmlFor={`${props.element}-input-margin-bottom`}
      >
        Bottom Margin (px)
      </label>
      <input
        className='typography-control-group__input'
        disabled={global.state.verticalRhythmEnabled ? true : false}
        id={`${props.element}-input-margin-bottom`}
        name={`${props.element}-input-margin-bottom`}
        onBlur={handleMarginBlur}
        onChange={handleMarginChange}
        type='number'
        value={displayValue}
      ></input>
    </div>
  )
}
