// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'

// static
const GOOGLE_FONTS_FAMILY_QUERY_PREFIX =
  process.env.GOOGLE_FONTS_FAMILY_QUERY_PREFIX
const GOOGLE_FONTS_WEIGHT_QUERY_PREFIX =
  process.env.GOOGLE_FONTS_WEIGHT_QUERY_PREFIX
const GOOGLE_FONTS_CSS_URL = process.env.GOOGLE_FONTS_CSS_URL

export default function ElementControlFontWeight({ props }) {
  // state
  const global = useContext(Context)

  // handlers
  const handleFontWeightChange = async e => {
    const currentOption = e.currentTarget.querySelector('option:checked').value
    try {
      await updateHeadLink(currentOption)
      setTimeout(() => {
        updateContextFontWeight(currentOption)
      }, 400)
    } catch (err) {
      console.log(err)
    }
  }

  const updateHeadLink = currentOption => {
    // TODO: urrently creates one-off links because google requires tuples to be sorted
    // and i didn't feel like doing that now
    // at minimum these could check for existing matches or use useRef
    const familyQueryString = `${props.style.fontFamily.replace(/\s/, '+')}`
    const newLink = document.createElement('link')
    newLink.setAttribute('rel', 'stylesheet')
    newLink.setAttribute(
      'href',
      GOOGLE_FONTS_CSS_URL +
        GOOGLE_FONTS_FAMILY_QUERY_PREFIX +
        familyQueryString +
        GOOGLE_FONTS_WEIGHT_QUERY_PREFIX +
        currentOption
    )
    document.head.appendChild(newLink)
  }

  const updateContextFontWeight = currentOption => {
    const newEntry = {
      ...props,
      style: { ...props.style, fontWeight: currentOption },
    }
    const newContext = { ...global.state }
    newContext.typographyElementsActive.forEach((activeElementObj, i) => {
      if (activeElementObj.element === props.element) {
        newContext.typographyElementsActive.splice(i, 1, newEntry)
      }
    })
    global.dispatch({ payload: newContext })
  }

  // jsx
  let jsxToDisplay = null

  if (props.googleFont) {
    jsxToDisplay = props.googleFont.variants.filter(
      weight => !weight.includes('italic')
    )
    jsxToDisplay = jsxToDisplay.map(weight => (
      <option
        selected={weight === 'regular' ? true : false}
        key={`${props.element}-${props.style.fontFamily.replace(
          /\s/,
          ''
        )}-input-font-weight-${weight}`}
        value={weight === 'regular' ? '400' : weight}
      >
        {weight === 'regular' ? 'Normal' : weight}
      </option>
    ))
  } else {
    jsxToDisplay = [
      <option
        key={`default-input-font-weight`}
        default
        value={props.style.fontWeight}
      >
        {props.style.fontWeight}
      </option>,
    ]
  }

  return (
    <div className='typography-control-group__input-wrapper'>
      <label
        className='typography-control-group__label'
        htmlFor={`${props.element}-input-font-weight`}
      >
        Font Weight
      </label>
      <select
        className='typography-control-group__input'
        id={`${props.element}-input-font-weight`}
        name={`${props.element}-input-font-weight`}
        onChange={handleFontWeightChange}
      >
        {jsxToDisplay}
      </select>
    </div>
  )
}
