import React from 'react'
import TypographyControlsCheckbox from '../TypographyControlsCheckbox/TypographyControlsCheckbox'

export default function TypographyControls() {
  return (
    <div>
      <TypographyControlsCheckbox
        id={'heading-1'}
        labelText={'Heading 1'}
        value={'h1'}
      />
      <TypographyControlsCheckbox
        id={'heading-2'}
        labelText={'Heading 2'}
        value={'h2'}
      />
      <TypographyControlsCheckbox
        id={'heading-3'}
        labelText={'Heading 3'}
        value={'h3'}
      />
      <TypographyControlsCheckbox
        id={'heading-4'}
        labelText={'Heading 4'}
        value={'h4'}
      />
      <TypographyControlsCheckbox
        id={'heading-5'}
        labelText={'Heading 5'}
        value={'h5'}
      />
      <TypographyControlsCheckbox
        id={'heading-6'}
        labelText={'Heading 6'}
        value={'h6'}
      />
      <TypographyControlsCheckbox
        id={'paragraph'}
        labelText={'Paragraph'}
        value={'p'}
      />
    </div>
  )
}
