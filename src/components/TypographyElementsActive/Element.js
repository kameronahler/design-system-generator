// packages
import React, { useState, useContext } from 'react'

// components
import { Context } from '../App/App'

// default export
export default function Element({ type }) {
  // state
  const global = useContext(Context)
  const [checked, setChecked] = useState(() => {
    let isChecked = false
    global.state.elementsActive.forEach(activeEl => {
      if (activeEl.element === type) {
        isChecked = true
      }
    })
    return isChecked
  })

  // handlers
  const handleChange = e => {
    const currentValue = e.currentTarget.value
    if (checked) {
      handleDeactivate(currentValue)
    } else {
      handleActivate(currentValue)
    }
  }

  const handleActivate = currentValue => {
    const newContext = { ...global.state }
    const newEntry = global.state.elementsDefault.filter(
      obj => obj.element === currentValue
    )
    newContext.elementsActive.push(newEntry[0])
    setChecked(!checked)
    global.dispatch({ payload: newContext })
  }

  const handleDeactivate = currentValue => {
    const newEntry = [...global.state.elementsActive]
    newEntry.map((activeEl, index) => {
      if (currentValue === activeEl.element) {
        newEntry.splice(index, 1)
      }
    })
    const newContext = {
      ...global.state,
      elementsActive: newEntry,
    }
    setChecked(!checked)
    global.dispatch({ payload: newContext })
  }

  return (
    <>
      <input
        className='typography-elements-active__input'
        defaultChecked={checked}
        onChange={handleChange}
        id={`activate-elements-${type}`}
        type='checkbox'
        value={type}
      />
      <label
        className='typography-elements-active__label'
        htmlFor={`activate-elements-${type}`}
      >
        {type}
      </label>
    </>
  )
}