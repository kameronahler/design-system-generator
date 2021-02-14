// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'
import useGetActiveElement from '../../customHooks/useGetActiveElement'
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'

export default function BaseFontSize() {
  // state
  const global = useContext(Context)
  const [displayValue, setDisplayValue] = useState(() => {
    const p = useGetActiveElement({ global: global, element: 'p' })
    return parseInt(p.style.fontSize)
  })

  // handlers
  const handleSizeBlur = e => {
    const newEntry = useGetActiveElement({ global: global, element: 'p' })
    newEntry.verticalRhythm.fontSize = `${displayValue}px`
    useUpdateActiveElement({ global, newEntry })
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
          setDisplayValue(parseInt(e.currentTarget.value))
        }}
        type='number'
        value={displayValue}
      />
    </div>
  )
}
