// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'
import Group from './Group'
import './TypographyControls.scss'

export default function TypographyControls() {
  const global = useContext(Context)

  return (
    <ul>
      {global.state.typographyElementsActive.map((entry, i) => {
        return (
          <li key={`control-${entry.element}`}>
            <Group renderIndex={i} props={entry} />
          </li>
        )
      })}
    </ul>
  )
}
