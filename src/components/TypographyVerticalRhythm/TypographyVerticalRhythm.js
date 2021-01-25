// packages
import React, { useState, useEffect, useContext } from 'react'

// components
import { Context } from '../App/App'

// default export
export default function TypographyVerticalRhythm() {
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
  const getMinLineHeight = ({ rowHeight, lineHeight }) => {
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

  useEffect(() => {
    const items = ['p', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1']
    const b = global.state.typographyVerticalRhythm.baseFontSize
    const s = global.state.typographyVerticalRhythm.scale
    const l = global.state.typographyVerticalRhythm.lineHeight
    const row = b * s

    let size = b
    let lineHeight = l * b

    items.forEach(item => {
      const totalLineHeightNeeded = getMinLineHeight({
        rowHeight: row,
        lineHeight: lineHeight,
      })

      console.log(
        item,
        'size',
        size,
        'line-height',
        lineHeight,
        'total height needed',
        totalLineHeightNeeded,
        'margin-bottom',
        totalLineHeightNeeded - lineHeight + row,
        'margin-top',
        row
      )

      size = Math.floor(s * size)
      lineHeight = Math.floor(l * size)
    })
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
