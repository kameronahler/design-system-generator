// packages
import React, { useReducer } from 'react'

// initial default global context
const initialContext = {
  typographyElements: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
}

// global context dispatch reducer
const reducer = (state, action) => {
  switch (action.type) {
    case CONTEXT_ACTIONS.TYPOGRAPHY_ELEMENTS_UPDATE:
      return action.payload
    default:
      return
  }
}

export const CONTEXT_ACTIONS = {
  TYPOGRAPHY_ELEMENTS_UPDATE: 'typography_elements_update',
}

export const Context = React.createContext()

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialContext)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
