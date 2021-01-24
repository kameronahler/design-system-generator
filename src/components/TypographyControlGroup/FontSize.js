// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'

export default function FontSize({ props }) {
  const global = useContext(Context)
  const [displayValue, setDisplayValue] = useState(
    parseInt(props.style.fontSize)
  )

  const handleFontSizeChange = e => {
    setDisplayValue(e.currentTarget.value)
  }

  // TODO: consider a debounce in tandem or a save button component
  const handleFontSizeBlur = () => {
    const newEntry = {
      ...props,
      style: { ...props.style, fontSize: `${displayValue}px` },
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
    <div className='typography-control-group__input-wrapper'>
      <label
        className='typography-control-group__label'
        htmlFor={`${props.element}-input-font-size`}
      >
        Font Size (px)
      </label>
      <input
        className='typography-control-group__input'
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
