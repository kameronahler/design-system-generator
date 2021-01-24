// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'
import TypographyControlGroup from '../TypographyControlGroup/TypographyControlGroup'

export default function Controls() {
  const global = useContext(Context)

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
