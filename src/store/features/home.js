import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData } from '@/services'

export const fetchHomeDataAction = createAsyncThunk("home/fetchGoodPrice", async () => {
  const res = await getHomeGoodPriceData()
  
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.pending, (state, { payload }) => {
      console.log('fetchHomeDataAction.pending');
    }).addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload
    }).addCase(fetchHomeDataAction.rejected, (state, { payload }) => {
      console.log('fetchHomeDataAction.rejected');
    })
  }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer