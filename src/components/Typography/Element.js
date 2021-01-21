// packages
import React from 'react'

// components
import ControlColor from './Controls/ControlColor'
import ControlFontFamily from './Controls/ControlFontFamily'
import ControlFontSize from './Controls/ControlFontSize'
import ControlFontWeight from './Controls/ControlFontWeight'
import ControlLineHeight from './Controls/ControlLineHeight'
import ControlMargin from './Controls/ControlMargin'
import ControlRemoveElement from './Controls/ControlRemoveElement'
import ControlText from './Controls/ControlText'

export default function Element({ props }) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <header>
        <h3>{props.element}</h3>
      </header>

      <div>
        <ControlRemoveElement props={props} />
      </div>

      <div>
        <ControlFontFamily props={props} />
      </div>

      <div>
        <ControlFontWeight props={props} />
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

      <div>
        <ControlText props={props} />
      </div>
    </form>
  )
}
