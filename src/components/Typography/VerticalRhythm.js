// packages
import React, { useState, useEffect, useContext } from 'react'

// components
import { Context } from '../App/App'

// default export
export default function VerticalRhythm() {
  // state
  const global = useContext(Context)
  const [baseFontSize, setBaseFontSize] = useState(
    global.state.typographyVerticalRhythm.baseFontSize
  )
  const [lineHeight, setLineHeight] = useState(
    global.state.typographyVerticalRhythm.lineHeight
  )
  const [scale, setScale] = useState(
    global.state.typographyVerticalRhythm.scale
  )

  // handlers
  const handleTogglerChange = () => {
    const newContext = { ...global.state }
    newContext.typographyVerticalRhythm.enabled = !newContext
      .typographyVerticalRhythm.enabled
    global.dispatch({ payload: newContext })
  }

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

  // useEffect
  useEffect(() => {
    const l = global.state.typographyVerticalRhythm.lineHeight
    const b = global.state.typographyVerticalRhythm.baseFontSize
    const s = global.state.typographyVerticalRhythm.scale
    const row = b * s
    let size = b
    let lineHeight = l * b

    for (let i = 0; i < 6; i++) {
      console.log(size, lineHeight)
      size = size * s
      lineHeight = size * l
    }
  })

  // render
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div>
        <input
          checked={global.state.typographyVerticalRhythm.enabled}
          id='typography-vertical-rhythm-toggle'
          onChange={handleTogglerChange}
          type='checkbox'
        />
        <label
          className='display-inline-block'
          htmlFor='typography-vertical-rhythm-toggle'
        >
          &nbsp;Vertical Rhythm
        </label>
      </div>
      {global.state.typographyVerticalRhythm.enabled ? (
        <div className='display-flex'>
          <div>
            <label
              className='display-inline-block'
              htmlFor='typography-vertical-rhythm-size'
            >
              Base font size
            </label>
            <input
              className='display-inline-block'
              id='typography-vertical-rhythm-size'
              onBlur={handleSizeBlur}
              onChange={e => {
                setBaseFontSize(e.currentTarget.currentValue)
              }}
              type='number'
              value={baseFontSize}
            />
          </div>
          <div>
            <label
              className='display-inline-block'
              htmlFor='typography-vertical-rhythm-line-height'
            >
              Line Height
            </label>
            <input
              className='display-inline-block'
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
          <div>
            <label
              className='display-inline-block'
              htmlFor='typography-vertical-rhythm-scale'
            >
              Scale
            </label>
            <input
              className='display-inline-block'
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
        </div>
      ) : null}
    </form>
  )
}
