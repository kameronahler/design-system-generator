// packages
import React, { useReducer } from 'react'

// components
import { INITIAL_CONTEXT } from './InitialContext'
import ContextDisplay from './ContextDisplay'
import Typography from '../Typography/Typography'

// styles
import './App.scss'

// action reducer
const _context_reducer = (state, action) => {
  // TODO: this could probably be ditched altogether
  // foregoing the cases for now since we update our context wholly every time
  return action.payload
}

// context export
export const Context = React.createContext()

// default export
export default function App() {
  // state
  const [state, dispatch] = useReducer(_context_reducer, INITIAL_CONTEXT)

  // render
  return (
    <div className='app'>
      <Context.Provider value={{ state, dispatch }}>
        <Typography />
        <ContextDisplay />
      </Context.Provider>
    </div>
  )
}
