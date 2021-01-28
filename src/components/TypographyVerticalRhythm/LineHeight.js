// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'

export default function LineHeight() {
  // state
  const global = useContext(Context)

  const [lineHeight, setLineHeight] = useState(
    global.state.verticalRhythm.lineHeight
  )

  // handlers
  const handleLineHeightBlur = e => {
    const newEntry = {
      ...global.state.verticalRhythm,
      lineHeight: e.currentTarget.value,
    }

    const newContext = {
      ...global.state,
      verticalRhythm: newEntry,
    }

    global.dispatch({ payload: newContext })
  }

  // render
  return (
    <div className='typography-vertical-rhythm__input-wrapper'>
      <label
        className='typography-vertical-rhythm__label'
        htmlFor='typography-vertical-rhythm-line-height'
      >
        Line Height
      </label>
      <input
        className='typography-vertical-rhythm__input'
        id='typography-vertical-rhythm-line-height'
        onBlur={handleLineHeightBlur}
        onChange={e => {
          setLineHeight(e.currentTarget.currentValue)
        }}
        step='.05'
        type='number'
        value={lineHeight}
      />
    </div>
  )
}
