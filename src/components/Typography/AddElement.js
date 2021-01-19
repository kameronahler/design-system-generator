// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'

export default function AddElement() {
  const global = useContext(Context)

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

  const handleSelectChange = e => {
    const currentOption = e.currentTarget.querySelector('option:checked')
    const newEntry = global.state.typographyElementsDefault.filter(
      obj => obj.element === currentOption.value
    )
    const newContext = { ...global.state }

    newContext.typographyElementsActive.push(newEntry[0])

    global.dispatch({ payload: newContext })
  }

  return (
    <form style={{ marginBottom: '2rem' }} onSubmit={e => e.preventDefault()}>
      <label htmlFor='add-element-select'>Add Element</label>
      <select
        id='add-element-select'
        name='add-element-select'
        onChange={handleSelectChange}
      >
        <option default>Select a new element to add</option>
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
