import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { TabsWrapper } from './style'
import ScroolView from '@/base-ui/scrool-view'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)

  function itemClickHandle(index, name) {
    setCurrentIndex(index)
    tabClick(index, name)
  }
  return (
    <TabsWrapper>
      <ScroolView>
        {
          tabNames.map((item, index) => {
            return (
              <div
                key={item}
                // className="item"
                className={classNames("item", { active: index === currentIndex })}
                onClick={e => itemClickHandle(index, item)}
              >{item}</div>
            )
          })
        }
      </ScroolView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTabs