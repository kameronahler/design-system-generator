// packages
import React, { useReducer } from 'react'
import { initialContext } from './InitialContext'

// components
import ContextDisplay from '../ContextDisplay/ContextDisplay'
import Typography from '../Typography/Typography'
import './App.scss'

// context export
export const Context = React.createContext()

const _context_reducer = (state, action) => {
  // foregoing the cases for now since we update our context wholly every time
  return action.payload
}

// app export
export default function App() {
  const [state, dispatch] = useReducer(_context_reducer, initialContext)

  return (
    <div className='app'>
      <Context.Provider value={{ state, dispatch }}>
        <Typography />
        <ContextDisplay />
      </Context.Provider>
    </div>
  )
}
