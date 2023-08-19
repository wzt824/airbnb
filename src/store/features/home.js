import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData
} from '@/services'

// 同步操作：若存在多个请求会等上一个请求发送成功后，才会请求下一个，可能会存在阻塞
// export const fetchHomeDataAction = createAsyncThunk("home/fetchGoodPrice", async () => {
//   const goodPriceInfo = await getHomeGoodPriceData()
//   const highScoreInfo = await getHomeHighScoreData()
//   return {
//     goodPriceInfo,
//     highScoreInfo
//   }
// })

export const fetchHomeDataAction = createAsyncThunk("home/fetchGoodPrice", (payload, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })

  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })

  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendfoAction(res))
  })

  getHomeLongforData().then(res => {
    dispatch(changeLongforinfoAction(res))
  })

  getHomePlusData().then(res => {
    dispatch(changePlusinfoAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendfoAction(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changeLongforinfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusinfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchHomeDataAction.pending, (state, { payload }) => {
    //   console.log('fetchHomeDataAction.pending');
    // }).addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
    //   const { goodPriceInfo, highScoreInfo } = payload
    //   state.goodPriceInfo = goodPriceInfo
    //   state.highScoreInfo = highScoreInfo
    // }).addCase(fetchHomeDataAction.rejected, (state, { payload }) => {
    //   console.log('fetchHomeDataAction.rejected');
    // })
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendfoAction,
  changeLongforinfoAction,
  changePlusinfoAction
} = homeSlice.actions

export default homeSlice.reducer