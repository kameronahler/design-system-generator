// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'

export default function ElementsDisplay() {
  const global = useContext(Context)

  const jsxToDisplay = global.state.typographyActiveElements.map(entry => {
    return (
      <div key={`display-${entry.element}`}>
        <entry.element style={entry.style}>{entry.text}</entry.element>
      </div>
    )
  })

  return <div>{jsxToDisplay}</div>
}
