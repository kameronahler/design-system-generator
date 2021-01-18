// packages
import React, { useContext } from 'react'

// components
import { Context } from '../../App/App'
import Control from './Control'

export default function Controls() {
  const global = useContext(Context)

  const jsxToDisplay = global.state.typographyElementsActive.map(entry => {
    return <Control key={`control-${entry.element}`} props={entry} />
  })

  return <div>{jsxToDisplay}</div>
}
