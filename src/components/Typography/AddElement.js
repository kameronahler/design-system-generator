// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'

// default export
export default function AddElement() {
  // state
  const global = useContext(Context)

  // handlers
  const handleSelectChange = e => {
    const currentOption = e.currentTarget.querySelector('option:checked')
    const newEntry = global.state.typographyElementsDefault.filter(
      obj => obj.element === currentOption.value
    )
    const newContext = { ...global.state }

    newContext.typographyElementsActive.push(newEntry[0])

    global.dispatch({ payload: newContext })
  }

  // jsx
  const filterPossibleElements = () => {
    let possibleArr = global.state.typographyElementsPossible
    const inUseArr = global.state.typographyElementsActive.map(el => el.element)

    inUseArr.forEach(inUseElement => {
      possibleArr = possibleArr.filter(
        possibleElement => possibleElement !== inUseElement
      )
    })
    return possibleArr
  }

  const availableElements = filterPossibleElements()

  // render
  return (
    <form
      className='typography__add-element'
      onSubmit={e => e.preventDefault()}
    >
      <label className='accessibly-hidden' htmlFor='add-element-select'>
        Select an typography element to add
      </label>
      <select
        id='add-element-select'
        name='add-element-select'
        onChange={handleSelectChange}
      >
        <option default>Add element</option>
        {availableElements.map(possibleElement => {
          return (
            <option
              key={`available-element-${possibleElement}`}
              value={possibleElement}
            >
              {possibleElement}
            </option>
          )
        })}
      </select>
    </form>
  )
}
