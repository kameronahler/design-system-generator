// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'
import TypographyControlGroup from '../TypographyControlGroup/TypographyControlGroup'

// default export
export default function Controls() {
  // state
  const global = useContext(Context)

  // render
  return (
    <ul>
      {global.state.typographyElementsActive.map((entry, i) => {
        return (
          <li key={`control-${entry.element}`}>
            <TypographyControlGroup renderIndex={i} props={entry} />
          </li>
        )
      })}
    </ul>
  )
}
