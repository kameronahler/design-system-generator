// packages
import React, { useContext, useState } from 'react'

// components
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'
import { Context } from '../App/App'

// default export
export default function FontSize({ props }) {
  // state
  const global = useContext(Context)
  const [displayValue, setDisplayValue] = useState(
    global.state.verticalRhythmEnabled
      ? parseInt(props.verticalRhythm.fontSize)
      : parseInt(props.style.fontSize)
  )

  // handlers
  const handleFontSizeChange = e => {
    setDisplayValue(e.currentTarget.value)
  }

  const handleFontSizeBlur = () => {
    // TODO: consider a debounce in tandem or a save button component
    const newEntry = {
      ...props,
      style: { ...props.style, fontSize: `${displayValue}px` },
    }
    useUpdateActiveElement({ global, newEntry })
  }

  // render
  return (
    <div className='typography-control-group__input-wrapper'>
      <label
        className='typography-control-group__label'
        htmlFor={`${props.element}-input-font-size`}
      >
        Font Size (px)
      </label>
      <input
        className='typography-control-group__input'
        disabled={global.state.verticalRhythmEnabled ? true : false}
        id={`${props.element}-input-font-size`}
        name={`${props.element}-input-font-size`}
        onChange={handleFontSizeChange}
        onBlur={handleFontSizeBlur}
        type='number'
        value={displayValue}
      ></input>
    </div>
  )
}
