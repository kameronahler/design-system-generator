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
    const currentOption = e.currentTarget.querySelector('option:checked').value
    try {
      await updateHeadLink(currentOption)
      setTimeout(() => {
        updateContextWithFamilyAndCurrentGoogleFont(currentOption)
      }, 400)
    } catch (err) {
      console.log(err)
    }
  }

  const updateHeadLink = currentOption => {
    const familyQueryString = `${currentOption.replace(/\s/, '+')}`

    const linkExists = document.head.querySelector(
      //TODO: could probably use useRef here
      `link[href*="${familyQueryString}"]`
    )

    if (linkExists) {
      return
    } else {
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
  }

  const updateContextWithFamilyAndCurrentGoogleFont = currentOption => {
    const googleFont = global.state.typographyFontsPossible.filter(
      googleFont => googleFont.family === currentOption
    )

    const newEntry = {
      ...props,
      style: { ...props.style, fontFamily: currentOption },
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
    <div className='typography-control-group__wrapper'>
      <label htmlFor={`${props.element}-select-font-family`}>Font Family</label>
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
