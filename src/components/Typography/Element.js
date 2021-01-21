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
import './Element.scss'

export default function Element({ props }) {
  return (
    <form className='element' onSubmit={e => e.preventDefault()}>
      <div className='element__inner'>
        <header className='element__header'>
          <h1 className='element__title'>{props.element}</h1>
          <ControlRemoveElement props={props} />
        </header>
        <div className='element__controls'>
          <ControlFontFamily props={props} />
          <ControlFontWeight props={props} />
          <ControlFontSize props={props} />
          <ControlLineHeight props={props} />
          <ControlMargin props={props} />
          <ControlColor props={props} />
        </div>
        <div className='element__text'>
          <ControlText props={props} />
        </div>
      </div>
    </form>
  )
}
