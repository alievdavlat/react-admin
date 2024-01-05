import { createSlice } from '@reduxjs/toolkit'
import {addItem} from '../../../hooks/useStorage'
import  {useTheme} from '../../../hooks/useTheme' 

const theme = useTheme()

const initialState = {
  theme:'' || theme ,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
   changeTheme: (state, action) => {
      state.theme = action.payload
      addItem('theme', action.payload)
    },
  },
})


export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer