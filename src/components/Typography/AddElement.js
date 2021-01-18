// packages
import React from 'react'

export default function AddElement() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor='add-element-select'>Add Element</label>
      <select name='add-element-select' id='add-element-select'>
        <option default>Select element to add</option>
        <option value='h1'>h1</option>
        <option value='h2'>h2</option>
        <option value='h3'>h3</option>
        <option value='h4'>h4</option>
        <option value='h5'>h5</option>
        <option value='h6'>h6</option>
        <option value='p'>p</option>
      </select>
    </form>
  )
}
