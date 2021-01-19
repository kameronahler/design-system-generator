// packages
import React from 'react'

// components
import ControlColor from './Controls/ControlColor'
import ControlFontFamily from './Controls/ControlFontFamily'
import ControlFontSize from './Controls/ControlFontSize'
import ControlLineHeight from './Controls/ControlLineHeight'
import ControlMargin from './Controls/ControlMargin'

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
        <ControlMargin props={props} />
      </div>

      <div>
        <ControlColor props={props} />
      </div>
    </form>
  )
}
