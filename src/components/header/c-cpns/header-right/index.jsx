import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'

const HeaderRight = memo(() => {

  const [ showPanel, setShowPanel ] = useState(false)

  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    // addEventListener 的第三个参数：true(捕获事件) false(冒泡事件)，默认为false
    window.addEventListener('click', windowHandleClick, true)

    return () => {
      window.removeEventListener('click', windowHandleClick)
    }
  }, [])

  return (
    <RightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal/>
        </span>
      </div>
      <div className="profile" onClick={() => setShowPanel(!showPanel)}>
        <IconProfileMenu/>
        <IconProfileAvatar/>

        {
          showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight