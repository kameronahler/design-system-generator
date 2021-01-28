// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'

export default function Scale() {
  // state
  const global = useContext(Context)
  const [scale, setScale] = useState(
    global.state.typographyVerticalRhythm.scale
  )

  // handlers
  const handleScaleBlur = e => {
    const newEntry = {
      ...global.state.typographyVerticalRhythm,
      scale: e.currentTarget.value,
    }

    const newContext = {
      ...global.state,
      typographyVerticalRhythm: newEntry,
    }

    global.dispatch({ payload: newContext })
  }

  // render
  return (
    <div className='typography-vertical-rhythm__input-wrapper'>
      <label
        className='typography-vertical-rhythm__label'
        htmlFor='typography-vertical-rhythm-scale'
      >
        Scale
      </label>
      <input
        className='typography-vertical-rhythm__label'
        id='typography-vertical-rhythm-scale'
        onBlur={handleScaleBlur}
        onChange={e => {
          setScale(e.currentTarget.currentValue)
        }}
        step='.05'
        type='number'
        value={scale}
      />
    </div>
  )
}
