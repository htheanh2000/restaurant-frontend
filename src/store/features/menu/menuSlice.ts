import { ApiCreateDish, ApiDeleteDish, ApiGetMenu } from '@/api/menu'
import { createSlice, createAsyncThunk, Reducer } from '@reduxjs/toolkit'

// omit imports and state
export const createNewDishAction = createAsyncThunk('createNewDish', async (props: unknown, { rejectWithValue }) => {
  try {
    const {data} = await ApiCreateDish(props)
    return data
  } catch (error: any) {
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

export const getMenuAction = createAsyncThunk('getMenu', async (props: unknown, { rejectWithValue }) => {
  try {
    const {data} = await ApiGetMenu(props)
    return data
  } catch (error: any) {
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

export const deleteDishAction = createAsyncThunk('deleteDish', async (props: unknown, { rejectWithValue }) => {
  try {
    const {data} = await ApiDeleteDish(props)
    return data
  } catch (error: any) {
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

interface Item {
  name: string;
  description: string;
  rating: number;
  price: number;
  category: string;
  url: string;
  id: string;
}

interface ResponseData {
  results: Item[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export interface IState {
  status: 'idle' | 'loading',
  data: ResponseData,
  error: any
}

const initialState:IState = {
  status: 'idle',
  data: {
    results: [],
    page: 1,
    limit: 2,
    totalPages: 1,
    totalResults: 0,
  } ,
  error: null
}

const menuSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: builder => {
    builder
    // ===== CREATE NEW DISH =================================
      .addCase(createNewDishAction.pending, (state, _action) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(createNewDishAction.fulfilled, (state, _action) => {
        // state.data = action.payload
        state.status = 'idle'
      })
      .addCase(createNewDishAction.rejected, (state, action: any) => {
        
        state.status = 'idle'
        state.error = action.payload.message
      })
      // ===== GET MENU =================================
      .addCase(getMenuAction.pending, (state, _action) => {
        state.status = 'loading'
      })
      .addCase(getMenuAction.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'idle'
      })
      .addCase(getMenuAction.rejected, (state, action: any) => {
        
        state.status = 'idle'
        state.error = action.payload.message
      })
      // ===== DELETE DISH =================================
      .addCase(deleteDishAction.pending, (state, _action) => {
        state.status = 'loading'
      })
      .addCase(deleteDishAction.fulfilled, (state, _action) => {
        state.status = 'idle'
        state.error = null
      })
      .addCase(deleteDishAction.rejected, (state, action: any) => {
        state.status = 'idle'
        state.error = action.payload.message
      })
  }
})

export default menuSlice.reducer as Reducer<typeof initialState>
// omit exports

