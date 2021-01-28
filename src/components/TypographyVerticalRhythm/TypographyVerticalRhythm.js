// packages
import React, { useEffect, useContext } from 'react'

// components
import { Context } from '../App/App'
import Toggle from './Toggle'
import BaseFontSize from './BaseFontSize'
import LineHeight from './LineHeight'
import Scale from './Scale'

// style
import './TypographyVerticalRhythm.scss'

// default export
export default function TypographyVerticalRhythm() {
  // state
  const global = useContext(Context)

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

      // TODO: round up or down when determining whether we need another row for bottom margin
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
    <div className='typography-vertical-rhythm'>
      <div className='typography-vertical-rhythm__toggle'>
        <Toggle />
      </div>
      <form
        className='typography-vertical-rhythm__form'
        onSubmit={e => e.preventDefault()}
      >
        {global.state.typographyVerticalRhythm.enabled ? (
          <div className='typography-vertical-rhythm__controls-group'>
            <BaseFontSize />
            <LineHeight />
            <Scale />
          </div>
        ) : null}
      </form>
    </div>
  )
}
