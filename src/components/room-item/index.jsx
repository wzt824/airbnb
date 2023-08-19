import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import { ItemWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const sliderRef = useRef()
  const [selectIndex, setSelectIndex] = useState(0)

  function controlClick(isRight = true, event) {
    // 轮播图展示区域
    isRight ? sliderRef.current.next() : sliderRef.current.prev()

    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)

    // 阻止事件冒泡
    event.stopPropagation()
  }

  function itemClickHandle() {
    if (itemClick) itemClick(itemData)
  }

  return (
    <ItemWrapper
      $verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
    >
      <div className="inner" onClick={itemClickHandle}>
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}
        {
          itemData.picture_urls ? (
            <div className="slider">
              <div className="control">
                <div className="btn left" onClick={e => controlClick(false, e)}>
                  <IconArrowLeft width="30" height="30"/>
                </div>
                <div className="btn right" onClick={e => controlClick(true, e)}>
                  <IconArrowRight width="30" height="30"/>
                </div>
              </div>
              <div className="indicator">
                <Indicator selectIndex={selectIndex}>
                  {
                    itemData?.picture_urls?.map((item, index) => {
                      return (
                        <div className="dot-item" key={item}>
                          <span className={classNames('dot', {active: selectIndex === index})}></span>
                        </div>
                      )
                    })
                  }
                </Indicator>
              </div>
              <Carousel dots={false} ref={sliderRef}>
                {
                  itemData?.picture_urls?.map(item => {
                    return (
                      <div className="cover" key={item}>
                        <img src={item} alt="" />
                      </div>
                    )
                  })
                }
              </Carousel>
            </div>
          ) : (
            <div className="cover">
              <img src={itemData.picture_url} alt="" />
            </div>
          )
        }
        
        <div className="desc">
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            name="simple-controlled"
            precision={0.1}
            value={itemData.star_rating ?? 0}
            readOnly
            sx={{fontSize: 12, color: '#00848A'}}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>· {itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem