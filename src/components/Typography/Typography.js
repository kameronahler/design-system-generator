import React from 'react'
import TypographyElementsDisplay from '../TypographyElementsDisplay/TypographyElementsDisplay'
import TypographyControls from '../TypographyControls/TypographyControls'
import TypographyFonts from '../TypographyFonts/TypographyFonts'

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
        <div>
          <TypographyControls />
        </div>
      </section>
      <section>
        <header>
          <h3>Choose font family</h3>
        </header>
        <div>
          <TypographyFonts />
        </div>
      </section>
      <section>
        <header>
          <h3>Example</h3>
        </header>
        <TypographyElementsDisplay />
      </section>
    </section>
  )
}
