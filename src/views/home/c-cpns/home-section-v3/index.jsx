import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
import ScroolView from '@/base-ui/scrool-view'
import RoomItem from '@/components/room-item'

const HomeSectionV3 = memo((props) => {

  const { infoData } = props
  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className="room-list">
        <ScroolView>
          {
            infoData.list.map(item => {
              return <RoomItem key={item.id} itemData={item} itemWidth="20%"/>
            })
          }
        </ScroolView>
      </div>
      <SectionFooter/>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3