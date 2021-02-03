// packages
import React, { useContext } from 'react'

// components
import { Context } from '../App/App'

// default export
export default function LiveExample() {
  // state
  const global = useContext(Context)

  const getStyle = entry => {
    const style = { ...entry.style }

    if (global.state.verticalRhythmEnabled) {
      style.fontSize = entry.verticalRhythm.fontSize
      style.lineHeight = entry.verticalRhythm.lineHeight
      style.marginBottom = entry.verticalRhythm.marginBottom
      style.marginTop = entry.verticalRhythm.marginTop
    }
    return style
  }

  // render
  return (
    <>
      {global.state.elementsActive.map(activeEl => {
        return (
          <div key={`display-${activeEl.element}`}>
            <activeEl.element style={getStyle(activeEl)}>
              {activeEl.text}
            </activeEl.element>
          </div>
        )
      })}
    </>
  )
}
