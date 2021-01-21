// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'
import Element from './Element'

export default function ActiveElements() {
  const global = useContext(Context)

  const jsxToDisplay = global.state.typographyElementsActive.map(entry => {
    return <Element key={`control-${entry.element}`} props={entry} />
  })

  return <div>{jsxToDisplay}</div>
}
