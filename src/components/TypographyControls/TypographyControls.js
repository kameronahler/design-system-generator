// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'
import Group from './Group'
import './TypographyControls.scss'

export default function TypographyControls() {
  const global = useContext(Context)

  return global.state.typographyElementsActive.map(entry => {
    return <Group key={`control-${entry.element}`} props={entry} />
  })
}
