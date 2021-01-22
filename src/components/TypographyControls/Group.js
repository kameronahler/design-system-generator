// packages
import React from 'react'

// components
import Color from './Color'
import FontFamily from './FontFamily'
import FontSize from './FontSize'
import FontWeight from './FontWeight'
import LineHeight from './LineHeight'
import Margin from './Margin'
import RemoveElement from './RemoveElement'
import Text from './Text'

export default function Set({ props }) {
  return (
    <form
      className='typography-controls__group'
      onSubmit={e => e.preventDefault()}
    >
      <div className='typography-controls__group-inner'>
        <header className='typography-controls__group-header'>
          <h1 className='typography-controls__group-title'>{props.element}</h1>
          <RemoveElement props={props} />
        </header>
        <div className='typography-controls__group-controls'>
          <FontFamily props={props} />
          <FontWeight props={props} />
          <FontSize props={props} />
          <LineHeight props={props} />
          <Margin props={props} />
          <Color props={props} />
          <Text props={props} />
        </div>
      </div>
    </form>
  )
}
