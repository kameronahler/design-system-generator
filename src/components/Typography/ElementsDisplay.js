import React, { useContext } from 'react'
import { Context } from '../App/App'

import './ElementsDisplay.scss'

export default function ElementsDisplay() {
  const global = useContext(Context)

  let elementsToDisplay = global.state.typographyElements.map((el, i) => {
    switch (el) {
      case 'h1':
        return (
          <h1
            className='typography-elements-display__element typography-elements-display__element--h1'
            key={i}
          >
            Heading 1
          </h1>
        )
      case 'h2':
        return (
          <h2
            className='typography-elements-display__element typography-elements-display__element--h2'
            key={i}
          >
            Heading 2
          </h2>
        )
      case 'h3':
        return (
          <h3
            className='typography-elements-display__element typography-elements-display__element--h3'
            key={i}
          >
            Heading 3
          </h3>
        )
      case 'h4':
        return (
          <h4
            className='typography-elements-display__element typography-elements-display__element--h4'
            key={i}
          >
            Heading 4
          </h4>
        )
      case 'h5':
        return (
          <h5
            className='typography-elements-display__element typography-elements-display__element--h5'
            key={i}
          >
            Heading 5
          </h5>
        )
      case 'h6':
        return (
          <h6
            className='typography-elements-display__element typography-elements-display__element--h6'
            key={i}
          >
            Heading 6
          </h6>
        )
      case 'p':
        return (
          <p
            className='typography-elements-display__element typography-elements-display__element--p'
            key={i}
          >
            Paragraph
          </p>
        )
      default:
        return
    }
  })

  return (
    <section className='typography-elements-display'>
      <header>
        <h3>Example</h3>
      </header>
      <div>{elementsToDisplay}</div>
    </section>
  )
}
