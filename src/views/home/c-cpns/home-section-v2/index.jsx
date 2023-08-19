import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  const initName = Object.keys(infoData.dest_list ?? {})[0] ?? ""
  const [tabName, setTabName] = useState(initName)

  const tabNames = infoData.dest_address?.map(item => item.name)
  const tabClick = useCallback((index, name) => {
    setTabName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={tabNames} tabClick={tabClick}/>
      <SectionRooms roomList={infoData.dest_list?.[tabName]} itemWidth="33.33%"/>
      <SectionFooter name={tabName}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2