import React, { useReducer } from 'react'
import Typography from '../TypographyElements/TypographyElements'

const initialContext = {
  typographyElements: ['h1'],
}

const context_reducer = (state, action) => {
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

export default function App() {
  const [state, dispatch] = useReducer(context_reducer, initialContext)

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        <Typography />
      </Context.Provider>
    </>
  )
}
