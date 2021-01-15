import React from 'react'
import TypographyElementsDisplay from '../TypographyElementsDisplay/TypographyElementsDisplay'
import TypographyControls from '../TypographyControls/TypographyControls'

export default function Typography() {
  return (
    <section>
      <header>
        <h2>Typography</h2>
      </header>
      <TypographyControls />
      <TypographyElementsDisplay />
    </section>
  )
}
