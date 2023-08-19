import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    // 1. 获取selectIndex对应的item
    const selectItem = contentRef.current.children[selectIndex]
    const itemOffsetLeft = selectItem.offsetLeft
    const itemWidth = selectItem.clientWidth

    // 2. 获取容器的宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth

    // 3. 计算selectIndex需要滚动的距离: offsetLeft + width*0.5 - indicator.width*0.5 (offsetLeft,width都是当前元素的数值；indicator是元素所在容器的数值)
    let distance = itemOffsetLeft + itemWidth*0.5 - contentWidth*0.5

    // 4. 特殊情况处理
    if (distance < 0) distance = 0 // 左边的边界值处理

    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance // 右边的边界值处理

    // 5. 改变距离
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])
  

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator