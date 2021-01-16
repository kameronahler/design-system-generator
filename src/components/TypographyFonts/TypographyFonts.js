import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GOOGLE_API = process.env.GOOGLE_DEV_API
const GOOGLE_FONTS_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_API}`

export default function TypographyFonts() {
  // todo: memoize google font data?
  const [fontData, setFontData] = useState([])
  const [currentFont, setCurrentFont] = useState(null)

  const axiosFontData = async () => {
    try {
      const res = await axios.get(GOOGLE_FONTS_URL)
      setFontData(res.data.items)
    } catch (err) {
      console.error(err)
    }
  }

  const handleFormSubmit = e => {
    e.preventDefault()
  }
  const handleSelectChange = e => {
    const currentOption = e.currentTarget.querySelector('option:checked')
    const newState = {
      family: e.currentTarget.value,
      href: currentOption.dataset.href,
    }

    // todo: create font face
    setCurrentFont(newState)
  }

  const applyCurrentFontFamily = () => {
    document.body.style.fontFamily = `${currentFont.family}, sans-serif`
  }

  useEffect(() => {
    axiosFontData()

    if (currentFont) {
      applyCurrentFontFamily()
    }
  }, [currentFont])

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <select onChange={handleSelectChange}>
          <option default>
            {fontData.length > 0 ? 'Select a font' : 'Loading...'}
          </option>
          {fontData.map((el, i) => {
            return (
              <option key={i} data-href={el.files.regular} value={el.family}>
                {el.family}
              </option>
            )
          })}
        </select>
      </form>
    </>
  )
}
