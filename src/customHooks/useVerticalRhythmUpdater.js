export default function useVerticalRhythmUpdater({ global, p }) {
  const orderedEls = [...global.state.elementsActive]

  const initialPElementOverrides = () => {
    const newContext = { ...global.state }
    newContext.elementsActive.forEach(el => {
      el.verticalRhythm.fontSize = el.style.fontSize
      el.verticalRhythm.lineHeight = el.style.lineHeight
    })

    global.dispatch({ payload: newContext })
  }
  initialPElementOverrides()

  const orderActiveElements = () => {
    orderedEls.sort((a, b) => {
      const first = parseInt(a.verticalRhythm.fontSize)
      const second = parseInt(b.verticalRhythm.fontSize)
      if (first > second) {
        return 1
      } else if (first < second) {
        return -1
      }
      return 0
    })

    const pIndex = orderedEls.findIndex(item => item.element === 'p')

    if (pIndex !== 0) {
      let tempP = orderedEls.splice(pIndex, 1)
      orderedEls.unshift(tempP[0])
    }
  }
  orderActiveElements()

  const applyStyles = () => {
    const baseFontSize = parseInt(p.verticalRhythm.fontSize)
    const lineHeight = parseFloat(p.verticalRhythm.lineHeight)
    const baseRow = baseFontSize * lineHeight
    const scale = p.verticalRhythm.scale

    const marginBottomNeeded = textHeight => {
      let i = 1
      let remainder = i * baseRow - textHeight

      while (remainder < 0) {
        i++
        remainder = i * baseRow - textHeight
      }

      return remainder !== 0 ? remainder : baseRow
    }

    document.documentElement.style.setProperty(
      '--base-row-height',
      baseRow + 'px'
    )

    orderedEls.forEach((el, i) => {
      const fs = baseFontSize * scale ** i
      const lh = fs * lineHeight
      const mt = 0
      const mb = marginBottomNeeded(lh)

      // font size
      el.verticalRhythm.fontSize = fs + 'px'

      // lineheight
      el.verticalRhythm.lineHeight = lh + 'px'

      // margin bottom
      el.verticalRhythm.marginBottom = mb + 'px'

      // margin top
      el.verticalRhythm.marginTop = mt + 'px'

      // console.log(el.verticalRhythm)
    })
  }
  applyStyles()
}
