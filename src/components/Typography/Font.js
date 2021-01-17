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
const GOOGLE_FONTS_CATEGORIES = [
  { label: 'Serif', category: 'serif' },
  { label: 'Sans Serif', category: 'sans-serif' },
  { label: 'Handwriting', category: 'handwriting' },
  { label: 'Display', category: 'display' },
  { label: 'Monospace', category: 'monospace' },
]

export default function Fonts() {
  // state
  const global = useContext(Context)
  const [fontData, setFontData] = useState([])
  const [fontCategory, setFontCategory] = useState('serif')

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
  const handleFontFamilyChange = e => {
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

  // user changes font category radio
  const handleFontCategoryChange = e => {
    setFontCategory(e.currentTarget.value)
  }

  // useEffects
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
        <div>
          {GOOGLE_FONTS_CATEGORIES.map(cat => {
            return (
              <FontWeightRadio
                fontCategory={fontCategory}
                handler={handleFontCategoryChange}
                id={`typography-font-category-${cat.category}`}
                key={cat.category}
                labelText={cat.label}
                value={cat.category}
              />
            )
          })}
        </div>
        <div>
          <select onChange={handleFontFamilyChange}>
            <option default>
              {fontData.length > 0 ? 'Select a font' : 'Loading...'}
            </option>
            {fontData.map((el, i) => {
              if (el.category === fontCategory) {
                return (
                  <option key={i} data-src={el.files.regular} value={el.family}>
                    {el.family}
                  </option>
                )
              }
            })}
          </select>
        </div>
      </form>
    </section>
  )
}
