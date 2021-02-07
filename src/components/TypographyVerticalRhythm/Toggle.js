// packages
import React, { useEffect, useContext } from 'react'

// components
import { Context } from '../App/App'
import useGetActiveElement from '../../customHooks/useGetActiveElement'

export default function Toggle() {
  // state
  const global = useContext(Context)
  const requiredElementPresent = useGetActiveElement({
    global: global,
    element: 'p',
  })

  // handlers
  const handleTogglerChange = () => {
    const newContext = { ...global.state }
    newContext.verticalRhythmEnabled = !newContext.verticalRhythmEnabled
    global.dispatch({ payload: newContext })
  }

  // mount
  const setInitialOverrides = () => {
    if (global.state.verticalRhythmEnabled) {
      const newContext = { ...global.state }
      newContext.elementsActive.forEach(el => {
        el.verticalRhythm.fontSize = el.style.fontSize
        el.verticalRhythm.lineHeight = el.style.lineHeight
        el.verticalRhythm.marginBottom = el.style.marginBottom
        el.verticalRhythm.marginTop = el.style.marginTop
      })

      global.dispatch({ payload: newContext })
    }
  }

  const numberOfRowsNeeded = ({ rowHeight, lineHeight }) => {
    let diff = rowHeight - lineHeight
    let i = 1

    while (diff <= 0) {
      const optimalLineHeight = i * rowHeight

      if (optimalLineHeight >= lineHeight) {
        return optimalLineHeight
      } else {
        i++
      }
    }
  }

  useEffect(setInitialOverrides, [global.state.verticalRhythmEnabled])
  useEffect(() => {
    // TODO: round up or down when determining whether we need another row for bottom margin
    global.state.elementsActive.forEach(activeEl => {
      const row = activeEl.style.fontSize * activeEl.style.lineHeight
      const scale = ''
      const totalLineHeightNeeded = numberOfRowsNeeded({
        rowHeight: row,
        lineHeight: activeEl.style.lineHeight,
      })
      console.log(
        activeEl.element,
        `font-size: ${activeEl.style.fontSize}`,
        `line-height: ${activeEl.style.lineHeight}`,
        `margin-top: ${activeEl.style.marginTop}`,
        `margin-bottom: ${
          totalLineHeightNeeded - activeEl.style.lineHeight + row
        }`,
        `total lines needed: ${totalLineHeightNeeded}`
      )
    })
  })

  // render
  return (
    <div className='typography-vertical-rhythm__input-wrapper'>
      <input
        checked={global.state.verticalRhythmEnabled}
        className='typography-vertical-rhythm__input'
        disabled={!requiredElementPresent}
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
