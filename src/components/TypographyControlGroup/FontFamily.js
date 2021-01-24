// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'
import useGoogleFontsLink from '../../customHooks/useGoogleFontsLink'
import useUpdateActiveElement from '../../customHooks/useUpdateActiveElement'

// default export
export default function FontFamily({ props }) {
  // state
  const global = useContext(Context)

  // handlers
  const handleFontFamilyChange = async e => {
    const newFamily = e.currentTarget.querySelector('option:checked').value

    try {
      await useGoogleFontsLink({ family: newFamily })
      setTimeout(() => {
        updateContextWithFamilyAndGoogleFontInfo(newFamily)
      }, 300)
    } catch (err) {
      console.log(err)
    }
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
    useUpdateActiveElement({ global, newEntry })
  }

  // render
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
