import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import PictureBrowser from '@/base-ui/picture-browser'
import { PicturesWrapper } from './style'

const DetailPictures = memo((props) => {
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)
  const [ showPicBrowser, setShowPicBrowse ] = useState(false)

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={() => setShowPicBrowse(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className="item" key={item} onClick={() => setShowPicBrowse(true)}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>

      <Button className='show-btn' variant="contained" onClick={() => setShowPicBrowse(true)}>显示照片</Button>

      { showPicBrowser && <PictureBrowser picList={detailInfo?.picture_urls} closeClick={() => setShowPicBrowse(false)}/> }
    </PicturesWrapper>
  )
})


export default DetailPictures