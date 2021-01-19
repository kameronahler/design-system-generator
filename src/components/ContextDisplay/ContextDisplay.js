// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'
import './ContextDisplay.scss'

export default function ContextDisplay() {
  const global = useContext(Context)
  const globalFormatted = JSON.stringify(global.state, null, 2)

  return (
    <div className='context-display'>
      <pre style={{ margin: 'unset' }}>{globalFormatted}</pre>
    </div>
  )
}
