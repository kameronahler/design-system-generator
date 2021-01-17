// packages
import React from 'react'

export default function FontWeightRadio({
  fontCategory,
  handler,
  id,
  labelText,
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
        onChange={handler}
        type='radio'
        value={value}
      />
    </div>
  )
}
