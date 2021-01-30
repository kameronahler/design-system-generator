// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'
import Element from './Element'

// style
import './TypographyElementsActive.scss'

// default export
export default function TypographyElementsActive() {
  // state
  const global = useContext(Context)

  // render
  return (
    <form
      className='typography-elements-active__form'
      onSubmit={e => e.preventDefault()}
    >
      <div className='typography-elements-active__inner'>
        {global.state.elementsPossible.map(el => {
          return (
            <div key={el} className='typography-elements-active__input-wrapper'>
              <Element type={el} />
            </div>
          )
        })}
      </div>
    </form>
  )
}
