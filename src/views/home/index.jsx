import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/features/home'
import HomeBanner from './c-cpns/home-banner'
import HomeWrapper from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  const { goodPrice } = useSelector((state) => ({ goodPrice: state.home.goodPriceInfo }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPrice.title}/>
          <SectionRooms roomList={goodPrice.list}/>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home