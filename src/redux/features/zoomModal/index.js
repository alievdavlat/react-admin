import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  open:false ,
  image:''
}

export const zoomSlice = createSlice({
  name: 'zoom',
  initialState,
  reducers: {
   openModal: (state, action) => {
      state.open = action.payload
    },
  setImage: (state, action) => {
    state.image = action.payload
  }
  },
})


export const { openModal, setImage } = zoomSlice.actions

export default zoomSlice.reducer