import { useState, useEffect } from 'react'
import { throttle } from 'underscore'

export default function useScrollPosition() {
  // 位置记录
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 监听window滚动
  useEffect(() => {
    const scrollHandle = throttle(() => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 200)

    window.addEventListener('scroll', scrollHandle)

    return () => {
      window.removeEventListener('scroll', scrollHandle)
    }
  }, [])

  return {
    scrollX,
    scrollY
  }
}