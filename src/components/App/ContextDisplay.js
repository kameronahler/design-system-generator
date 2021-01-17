// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'

export default function ContextDisplay() {
  const global = useContext(Context)
  const globalFormatted = JSON.stringify(global.state, null, 2)

  return (
    <div
      style={{
        backgroundColor: '#333',
        color: 'white',
        fontSize: '12px',
        lineHeight: '1.5',
        padding: '1rem',
        position: 'sticky',
        top: '0',
      }}
    >
      <pre style={{ margin: 'unset' }}>{globalFormatted}</pre>
    </div>
  )
}
