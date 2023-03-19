import { ApiContact } from '@/api/contact'
import { createSlice, createAsyncThunk, Reducer } from '@reduxjs/toolkit'

// omit imports and state
export const contactAction = createAsyncThunk('contact', async (props: unknown, { rejectWithValue }) => {
  try {
    const {data} = await ApiContact(props)
    return data
  } catch (error: any) {
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})


interface ResponseData {
}

export interface IState {
  status: 'idle' | 'loading',
  data: ResponseData,
  error: any
}

const initialState:IState = {
  status: 'idle',
  data: {},
  error: null
}

const reservationSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: builder => {
    builder
    // ===== RESERVATIOn =================================
      .addCase(contactAction.pending, (state, _action) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(contactAction.fulfilled, (state, _action) => {
        // state.data = action.payload
        state.status = 'idle'
      })
      .addCase(contactAction.rejected, (state, action: any) => {
        console.log("Rejected", action.payload.message);
        
        state.status = 'idle'
        state.error = action.payload.message
      })
      
  }
})

export default reservationSlice.reducer as Reducer<typeof initialState>
// omit exports

