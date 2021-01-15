import React from 'react'
import TypographyControlsCheckbox from '../TypographyControlsCheckbox/TypographyControlsCheckbox'

export default function TypographyControls() {
  const TYPOGRAPHY_ELEMENT_CHOICES = [
    { id: 'heading-1', labelText: 'Heading 1', value: 'h1' },
    { id: 'heading-2', labelText: 'Heading 2', value: 'h2' },
    { id: 'heading-3', labelText: 'Heading 3', value: 'h3' },
    { id: 'heading-4', labelText: 'Heading 4', value: 'h4' },
    { id: 'heading-5', labelText: 'Heading 5', value: 'h5' },
    { id: 'heading-6', labelText: 'Heading 6', value: 'h6' },
    { id: 'paragraph', labelText: 'Paragraph', value: 'p' },
  ]

  return (
    <div>
      {TYPOGRAPHY_ELEMENT_CHOICES.map(el => {
        return (
          <TypographyControlsCheckbox
            key={el.id}
            id={el.id}
            labelText={el.labelText}
            value={el.value}
          />
        )
      })}
    </div>
  )
}
