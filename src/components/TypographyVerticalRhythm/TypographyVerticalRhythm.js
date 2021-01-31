// packages
import React, { useEffect, useContext } from 'react'

// components
import { Context } from '../App/App'
import useGetActiveElement from '../../customHooks/useGetActiveElement'
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

  useEffect(() => {
    const p = useGetActiveElement({ global: global, element: 'p' })
    global.state.elementsActive.forEach(activeEl => {
      // const totalLineHeightNeeded = numberOfRowsNeeded({
      //   rowHeight: row,
      //   lineHeight: lineHeight,
      // })
      // TODO: round up or down when determining whether we need another row for bottom margin
      // console.log(
      //   numberOfItems,
      //   item,
      //   'fs',
      //   fs,
      //   'lineHeight',
      //   lineHeight,
      //   'totalLineHeightNeeded',
      //   totalLineHeightNeeded,
      //   'margin-bottom',
      //   totalLineHeightNeeded - lineHeight + row
      // )
      // fs = Math.floor(scale * fs)
      // lh = Math.floor(lineHeight * fs)
      // {
      //   fontSize:,
      //   lineHeight:,
      //   marginBottom:,
      //   marginTop:,
      // }
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
        {global.state.verticalRhythmEnabled ? (
          <div className='typography-vertical-rhythm__controls-group'>
            {/* <BaseFontSize />
            <LineHeight /> */}
            {/* <Scale /> */}
          </div>
        ) : null}
      </form>
    </div>
  )
}
