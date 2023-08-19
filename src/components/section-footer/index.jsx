import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const SectionFooter = memo((props) => {
  const { name } = props
  let showName = '显示全部'
  if (name) {
    showName = `显示更多${name}房源`
  }

  const navigate = useNavigate()
  function footerInfoClick() {
    navigate("/entire")
  }
  return (
    <FooterWrapper color={name ? "#00848A" : '#222'}>
      <div className="info" onClick={footerInfoClick}>
        <div className="text">{showName}</div>
        <div className="icon">
          <IconArrowRight/>
        </div>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter