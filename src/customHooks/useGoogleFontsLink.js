/*
  Adds a google fonts link to the head of the doc
  Creates a new link every time (currently)
*/

// static
const FAMILY_QUERY_PREFIX = process.env.GOOGLE_FONTS_FAMILY_QUERY_PREFIX
const WEIGHT_QUERY_PREFIX = process.env.GOOGLE_FONTS_WEIGHT_QUERY_PREFIX
const FONTS_CSS_URL = process.env.GOOGLE_FONTS_CSS_URL

export default function useGoogleFontsLinkAdder({ family, weight }) {
  const getUrl = () => {
    if (weight && weight !== 'regular') {
      return (
        FONTS_CSS_URL +
        FAMILY_QUERY_PREFIX +
        family.replace(/\s/, '+') +
        WEIGHT_QUERY_PREFIX +
        weight
      )
    } else {
      return FONTS_CSS_URL + FAMILY_QUERY_PREFIX + family.replace(/\s/, '+')
    }
  }

  const newLink = document.createElement('link')
  newLink.setAttribute('rel', 'stylesheet')
  newLink.setAttribute('href', getUrl())
  document.head.appendChild(newLink)
}
