import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScroolView from '@/base-ui/scrool-view'

const HomeLongfor = memo((props) => {
  const { infoData } = props
  return (
    <LongforWapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className="long-for">
        <ScroolView>
          {
            infoData.list.map(item => {
              return <LongforItem itemData={item} key={item.city}/>
            })
          }
        </ScroolView>
      </div>
    </LongforWapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor