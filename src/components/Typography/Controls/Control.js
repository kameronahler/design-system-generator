// packages
import React, { useContext } from 'react'

// components
import { CONTEXT_ACTIONS, Context } from '../../App/App'

// static
const GOOGLE_FONTS_CSS_URL = process.env.GOOGLE_FONTS_CSS_URL

export default function Control({ props }) {
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
    // props is copy of activeElement we'll mutate the fontFamily on
    // spread a copy
    let newEntry = {
      ...props,
      style: { ...props.style, fontFamily: currentOption },
    }

    // build a new global context
    let newContext = { ...global.state }

    // replace old activeElement entry with new
    newContext.typographyElementsActive.forEach((activeElementObj, i) => {
      if (activeElementObj.element === props.element) {
        newContext.typographyElementsActive.splice(i, 1, newEntry)
      }
    })

    // dispatch the new context
    global.dispatch({
      type: CONTEXT_ACTIONS.TYPOGRAPHY_FONT_UPDATE,
      payload: newContext,
    })
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <span>
        <label htmlFor={`${props.element}-select-element`}>Element</label>
        <select
          name={`${props.element}-select-element`}
          id={`${props.element}-select-element`}
        >
          <option value={props.element}>{props.element}</option>
        </select>
      </span>

      <span>
        <label htmlFor={`${props.element}-select-font-family`}>
          Font Family
        </label>
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
      </span>

      <span>
        <label htmlFor={`${props.element}-select-font-weight`}>
          Font Weight
        </label>
        <select
          name={`${props.element}-select-font-weight`}
          id={`${props.element}-select-font-weight`}
        >
          <option value={props.style.fontWeight}>
            {props.style.fontWeight}
          </option>
        </select>
      </span>

      <span>
        <label htmlFor={`${props.element}-input-font-size`}>
          Font Size (px)
        </label>
        <input
          name={`${props.element}-input-font-size`}
          id={`${props.element}-input-font-size`}
          type='number'
          value={parseInt(props.style.fontSize)}
        ></input>
      </span>

      <span>
        <label htmlFor={`${props.element}-input-line-height`}>
          Line Height
        </label>
        <input
          name={`${props.element}-input-line-height`}
          id={`${props.element}-input-line-height`}
          type='text'
          value={props.style.lineHeight}
        ></input>
      </span>

      <span>
        <label htmlFor={`${props.element}-input-margin`}>Margin</label>
        <input
          name={`${props.element}-input-margin`}
          id={`${props.element}-input-margin`}
          type='text'
          value={props.style.margin}
        ></input>
      </span>

      <span>
        <label htmlFor={`${props.element}-input-color`}>Color</label>
        <input
          name={`${props.element}-input-color`}
          id={`${props.element}-input-color`}
          type='text'
          value={props.style.color}
        ></input>
      </span>
    </form>
  )
}
