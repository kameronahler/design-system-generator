// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'

export default function LiveExample() {
  const global = useContext(Context)

  return (
    <>
      {global.state.typographyElementsActive.map(entry => {
        return (
          <div key={`display-${entry.element}`}>
            <entry.element style={entry.style}>{entry.text}</entry.element>
          </div>
        )
      })}
    </>
  )
}