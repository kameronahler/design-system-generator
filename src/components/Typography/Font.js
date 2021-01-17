// packages
import React, { useState, useEffect, useMemo, useContext } from 'react'
import axios from 'axios'

// components
import { CONTEXT_ACTIONS, Context } from '../App/App'
import FontWeightRadio from './FontWeightRadio'

// static
const GOOGLE_API = process.env.GOOGLE_DEV_API
const GOOGLE_FONTS_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_API}`
const GOOGLE_FONTS_CSS_URL = 'https://fonts.googleapis.com/css2?'

export default function Fonts() {
  // state
  const global = useContext(Context)
  const [fontData, setFontData] = useState([])
  const [fontCategory, setFontCategory] = useState('all')

  // get available google fonts via api, but memoize it
  useMemo(async () => {
    try {
      const res = await axios.get(GOOGLE_FONTS_URL)
      setFontData(res.data.items)
    } catch (err) {
      console.error(err)
    }
  }, [])

  // user changes font select input
  const handleSelectChange = e => {
    const currentOption = e.currentTarget.querySelector('option:checked')
    const newState = {
      ...global.state,
      typographyFont: {
        family: e.currentTarget.value,
        src: currentOption.dataset.src,
      },
    }
    global.dispatch({
      type: CONTEXT_ACTIONS.TYPOGRAPHY_FONT_UPDATE,
      payload: newState,
    })
  }

  // useEffect
  const addFontLinkToHead = () => {
    const link = document.createElement('link')
    const href = `${GOOGLE_FONTS_CSS_URL}family=${global.state.typographyFont.family.replace(
      /\s/,
      '+'
    )}&`
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', href)
    document.head.appendChild(link)
  }

  const updateFontCSSVar = () => {
    document.documentElement.style.setProperty(
      '--font-family-typography',
      `"${global.state.typographyFont.family}", handwriting`
    )
  }

  useEffect(() => {
    if (global.state.typographyFont) {
      addFontLinkToHead()
      updateFontCSSVar()
    }
  }, [global.state.typographyFont])

  return (
    <section>
      <header>
        <h3>Choose font family</h3>
      </header>
      <form onSubmit={() => e.preventDefault()}>
        <section>
          <FontWeightRadio
            id={'typography-font-category-serif'}
            labelText={'Serif'}
            fontCategory={fontCategory}
            onchange={e => setFontCategory(e.currentTarget.value)}
            value={'serif'}
          />
          <FontWeightRadio
            id={'typography-font-category-sans-serif'}
            labelText={'Sans Serif'}
            fontCategory={fontCategory}
            onchange={e => setFontCategory(e.currentTarget.value)}
            value={'sans-serif'}
          />
          <FontWeightRadio
            id={'typography-font-category-handwriting'}
            labelText={'Handwriting'}
            fontCategory={fontCategory}
            onchange={e => setFontCategory(e.currentTarget.value)}
            value={'handwriting'}
          />
          <FontWeightRadio
            id={'typography-font-category-display'}
            labelText={'Display'}
            fontCategory={fontCategory}
            onchange={e => setFontCategory(e.currentTarget.value)}
            value={'display'}
          />
          <FontWeightRadio
            id={'typography-font-category-monospace'}
            labelText={'Monospace'}
            fontCategory={fontCategory}
            onchange={e => setFontCategory(e.currentTarget.value)}
            value={'monospace'}
          />
        </section>
        <select onChange={handleSelectChange}>
          <option default>
            {fontData.length > 0 ? 'Select a font' : 'Loading...'}
          </option>
          {fontData.map((el, i) => {
            return (
              <option key={i} data-src={el.files.regular} value={el.family}>
                {el.family}
              </option>
            )
          })}
        </select>
      </form>
    </section>
  )
}
