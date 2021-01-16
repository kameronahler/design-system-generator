import React from 'react'
import ElementsCheckbox from './ElementsCheckbox'

export default function ElementsCheckboxes() {
  const TYPOGRAPHY_ELEMENT_CHOICES = [
    { id: 'heading-1', labelText: 'Heading 1', value: 'h1' },
    { id: 'heading-2', labelText: 'Heading 2', value: 'h2' },
    { id: 'heading-3', labelText: 'Heading 3', value: 'h3' },
    { id: 'heading-4', labelText: 'Heading 4', value: 'h4' },
    { id: 'heading-5', labelText: 'Heading 5', value: 'h5' },
    { id: 'heading-6', labelText: 'Heading 6', value: 'h6' },
    { id: 'paragraph', labelText: 'Paragraph', value: 'p' },
  ]

  const preventFormSubmit = () => e.preventDefault()

  return (
    <section>
      <header>
        <h3>Select elements</h3>
      </header>
      <form onSubmit={preventFormSubmit}>
        {TYPOGRAPHY_ELEMENT_CHOICES.map(el => {
          return (
            <ElementsCheckbox
              id={el.id}
              key={el.id}
              labelText={el.labelText}
              name='typography-controls'
              value={el.value}
            />
          )
        })}
      </form>
    </section>
  )
}
