// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'
import ElementControl from './ElementControl'

export default function ElementActiveControls() {
  const global = useContext(Context)

  const jsxToDisplay = global.state.typographyElementsActive.map(entry => {
    return <ElementControl key={`control-${entry.element}`} props={entry} />
  })

  return <div>{jsxToDisplay}</div>
}
