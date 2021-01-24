// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'

// static
const GOOGLE_FONTS_CSS_URL = process.env.GOOGLE_FONTS_CSS_URL
const GOOGLE_FONTS_FAMILY_QUERY_PREFIX =
  process.env.GOOGLE_FONTS_FAMILY_QUERY_PREFIX

export default function FontFamily({ props }) {
  // state
  const global = useContext(Context)

  // handlers
  const handleFontFamilyChange = async e => {
    const newFamily = e.currentTarget.querySelector('option:checked').value
    try {
      await addLinkToHead(newFamily)
      setTimeout(() => {
        updateContextWithFamilyAndGoogleFontInfo(newFamily)
      }, 400)
    } catch (err) {
      console.log(err)
    }
  }

  const addLinkToHead = newFamily => {
    // for now this creates a new link every time the user changes the font family
    // tl;dr on why is that it simplifies getting font weights
    const familyQueryString = `${newFamily.replace(/\s/, '+')}`
    const newLink = document.createElement('link')
    newLink.setAttribute('rel', 'stylesheet')
    newLink.setAttribute(
      'href',
      GOOGLE_FONTS_CSS_URL +
        GOOGLE_FONTS_FAMILY_QUERY_PREFIX +
        familyQueryString
    )
    document.head.appendChild(newLink)
  }

  const updateContextWithFamilyAndGoogleFontInfo = newFamily => {
    const googleFont = global.state.typographyFontsPossible.filter(
      googleFont => googleFont.family === newFamily
    )

    const newEntry = {
      ...props,
      style: { ...props.style, fontFamily: newFamily },
      googleFont: { ...googleFont[0] },
    }

    const newContext = { ...global.state }

    newContext.typographyElementsActive.forEach((activeElementObj, i) => {
      if (activeElementObj.element === props.element) {
        newContext.typographyElementsActive.splice(i, 1, newEntry)
      }
    })

    global.dispatch({ payload: newContext })
  }

  return (
    <div className='typography-control-group__input-wrapper'>
      <label
        className='typography-control-group__label'
        htmlFor={`${props.element}-select-font-family`}
      >
        Font Family
      </label>
      <select
        className='typography-control-group__input'
        id={`${props.element}-select-font-family`}
        name={`${props.element}-select-font-family`}
        onChange={handleFontFamilyChange}
      >
        <option default value={props.style.fontFamily}>
          {props.style.fontFamily}
        </option>
        {global.state.typographyFontsPossible.map(availableFont => {
          return (
            <option
              key={props.element + '-' + availableFont.family}
              value={availableFont.family}
            >
              {availableFont.family}
            </option>
          )
        })}
      </select>
    </div>
  )
}
