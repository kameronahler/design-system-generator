// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'

export default function BaseFontSize() {
  // state
  const global = useContext(Context)
  const [baseFontSize, setBaseFontSize] = useState(
    global.state.typographyVerticalRhythm.baseFontSize
  )

  // handlers
  const handleSizeBlur = e => {
    const newEntry = {
      ...global.state.typographyVerticalRhythm,
      baseFontSize: e.currentTarget.value,
    }

    const newContext = {
      ...global.state,
      typographyVerticalRhythm: newEntry,
    }

    global.dispatch({ payload: newContext })
  }
  const handleLineHeightBlur = e => {
    const newEntry = {
      ...global.state.typographyVerticalRhythm,
      lineHeight: e.currentTarget.value,
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
        htmlFor='typography-vertical-rhythm-size'
      >
        Base font size
      </label>
      <input
        className='typography-vertical-rhythm__input'
        id='typography-vertical-rhythm-size'
        onBlur={handleSizeBlur}
        onChange={e => {
          setBaseFontSize(e.currentTarget.currentValue)
        }}
        type='number'
        value={baseFontSize}
      />
    </div>
  )
}
