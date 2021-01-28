// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'

export default function Toggle() {
  const global = useContext(Context)

  // handlers
  const handleTogglerChange = () => {
    const newContext = { ...global.state }
    newContext.typographyVerticalRhythm.enabled = !newContext
      .typographyVerticalRhythm.enabled
    global.dispatch({ payload: newContext })
  }

  // render
  return (
    <div className='typography-vertical-rhythm__input-wrapper'>
      <input
        checked={global.state.typographyVerticalRhythm.enabled}
        className='typography-vertical-rhythm__input'
        id='typography-vertical-rhythm-toggle'
        onChange={handleTogglerChange}
        type='checkbox'
      />
      <label
        className='typography-vertical-rhythm__label'
        htmlFor='typography-vertical-rhythm-toggle'
      >
        &nbsp;Vertical Rhythm
      </label>
    </div>
  )
}
