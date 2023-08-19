import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { fetchRoomListAction } from '@/store/features/entireTwo/reducer'
import { changHeaderConfigAction } from '@/store/features/main'
import useScrollTop from '@/hooks/useScrollTop'

const Entire = memo(() => {

  useScrollTop()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changHeaderConfigAction({isFixed: true, topAlpha: false}))
  }, [dispatch])
  

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire