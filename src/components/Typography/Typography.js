// packages
import React from 'react'

// components
import ElementActiveControls from './ElementActiveControls'
import ElementAddControl from './ElementAddControl'
import ExampleDisplay from './ExampleDisplay'

export default function Typography() {
  return (
    <section style={{ marginLeft: '33vw' }}>
      <header>
        <h2>Typography</h2>
      </header>
      <ElementActiveControls />
      <ElementAddControl />
      <hr />
      <ExampleDisplay />
    </section>
  )
}
