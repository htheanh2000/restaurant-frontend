import { ApiLogIn, ApiLoginProps, ApiSignUp, ApiSignUpProps } from '@/api/user'
import { createSlice, createAsyncThunk, Reducer } from '@reduxjs/toolkit'

// omit imports and state
export const logInAction = createAsyncThunk('login', async (props: ApiLoginProps, { rejectWithValue }) => {
  try {
    const data = await ApiLogIn(props)
    return data.data
  } catch (error: any) {
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

export const signUpAction = createAsyncThunk('sign-up', async (props: ApiSignUpProps, { rejectWithValue }) => {
  try {
    const data = await ApiSignUp(props)
    return data.data
  } catch (error: any) {
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

export interface IState {
  status: 'idle' | 'loading',
  user: unknown,
  tokens: unknown,
  error: any
}

const initialState:IState = {
  status: 'idle',
  user: null ,
  tokens: null,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: builder => {
    builder
      .addCase(logInAction.pending, (state, _action) => {
        state.status = 'loading'
      })
      .addCase(logInAction.fulfilled, (state, action) => {
        state.user = action.payload
        state.tokens = action.payload
        state.status = 'idle'
      })
      .addCase(logInAction.rejected, (state, action: any) => {
        console.log(action.payload.data)
        state.status = 'idle',
        state.error = action.payload
      })
      .addCase(signUpAction.pending, (state, _action) => {
        state.status = 'loading'
      })
      .addCase(signUpAction.fulfilled, (state, action) => {
        state.user = action.payload
        state.tokens = action.payload
        state.status = 'idle'
      })
      .addCase(signUpAction.rejected, (state, action: any) => {
        console.log(action.payload.data)
        state.status = 'idle',
        state.error = action.payload
      })
  }
})

export default userSlice.reducer as Reducer<typeof initialState>
// omit exports

