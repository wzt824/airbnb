import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/features/home'
import { changHeaderConfigAction } from '@/store/features/main'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeWrapper from './style'
import { isEmptyO } from '@/utils'
import HomeLongfor from './c-cpns/home-longfor'

const Home = memo(() => {
  const { goodPrice, highScore, discountInfo, hotRecommend, longforInfo, plusInfo } = useSelector((state) => ({
    goodPrice: state.home.goodPriceInfo,
    highScore: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommend: state.home.hotRecommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)
  

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changHeaderConfigAction({isFixed: true, topAlpha: true}))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/> }
        { isEmptyO(goodPrice) && <HomeSectionV1 infoData={goodPrice}/> }
        { isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}/> }
        { isEmptyO(highScore) && <HomeSectionV1 infoData={highScore}/> }
        { isEmptyO(hotRecommend) && <HomeSectionV2 infoData={hotRecommend}/> }
        { isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}/> }
      </div>
    </HomeWrapper>
  )
})

export default Home