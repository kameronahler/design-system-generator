/*
  Updates an active element object in the global context.
  Finds the old element in context, swaps in the new, then pushes the context up

  Takes two args:
  1. a useContext object (we cannot call this within a custom hook apparently)
  2. a new active element obj (created from props within the calling function)
*/

export default function useUpdateActiveElement({ global, newEntry }) {
  const newContext = { ...global.state }

  newContext.typographyElementsActive.forEach((activeElement, i) => {
    if (activeElement.element === newEntry.element) {
      newContext.typographyElementsActive.splice(i, 1, newEntry)
    }
  })

  global.dispatch({ payload: newContext })
}
