// packages
import React, { useRef, useEffect, useContext } from 'react'

// components
import useGoogleFontsLink from '../../customHooks/useGoogleFontsLink'
import { Context } from '../App/App'

export default function ElementControlFontWeight({ props }) {
  // state
  const global = useContext(Context)
  const select = useRef(null)

  // handlers
  const handleFontWeightChange = async e => {
    const newWeight = e.currentTarget.querySelector('option:checked').value

    try {
      await useGoogleFontsLink({
        family: props.style.fontFamily,
        weight: newWeight,
      })

      setTimeout(() => {
        updateContextFontWeight(newWeight)
      }, 400)
    } catch (err) {
      console.log(err)
    }
  }

  const updateContextFontWeight = newWeight => {
    const newEntry = {
      ...props,
      style: { ...props.style, fontWeight: newWeight },
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
        key={`${props.element}-${props.style.fontFamily.replace(
          /\s/,
          ''
        )}-input-font-weight-${weight}`}
        value={weight}
      >
        {weight}
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

  // normally you'd store state for the value of the select and what option was
  // selected based on that because defaultValue does not update on rerender.
  // in this case we have to fire a context which forces a cascade of rerendering
  // so setting state here wouldn't do anything, so we just do this in the dom
  // after the component has mounted
  const checkSelectedOptions = () => {
    const selectOptions = select.current.querySelectorAll('option')

    selectOptions.forEach(option => {
      console.log(option.value)
      if (option.value === props.style.fontWeight) {
        option.selected = true
      }
    })
  }

  useEffect(checkSelectedOptions)

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
        ref={select}
        name={`${props.element}-input-font-weight`}
        onChange={handleFontWeightChange}
      >
        {jsxToDisplay}
      </select>
    </div>
  )
}
