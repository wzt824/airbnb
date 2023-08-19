import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination'
import { PaginationWrapper } from './style'
import { fetchRoomListAction } from '@/store/features/entireTwo/reducer'

const EntirePagination = memo((props) => {
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entireTwo.totalCount,
    currentPage: state.entireTwo.currentPage,
    roomList: state.entireTwo.roomList
  }), shallowEqual)

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function handleChange(event, pageCount) {
    window.scrollTo(0, 0)
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      {
        !!roomList.length && 
        <div className="info">
          <Pagination count={totalPage} onChange={handleChange} />
          <div className="desc">
            第{startCount}-{endCount}个房源, 共超过{totalCount}个
          </div>
        </div>
      }
    </PaginationWrapper>
  )
})

export default EntirePagination