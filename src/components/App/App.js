// packages
import React, { useReducer } from 'react'

// components
import ContextDisplay from './ContextDisplay'
import Typography from '../Typography/Typography'

// context private
const _initialContext = {
  typographyElementsPossible: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
  typographyElementsActive: [
    {
      element: 'p',
      style: {
        color: '#333',
        fontFamily: 'sans-serif',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.5',
        margin: '0',
      },
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      element: 'h1',
      style: {
        color: '#333',
        fontFamily: 'sans-serif',
        fontSize: '48px',
        fontWeight: '700',
        lineHeight: '1.2',
        margin: '0',
      },
      text: 'Lorem ipsum dolor sit amet',
    },
  ],
  typographyElementsDefault: [
    {
      element: 'p',
      style: {
        color: '#333',
        fontFamily: 'sans-serif',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.5',
        margin: '0',
      },
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      element: 'h1',
      style: {
        color: '#333',
        fontFamily: 'sans-serif',
        fontSize: '48px',
        fontWeight: '700',
        lineHeight: '1.2',
        margin: '0',
      },
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      element: 'h2',
      style: {
        color: '#333',
        fontFamily: 'sans-serif',
        fontSize: '32px',
        fontWeight: '700',
        lineHeight: '1.2',
        margin: '0',
      },
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      element: 'h3',
      style: {
        color: '#333',
        fontFamily: 'sans-serif',
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '1.2',
        margin: '0',
      },
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      element: 'h4',
      style: {
        color: '#333',
        fontFamily: 'sans-serif',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '1.2',
        margin: '0',
      },
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      element: 'h5',
      style: {
        color: '#333',
        fontFamily: 'sans-serif',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '1.2',
        margin: '0',
      },
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      element: 'h6',
      style: {
        color: '#333',
        fontFamily: 'sans-serif',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '1.2',
        margin: '0',
      },
      text: 'Lorem ipsum dolor sit amet',
    },
  ],
  typographyFontsAvailable: ['Loading...'],
}

const _context_reducer = (state, action) => {
  switch (action.type) {
    case CONTEXT_ACTIONS.TYPOGRAPHY_FONTS_AVAILABLE_UPDATE:
      return action.payload
    case CONTEXT_ACTIONS.TYPOGRAPHY_ELEMENTS_UPDATE:
      return action.payload
    case CONTEXT_ACTIONS.TYPOGRAPHY_FONT_UPDATE:
      return action.payload
    case CONTEXT_ACTIONS.TYPOGRAPHY_ELEMENTS_UPDATE:
      return action.payload
    default:
      return
  }
}

// context export
export const Context = React.createContext()

export const CONTEXT_ACTIONS = {
  TYPOGRAPHY_ELEMENTS_UPDATE: 'typography_elements_update',
  TYPOGRAPHY_FONT_UPDATE: 'typography_font_update',
  TYPOGRAPHY_FONTS_AVAILABLE_UPDATE: 'typography_fonts_available_update',
  TYPOGRAPHY_ELEMENTS_UPDATE: 'typography_elements_update',
}

// app export
export default function App() {
  const [state, dispatch] = useReducer(_context_reducer, _initialContext)

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        <ContextDisplay />
        <Typography />
      </Context.Provider>
    </>
  )
}
