// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'
import Element from './Element'

// default export
export default function TypographyElementsActive() {
  // state
  const global = useContext(Context)

  // render
  return (
    <form
      className='typography__active-elements-form'
      onSubmit={e => e.preventDefault()}
    >
      <header className='accessibly-hidden'>
        <h2>Select an typography element to add</h2>
      </header>
      <div className='typography__active-elements-wrapper'>
        {global.state.typographyElementsPossible.map(el => {
          return <Element key={el} type={el} />
        })}
      </div>
    </form>
  )
}
