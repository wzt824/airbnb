import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfos from './c-cpns/detail-infos'
import { changHeaderConfigAction } from '@/store/features/main'
import { DetailWrapper } from './style'

const Detail = memo((props) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changHeaderConfigAction({isFixed: false, topAlpha: false}))
  }, [dispatch])
  

  return (
    <DetailWrapper>
      <DetailPictures/>
      <DetailInfos/>
    </DetailWrapper>
  )
})

export default Detail