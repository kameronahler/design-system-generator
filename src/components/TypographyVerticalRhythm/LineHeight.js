// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'
import useGetActiveElement from '../../customHooks/useGetActiveElement'
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'

export default function LineHeight() {
  // state
  const global = useContext(Context)
  const [lineHeight, setLineHeight] = useState(() => {
    const p = useGetActiveElement({ global: global, element: 'p' })
    return p.style.lineHeight
  })

  // handlers
  const handleLineHeightBlur = () => {
    const newEntry = useGetActiveElement({ global: global, element: 'p' })
    newEntry.verticalRhythm.lineHeight = lineHeight
    useUpdateActiveElement({ global, newEntry })
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
          setLineHeight(e.currentTarget.value)
        }}
        step='.05'
        type='number'
        value={lineHeight}
      />
    </div>
  )
}
