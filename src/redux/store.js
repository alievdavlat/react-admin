import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './features/themeSlice'
import  zoomSlice  from './features/zoomModal'

export const store = configureStore({
  reducer: {
    theme:themeSlice,
    zoom:zoomSlice
  },
})