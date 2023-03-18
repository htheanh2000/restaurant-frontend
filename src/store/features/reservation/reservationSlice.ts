import { ApiReservation } from '@/api/reservation'
import { createSlice, createAsyncThunk, Reducer } from '@reduxjs/toolkit'

// omit imports and state
export const reservationAction = createAsyncThunk('reservation', async (props: unknown, { rejectWithValue }) => {
  try {
    const {data} = await ApiReservation(props)
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
  name: 'reservation',
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: builder => {
    builder
    // ===== RESERVATIOn =================================
      .addCase(reservationAction.pending, (state, _action) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(reservationAction.fulfilled, (state, _action) => {
        // state.data = action.payload
        state.status = 'idle'
      })
      .addCase(reservationAction.rejected, (state, action: any) => {
        console.log(action.payload.data)
        state.status = 'idle'
        state.error = action.payload.message
      })
      
  }
})

export default reservationSlice.reducer as Reducer<typeof initialState>
// omit exports

