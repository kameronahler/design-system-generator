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

  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor='add-element-select'>Add Element</label>
      <select name='add-element-select' id='add-element-select'>
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
