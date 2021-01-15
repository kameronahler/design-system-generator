import React, { useContext, useEffect } from 'react'
import { Context } from '../App/App'
import TypographyElementCheckbox from '../TypographyElementCheckbox/TypographyElementCheckbox'

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
      <div>
        <TypographyElementCheckbox
          id={'heading-1'}
          labelText={'Heading 1'}
          value={'h1'}
        />
        <TypographyElementCheckbox
          id={'heading-2'}
          labelText={'Heading 2'}
          value={'h2'}
        />
        <TypographyElementCheckbox
          id={'heading-3'}
          labelText={'Heading 3'}
          value={'h3'}
        />
        <TypographyElementCheckbox
          id={'heading-4'}
          labelText={'Heading 4'}
          value={'h4'}
        />
        <TypographyElementCheckbox
          id={'heading-5'}
          labelText={'Heading 5'}
          value={'h5'}
        />
        <TypographyElementCheckbox
          id={'heading-6'}
          labelText={'Heading 6'}
          value={'h6'}
        />
        <TypographyElementCheckbox
          id={'paragraph'}
          labelText={'Paragraph'}
          value={'p'}
        />
      </div>
      <div>{elementsToDisplay}</div>
    </>
  )
}
