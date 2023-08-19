import * as actionTypes from './constants'
import { getEntireRoomListData } from '@/services'
import { changeCurrentPageAction, changeRoomListAction, changeTotalCountAction, changeIsLoadingAction } from './createActions'

const initialState = {
  currentPage: 0, // 页面
  roomList: [], // 房间列表
  totalCount: 0, // 总数
  isLoading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case actionTypes.CHANGE_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}

export const fetchRoomListAction = (page = 0) => {
  // dispatch, getSate()
  return (dispatch, getSate) => {
    dispatch(changeCurrentPageAction(page))
    dispatch(changeIsLoadingAction(true))
    // const offset = getSate().entireTwo.currentPage
    getEntireRoomListData(page * 20).then(res => {
      dispatch(changeIsLoadingAction(false))
      dispatch(changeRoomListAction(res.list))
      dispatch(changeTotalCountAction(res.totalCount))
    })
  }
}

export default reducer