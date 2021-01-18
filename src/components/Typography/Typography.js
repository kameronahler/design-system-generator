// packages
import React from 'react'

// components
import ElementControls from './ElementControls'
import ExampleDisplay from './ExampleDisplay'

export default function Typography() {
  return (
    <section style={{ marginLeft: '33vw' }}>
      <header>
        <h2>Typography</h2>
      </header>
      <ElementControls />
      <hr />
      <ExampleDisplay />
    </section>
  )
}
