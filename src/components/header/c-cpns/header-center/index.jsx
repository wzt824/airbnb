import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import searchTitles from '@/assets/data/search_titles.json'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'

const HeaderCenter = memo((props) => {
  const [ tabIndex, setTabIndex ] = useState(0)
  const { isSearch, searchBarClick } = props
  const titles = searchTitles.map(item => item.title)
  const searchInfos = searchTitles.map(item => item.searchInfos)

  function searchBarHandle() {
    if (searchBarClick) searchBarClick()
  }
  
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarHandle}>
          <div className="text">搜索房源和体验</div>
          <span className="icon">
            <IconSearchBar/>
          </span>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex}/>
          <div className="infos">
            <SearchSections searchInfos={searchInfos[tabIndex]}/>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

HeaderCenter.propTypes = {
  isSearch: PropTypes.bool
}

export default HeaderCenter