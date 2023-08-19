import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionsWrapper } from './style'
import classNames from 'classnames'

const SearchSections = memo((props) => {
  const { searchInfos } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <SectionsWrapper count={100 / searchInfos.length}>
      {
        searchInfos.map((item, index) => {
          return (
            <div
              className={classNames("search-item", { 'search-active': currentIndex === index })}
              key={index}
              onClick={e => setCurrentIndex(index)}
            >
              <div className="info">
                <div className="title">{item.title}</div>
                <div className="desc">{item.desc}</div>
              </div>
              { index !== searchInfos.length - 1 && <div className='divider'></div> }
            </div>
          )
        })
      }
    </SectionsWrapper>
  )
})

SearchSections.propTypes = {
  searchInfos: PropTypes.array
}

export default SearchSections