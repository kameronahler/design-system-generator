// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../../App/App'

export default function ControlMargin({ props }) {
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
    const newContext = { ...global.state }

    newContext.typographyElementsActive.forEach((activeElementObj, i) => {
      if (activeElementObj.element === props.element) {
        newContext.typographyElementsActive.splice(i, 1, newEntry)
      }
    })

    global.dispatch({ payload: newContext })
  }

  return (
    <>
      <label htmlFor={`${props.element}-input-line-height`}>Margin (CSS)</label>
      <input
        id={`${props.element}-input-line-height`}
        name={`${props.element}-input-line-height`}
        onBlur={handleMarginBlur}
        onChange={handleMarginChange}
        type='text'
        value={displayValue}
      ></input>
    </>
  )
}
