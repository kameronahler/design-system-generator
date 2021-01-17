// packages
import React from 'react'

export default function FontWeightRadio({
  id,
  labelText,
  fontCategory,
  onchange,
  value,
}) {
  // state
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        checked={fontCategory === value ? true : false}
        id={id}
        name='typography-font-category'
        onChange={onchange}
        type='radio'
        value={value}
      />
    </div>
  )
}
