// packages
import React, { useContext } from 'react'

// components
import { Context } from '../../App/App'

// static
const GOOGLE_FONTS_CSS_URL = process.env.GOOGLE_FONTS_CSS_URL

export default function ControlFontFamily({ props }) {
  const global = useContext(Context)

  const handleFontFamilyChange = async e => {
    const currentOption = e.currentTarget.querySelector('option:checked').value
    await updateHeadLink(currentOption)
    setTimeout(() => {
      updateActiveElementFontFamily(currentOption)
    }, 1000)
  }

  const updateHeadLink = currentOption => {
    const familyQueryString = `${currentOption.replace(/\s/, '+')}`

    const linkExists = document.head.querySelector(
      `link[href*="${familyQueryString}"]`
    )

    if (linkExists) {
      return
    } else {
      const newLink = document.createElement('link')
      newLink.setAttribute('rel', 'stylesheet')
      newLink.setAttribute(
        'href',
        `${GOOGLE_FONTS_CSS_URL}family=${familyQueryString}`
      )
      document.head.appendChild(newLink)
    }
  }

  const updateActiveElementFontFamily = currentOption => {
    let newEntry = {
      ...props,
      style: { ...props.style, fontFamily: currentOption },
    }

    let newContext = { ...global.state }
    newContext.typographyElementsActive.forEach((activeElementObj, i) => {
      if (activeElementObj.element === props.element) {
        newContext.typographyElementsActive.splice(i, 1, newEntry)
      }
    })

    global.dispatch({ payload: newContext })
  }

  return (
    <>
      <label htmlFor={`${props.element}-select-font-family`}>Font Family</label>
      <select
        id={`${props.element}-select-font-family`}
        name={`${props.element}-select-font-family`}
        onChange={handleFontFamilyChange}
      >
        <option default value={props.style.fontFamily}>
          {props.style.fontFamily}
        </option>
        {global.state.typographyFontsAvailable.map(availableFont => {
          return (
            <option
              key={Math.random + availableFont.family} // not sure why this is needed
              value={availableFont.family}
            >
              {availableFont.family}
            </option>
          )
        })}
      </select>
    </>
  )
}
