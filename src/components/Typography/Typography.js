// packages
import React, { useMemo, useContext } from 'react'
import axios from 'axios'

// components
import { Context } from '../App/App'
import TypographyElementsActive from '../TypographyElementsActive/TypographyElementsActive'
import Controls from './Controls'
import TypographyVerticalRhythm from '../TypographyVerticalRhythm/TypographyVerticalRhythm'
import LiveExample from './LiveExample'

// styles
import './Typography.scss'

// static
const GOOGLE_API = process.env.GOOGLE_DEV_API
const GOOGLE_FONTS_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_API}`

// default export
export default function Typography() {
  // state
  const global = useContext(Context)

  // memoize axiosing google fonts
  useMemo(async () => {
    try {
      const res = await axios.get(GOOGLE_FONTS_URL)
      const resFontsPossible = res.data.items.map(font => ({
        category: font.category,
        family: font.family,
        variants: font.variants,
      }))

      const newContext = {
        ...global.state,
        fontsPossible: resFontsPossible,
      }
      global.dispatch({ payload: newContext })
    } catch (err) {
      console.error(err)
    }
  }, [])

  // render
  return (
    <section className='typography'>
      <header className='typography__header'>
        <h1 className='typography__heading'>Typography</h1>
      </header>
      <section className='typography__vertical-rhythm'>
        <header className='accessibly-hidden'>
          <h2 className='typography__heading'>Global options</h2>
        </header>
        <TypographyVerticalRhythm />
      </section>
      <section>
        <header className='accessibly-hidden'>
          <h2>Selected Element Controls</h2>
        </header>
        <TypographyElementsActive />
        <Controls />
      </section>

      <section
        className={`typography__live-example${
          global.state.verticalRhythmEnabled
            ? ' typography__live-example--vertical-rhythm'
            : ''
        }`}
      >
        <header className='accessibly-hidden'>
          <h2>Selected Element Controls</h2>
        </header>
        <LiveExample />
      </section>
    </section>
  )
}
