import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CloseOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import { BrowserWrapper } from './style'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const PictureBrowser = memo((props) => {
  const { picList, closeClick } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ isNext, setIsNext ] = useState(true)
  const [ showPicList, setShowPicList ] = useState(true)

  // 图片浏览器一旦打开，滚动条则消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  function picClickHandle() {
    if (closeClick) closeClick()
  }

  function controlBtnHanlde(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = picList.length - 1
    if (newIndex > picList.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  function itemToListHandle(index) {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }
  
  return (
    <BrowserWrapper next={isNext} showPicList={showPicList}>
      <div className="top">
        <CloseOutlined className='close-btn' onClick={picClickHandle} />
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => controlBtnHanlde(false)}>
            <IconArrowLeft width="60" height="60"/>
          </div>
          <div className="btn right" onClick={controlBtnHanlde}>
            <IconArrowRight width="60" height="60"/>
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={picList[currentIndex]}
              classNames='pic'
              timeout={200}
            >
              <img src={picList[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
          
        </div>
      </div>
      <div className="indicator">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{picList.length}:</span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={() => setShowPicList(!showPicList)}>
              <span>{showPicList ? '隐藏' : '显示'}图片列表</span>
              {showPicList ? <CaretDownOutlined /> : <CaretUpOutlined />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {
                picList.map((item, index) => {
                  return (
                    <div
                      className={classNames("item", { active: currentIndex === index })}
                      key={item}
                      onClick={e => itemToListHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  picList: PropTypes.array
}

export default PictureBrowser