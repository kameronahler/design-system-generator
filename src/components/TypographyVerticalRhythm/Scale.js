// packages
import React, { useContext, useState } from 'react'

// components
import { Context } from '../App/App'
import useGetActiveElement from '../../customHooks/useGetActiveElement'
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'

export default function Scale() {
  // state
  const global = useContext(Context)
  const [scale, setScale] = useState(() => {
    const p = useGetActiveElement({ global: global, element: 'p' })
    return p.verticalRhythm.scale
  })

  // handlers
  const handleScaleBlur = e => {
    const newEntry = useGetActiveElement({ global: global, element: 'p' })
    newEntry.verticalRhythm.scale = scale
    useUpdateActiveElement({ global, newEntry })
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
        className='typography-vertical-rhythm__input'
        id='typography-vertical-rhythm-scale'
        onBlur={handleScaleBlur}
        onChange={e => {
          setScale(e.currentTarget.value)
        }}
        step='.05'
        type='number'
        value={scale}
      />
    </div>
  )
}
