import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

const GOOGLE_API = process.env.GOOGLE_DEV_API
const GOOGLE_FONTS_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_API}`
const GOOGLE_FONTS_CSS_URL = 'https://fonts.googleapis.com/css2?'

export default function Fonts() {
  const [fontData, setFontData] = useState([])
  const [currentFont, setCurrentFont] = useState(null)

  // memoized without dependency
  const memoGoogleFontsAPI = useMemo(async () => {
    try {
      const res = await axios.get(GOOGLE_FONTS_URL)
      setFontData(res.data.items)
    } catch (err) {
      console.error(err)
    }
  }, [])

  const handleSelectChange = e => {
    const currentOption = e.currentTarget.querySelector('option:checked')
    const newState = {
      family: e.currentTarget.value,
      src: currentOption.dataset.src,
    }

    setCurrentFont(newState)
  }

  const applyCurrentFontFamily = () => {
    const link = document.createElement('link')
    const family = currentFont.family.replace(/\s/, '+')
    const href = GOOGLE_FONTS_CSS_URL.concat('family=', family, '&')
    console.log(href)
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', href)

    document.head.appendChild(link)
    document.documentElement.style.setProperty(
      '--font-family-typography',
      family + ',sans-serif'
    )
  }

  useEffect(() => {
    if (currentFont) {
      applyCurrentFontFamily()
    }
    GOOGLE_FONTS_CSS_URL
  }, [currentFont])

  return (
    <section>
      <header>
        <h3>Choose font family</h3>
      </header>
      <form onSubmit={() => e.preventDefault()}>
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
