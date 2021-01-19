// packages
import React, { useContext } from 'react'

// components
import { Context } from '../../App/App'

export default function ControlFontWeight({ props }) {
  const global = useContext(Context)

  let jsxToDisplay = null

  if (props.googleFont) {
    jsxToDisplay = props.googleFont.variants.filter(
      weight => !weight.includes('italic')
    )
    jsxToDisplay = jsxToDisplay.map(weight => (
      <option
        selected={weight === 'regular' ? true : false}
        key={`${props.element}-input-font-weight-${weight}`}
        value={weight === 'regular' ? 'normal' : weight}
      >
        {weight === 'regular' ? 'Normal' : weight}
      </option>
    ))
  } else {
    jsxToDisplay = [
      <option default value={props.style.fontWeight}>
        {props.style.fontWeight}
      </option>,
    ]
  }

  return (
    <>
      <label htmlFor={`${props.element}-input-font-weight`}>Font Weight</label>
      <select
        id={`${props.element}-input-font-weight`}
        name={`${props.element}-input-font-weight`}
        // onChange={handleFontWeightChange}
      >
        {jsxToDisplay}
      </select>
    </>
  )
}
