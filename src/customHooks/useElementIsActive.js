export default function useElementIsActive({ global, element }) {
  const hit = global.state.elementsActive.filter(
    activeEl => activeEl.element === element
  )

  return hit.length > 0 ? true : false
}
