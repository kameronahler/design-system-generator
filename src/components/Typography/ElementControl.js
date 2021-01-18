// packages
import React from 'react'

export default function ElementControl({ props }) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <span>
        <label htmlFor={`${props.element}-select-element`}>Element</label>
        <select
          name={`${props.element}-select-element`}
          id={`${props.element}-select-element`}
        >
          <option value={props.element}>{props.element}</option>
        </select>
      </span>

      <span>
        <label htmlFor={`${props.element}-select-font-family`}>
          Font Family
        </label>
        <select
          name={`${props.element}-select-font-family`}
          id={`${props.element}-select-font-family`}
        >
          <option value={props.style.fontFamily}>
            {props.style.fontFamily}
          </option>
        </select>
      </span>

      <span>
        <label htmlFor={`${props.element}-select-font-weight`}>
          Font Weight
        </label>
        <select
          name={`${props.element}-select-font-weight`}
          id={`${props.element}-select-font-weight`}
        >
          <option value={props.style.fontWeight}>
            {props.style.fontWeight}
          </option>
        </select>
      </span>

      <span>
        <label htmlFor={`${props.element}-input-font-size`}>
          Font Size (px)
        </label>
        <input
          name={`${props.element}-input-font-size`}
          id={`${props.element}-input-font-size`}
          type='number'
          value={parseInt(props.style.fontSize)}
        ></input>
      </span>

      <span>
        <label htmlFor={`${props.element}-input-line-height`}>
          Line Height
        </label>
        <input
          name={`${props.element}-input-line-height`}
          id={`${props.element}-input-line-height`}
          type='text'
          value={props.style.lineHeight}
        ></input>
      </span>

      <span>
        <label htmlFor={`${props.element}-input-color`}>Color</label>
        <input
          name={`${props.element}-input-color`}
          id={`${props.element}-input-color`}
          type='text'
          value={props.style.color}
        ></input>
      </span>

      <span>
        <label htmlFor={`${props.element}-input-margin`}>Margin</label>
        <input
          name={`${props.element}-input-margin`}
          id={`${props.element}-input-margin`}
          type='text'
          value={props.style.margin}
        ></input>
      </span>
    </form>
  )
}
