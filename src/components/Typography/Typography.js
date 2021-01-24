// packages
import React, { useMemo, useContext } from 'react'
import axios from 'axios'

// components
import { Context } from '../App/App'
import Controls from './Controls'
import AddElement from './AddElement'
import LiveExample from './LiveExample'
import './Typography.scss'

// static
const GOOGLE_API = process.env.GOOGLE_DEV_API
const GOOGLE_FONTS_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_API}`

export default function Typography() {
  const global = useContext(Context)

  // get available google fonts via api, but memoize it
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
        typographyFontsPossible: resFontsPossible,
      }
      global.dispatch({ payload: newContext })
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <section className='typography'>
      <header className='typography__header'>
        <h1 className='typography__heading'>Typography</h1>
        <AddElement />
      </header>
      <section>
        <header className='accessibly-hidden'>
          <h2>Selected Element Controls</h2>
        </header>
        <Controls />
      </section>
      <section className='typography__live-example'>
        <header className='accessibly-hidden'>
          <h2>Selected Element Controls</h2>
        </header>
        <LiveExample />
      </section>
    </section>
  )
}
