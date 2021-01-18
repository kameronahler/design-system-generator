// packages
import React, { useMemo, useContext } from 'react'
import axios from 'axios'

// components
import { CONTEXT_ACTIONS, Context } from '../App/App'
import Controls from './Controls/Controls'
import AddControl from './Controls/AddControl'
import ExampleDisplay from './ExampleDisplay'

// static
const GOOGLE_API = process.env.GOOGLE_DEV_API
const GOOGLE_FONTS_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_API}`

export default function Typography() {
  const global = useContext(Context)

  // get available google fonts via api, but memoize it
  useMemo(async () => {
    try {
      const res = await axios.get(GOOGLE_FONTS_URL)
      const newState = {
        ...global.state,
        typographyFontsAvailable: res.data.items,
      }
      global.dispatch({
        type: CONTEXT_ACTIONS.TYPOGRAPHY_FONTS_AVAILABLE_UPDATE,
        payload: newState,
      })
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <section style={{ marginLeft: '33vw' }}>
      <header>
        <h2>Typography</h2>
      </header>
      <AddControl />
      <hr />
      <Controls />
      <hr />
      <ExampleDisplay />
    </section>
  )
}
