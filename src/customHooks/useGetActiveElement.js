export default function useGetActiveElement({ global, element }) {
  const hit = global.state.elementsActive.filter(
    activeEl => activeEl.element === element
  )
  return hit[0]
}
