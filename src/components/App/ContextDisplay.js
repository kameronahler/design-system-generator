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
        height: '100vh',
        left: '0',
        lineHeight: '1.5',
        overflowY: 'auto',
        padding: '1rem',
        position: 'fixed',
        top: '0',
        width: '33vw',
      }}
    >
      <pre style={{ margin: 'unset' }}>{globalFormatted}</pre>
    </div>
  )
}
