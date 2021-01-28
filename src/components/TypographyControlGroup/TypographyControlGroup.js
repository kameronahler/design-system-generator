// packages
import React from 'react'

// components
import Color from './Color'
import FontFamily from './FontFamily'
import FontSize from './FontSize'
import FontWeight from './FontWeight'
import LineHeight from './LineHeight'
import Margin from './Margin'
import Order from './Order'
import Text from './Text'

// styles
import './TypographyControlGroup.scss'

// default export
export default function TypographyControlGroup({ renderIndex, props }) {
  // render
  return (
    <form
      className='typography-control-group'
      onSubmit={e => e.preventDefault()}
    >
      <div className='typography-control-group__inner'>
        <header className='typography-control-group__header'>
          <h2 className='typography-control-group__heading'>{props.element}</h2>
        </header>
        <div className='typography-control-group__controls'>
          <FontFamily props={props} />
          <FontWeight props={props} />
          <FontSize props={props} />
          <LineHeight props={props} />
          <Margin props={props} />
          <Color props={props} />
          <Text props={props} />
        </div>
        <div>
          <Order renderIndex={renderIndex} props={props} />
        </div>
      </div>
    </form>
  )
}
