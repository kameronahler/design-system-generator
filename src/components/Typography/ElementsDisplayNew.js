// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'

export default function ElementsDisplayNew() {
  const global = useContext(Context)

  const jsxToDisplay = global.state.typographyActiveElements.map(entry => {
    return (
      <div>
        <pre>{entry.elementDisplay}</pre>
        <entry.element key={entry.element} style={entry.style}>
          {entry.text}
        </entry.element>
      </div>
    )
  })

  return <>{jsxToDisplay}</>
}
