// packages
import React from 'react'

// components
import ControlFontFamily from './Controls/ControlFontFamily'
import ControlFontSize from './Controls/ControlFontSize'
import ControlLineHeight from './Controls/ControlLineHeight'

export default function Element({ props }) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <header>
        <h3>{props.element}</h3>
      </header>

      <div>
        <ControlFontFamily props={props} />
      </div>

      <div>
        <label htmlFor={`${props.element}-select-font-weight`}>
          Font Weight
        </label>
        <select
          name={`${props.element}-select-font-weight`}
          id={`${props.element}-select-font-weight`}
        >
          <option value={props.style.fontWeight}>
            {props.style.fontWeight}
          </option>
        </select>
      </div>

      <div>
        <ControlFontSize props={props} />
      </div>

      <div>
        <ControlLineHeight props={props} />
      </div>

      <div>
        <label htmlFor={`${props.element}-input-margin`}>Margin</label>
        <input
          name={`${props.element}-input-margin`}
          id={`${props.element}-input-margin`}
          type='text'
          value={props.style.margin}
        ></input>
      </div>

      <div>
        <label htmlFor={`${props.element}-input-color`}>Color</label>
        <input
          name={`${props.element}-input-color`}
          id={`${props.element}-input-color`}
          type='text'
          value={props.style.color}
        ></input>
      </div>
    </form>
  )
}
