// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'

// default export
export default function LiveExample() {
  // state
  const global = useContext(Context)

  // render
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
