import React from 'react'
import TypographyElementsDisplay from '../TypographyElementsDisplay/TypographyElementsDisplay'
import TypographyControls from '../TypographyControls/TypographyControls'

export default function Typography() {
  return (
    <section>
      <header>
        <h2>Typography</h2>
      </header>
      <section>
        <header>
          <h3>Choose elements</h3>
        </header>
        <TypographyControls />
      </section>
      <TypographyElementsDisplay />
    </section>
  )
}
