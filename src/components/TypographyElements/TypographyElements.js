import React, { useContext, useEffect } from 'react'
import { Context } from '../App/App'
import TypographyElementCheckboxes from '../TypographyElementCheckboxes/TypographyElementCheckboxes'

export default function TypographyElements() {
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
    <>
      <TypographyElementCheckboxes />
      <div>{elementsToDisplay}</div>
    </>
  )
}
