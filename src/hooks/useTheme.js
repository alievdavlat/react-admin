import {getItem} from '../hooks/useStorage'

export const useTheme = () => {

  const theme = getItem('theme')

  return theme
}