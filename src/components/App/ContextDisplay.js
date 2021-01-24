// packages
import React, { useContext } from 'react'

// components
import { Context } from './App'

export default function ContextDisplay() {
  const global = useContext(Context)
  const globalFormatted = JSON.stringify(global.state, null, 2)

  return (
    <div className='app__context-display'>
      <pre>{globalFormatted}</pre>
    </div>
  )
}
