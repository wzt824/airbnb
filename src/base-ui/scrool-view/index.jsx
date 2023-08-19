import React, { memo, useState, useEffect, useRef } from 'react'
import { ViewWrapper } from './style'

const ScroolView = memo((props) => {
  const [showleft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  const totalDistanceRef = useRef() // 通过ref的方式记录不需要导致页面刷新的数据
  const posIndexeRef = useRef(0)

  // 组件渲染完毕，判断是否显示右侧按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 视图的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  function controlClick(isRight) {
    const newIndex = isRight ? posIndexeRef.current + 1 : posIndexeRef.current - 1
    const elOffsetL = scrollContentRef.current.children[newIndex].offsetLeft
    scrollContentRef.current.style.transform = `translate(-${elOffsetL}px)`

    posIndexeRef.current = newIndex
    // 是否展示右边按钮
    setShowRight(totalDistanceRef.current > elOffsetL)
    setShowLeft(elOffsetL > 0)
  }
  return (
    <ViewWrapper>
      { showleft && <div className="control left" onClick={e => controlClick(false)}></div> }
      { showRight && <div className="control right" onClick={e => controlClick(true)}></div> }
      {/* 插槽 slot */}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})


export default ScroolView