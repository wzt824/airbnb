import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/features/detail'

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entireTwo.roomList,
    totalCount: state.entireTwo.totalCount,
    isLoading: state.entireTwo.isLoading
  }), shallowEqual)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const entireItemClick = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  }, [dispatch, navigate])

  return (
    <RoomsWrapper>
      <h2 className='title'>共{totalCount}出住所</h2>
      <div className="room-list">
        {
          roomList.map(item => {
            return <RoomItem
                      itemData={item}
                      key={item._id}
                      itemWidth="20%"
                      itemClick={entireItemClick}
                    />
          })
        }
      </div>
      {isLoading && <div className="cover"></div>}
      
    </RoomsWrapper>
  )
})

export default EntireRooms