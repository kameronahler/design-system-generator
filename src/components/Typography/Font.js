// packages
import React, { useState, useEffect, useMemo, useContext } from 'react'
import axios from 'axios'

// components
import { CONTEXT_ACTIONS, Context } from '../App/App'

// static
const GOOGLE_API = process.env.GOOGLE_DEV_API
const GOOGLE_FONTS_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_API}`
const GOOGLE_FONTS_CSS_URL = 'https://fonts.googleapis.com/css2?'

export default function Fonts() {
  // state
  const global = useContext(Context)
  const [fontData, setFontData] = useState([])
  const [fontCategory, setFontCategory] = useState('all')

  console.log(fontData)

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
      `"${global.state.typographyFont.family}", sans-serif`
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
          <div>
            <label htmlFor='typography-font-category-all'>All</label>
            <input
              checked={fontCategory ? true : false}
              id='typography-font-category-all'
              name='typography-font-category'
              onChange={e => setFontCategory(e.currentTarget.value)}
              type='radio'
              value='all'
            />
          </div>
          <div>
            <label htmlFor='typography-font-category-serif'>Serif</label>
            <input
              checked={fontCategory ? true : false}
              id='typography-font-category-serif'
              name='typography-font-category'
              onChange={e => setFontCategory(e.currentTarget.value)}
              type='radio'
              value='serif'
            />
          </div>
          <div>
            <label htmlFor='typography-font-category-sans-serif'>
              Sans Serif
            </label>
            <input
              checked={fontCategory ? true : false}
              id='typography-font-category-sans-serif'
              name='typography-font-category'
              onChange={e => setFontCategory(e.currentTarget.value)}
              type='radio'
              value='sans-serif'
            />
          </div>
          <div>
            <label htmlFor='typography-font-category-display'>Display</label>
            <input
              checked={fontCategory ? true : false}
              id='typography-font-category-display'
              name='typography-font-category'
              onChange={e => setFontCategory(e.currentTarget.value)}
              type='radio'
              value='display'
            />
          </div>
          <div>
            <label htmlFor='typography-font-category-handwriting'>
              Handwriting
            </label>
            <input
              checked={fontCategory ? true : false}
              id='typography-font-handwriting'
              name='typography-font-category'
              onChange={e => setFontCategory(e.currentTarget.value)}
              type='radio'
              value='handwriting'
            />
          </div>
          <div>
            <label htmlFor='typography-font-category-monospace'>
              Monospace
            </label>
            <input
              checked={fontCategory ? true : false}
              id='typography-font-category-monospace'
              name='typography-font-category'
              onChange={e => setFontCategory(e.currentTarget.value)}
              type='radio'
              value='monospace'
            />
          </div>
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
