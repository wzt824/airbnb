import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle } = props
  return (
    <HeaderWrapper>
      <div className="section-header">
        <div className="content">
          <h2 className='title'>{title}</h2>
          { subtitle && <div className='subtitle'>{subtitle}</div> }
        </div>
        <div className="arrow-left"></div>
      </div>
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader