import React from 'react'
import TypographyElementCheckbox from '../TypographyElementCheckbox/TypographyElementCheckbox'

export default function TypographyElementCheckboxes() {
  return (
    <div>
      <TypographyElementCheckbox
        id={'heading-2'}
        labelText={'Heading 2'}
        value={'h2'}
      />
      <TypographyElementCheckbox
        id={'heading-3'}
        labelText={'Heading 3'}
        value={'h3'}
      />
      <TypographyElementCheckbox
        id={'heading-4'}
        labelText={'Heading 4'}
        value={'h4'}
      />
      <TypographyElementCheckbox
        id={'heading-5'}
        labelText={'Heading 5'}
        value={'h5'}
      />
      <TypographyElementCheckbox
        id={'heading-6'}
        labelText={'Heading 6'}
        value={'h6'}
      />
      <TypographyElementCheckbox
        id={'paragraph'}
        labelText={'Paragraph'}
        value={'p'}
      />
    </div>
  )
}
