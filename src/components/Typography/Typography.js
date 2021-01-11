import React, { useContext, useEffect } from 'react'
import { CONTEXT_ACTIONS, Context } from '../App/App'

export default function Button() {
  const global = useContext(Context)

  let elementsToDisplay = global.state.typographyElements.map((el, i) => {
    switch (el) {
      case 'h1':
        return <h1 key={i}>Heading 1</h1>
      case 'h2':
        return <h2 key={i}>Heading 2</h2>
      case 'h3':
        return <h3 key={i}>Heading 3</h3>
      case 'h4':
        return <h4 key={i}>Heading 4</h4>
      case 'h5':
        return <h5 key={i}>Heading 5</h5>
      case 'h6':
        return <h6 key={i}>Heading 6</h6>
      case 'p':
        return <p key={i}>Paragraph</p>
      default:
        return
    }
  })

  const handleCheckChange = e => {
    let newTypographyElements = global.state.typographyElements

    if (newTypographyElements.indexOf(e.currentTarget.value) >= 0) {
      newTypographyElements.splice(
        newTypographyElements.indexOf(e.currentTarget.value),
        1
      )
    } else {
      newTypographyElements.push(e.currentTarget.value)
    }

    const newState = {
      ...global.state,
      typographyElements: newTypographyElements.sort(),
    }

    global.dispatch({
      type: CONTEXT_ACTIONS.TYPOGRAPHY_ELEMENTS_UPDATE,
      payload: newState,
    })
  }

  // todo: controls could be done more programmatically
  const handleChecks = () => {
    const controls = document.querySelectorAll(
      '[data-typography-element-control]'
    )

    controls.forEach(control => {
      if (global.state.typographyElements.includes(control.value)) {
        control.checked = true
      }
    })
  }

  useEffect(() => {
    handleChecks()
  }, [])

  return (
    <section>
      <header>
        <h2>Typography</h2>
      </header>
      <div>
        <div>
          <label htmlFor='heading-1'>Heading 1</label>
          <input
            data-typography-element-control='true'
            id='heading-1'
            onChange={handleCheckChange}
            type='checkbox'
            value='h1'
          />
        </div>
        <div>
          <label htmlFor='heading-2'>Heading 2</label>
          <input
            data-typography-element-control='true'
            id='heading-2'
            onChange={handleCheckChange}
            type='checkbox'
            value='h2'
          />
        </div>
        <div>
          <label htmlFor='heading-3'>Heading 3</label>
          <input
            data-typography-element-control='true'
            id='heading-3'
            onChange={handleCheckChange}
            type='checkbox'
            value='h3'
          />
        </div>
        <div>
          <label htmlFor='heading-4'>Heading 4</label>
          <input
            data-typography-element-control='true'
            id='heading-4'
            onChange={handleCheckChange}
            type='checkbox'
            value='h4'
          />
        </div>
        <div>
          <label htmlFor='heading-5'>Heading 5</label>
          <input
            data-typography-element-control='true'
            id='heading-5'
            onChange={handleCheckChange}
            type='checkbox'
            value='h5'
          />
        </div>
        <div>
          <label htmlFor='heading-6'>Heading 6</label>
          <input
            data-typography-element-control='true'
            id='heading-6'
            onChange={handleCheckChange}
            type='checkbox'
            value='h6'
          />
        </div>
        <div>
          <label htmlFor='p'>Paragraph</label>
          <input
            data-typography-element-control='true'
            id='p'
            onChange={handleCheckChange}
            type='checkbox'
            value='p'
          />
        </div>
      </div>
      <div>{elementsToDisplay}</div>
    </section>
  )
}
