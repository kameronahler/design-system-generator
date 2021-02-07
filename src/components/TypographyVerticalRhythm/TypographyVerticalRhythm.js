// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'
import Toggle from './Toggle'
import BaseFontSize from './BaseFontSize'
import LineHeight from './LineHeight'
import Scale from './Scale'

// style
import './TypographyVerticalRhythm.scss'

// default export
export default function TypographyVerticalRhythm() {
  // state
  const global = useContext(Context)

  // render
  return (
    <div className='typography-vertical-rhythm'>
      <div className='typography-vertical-rhythm__toggle'>
        <Toggle />
      </div>
      <form
        className='typography-vertical-rhythm__form'
        onSubmit={e => e.preventDefault()}
      >
        {global.state.verticalRhythmEnabled ? (
          <div className='typography-vertical-rhythm__controls-group'>
            <BaseFontSize />
            <LineHeight />
            <Scale />
          </div>
        ) : null}
      </form>
    </div>
  )
}
