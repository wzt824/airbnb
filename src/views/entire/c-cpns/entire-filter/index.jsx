import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([])

  function itemClick(item) {
    // 判断是否存在
    const bol = selectItems.includes(item)
    const newItems = [...selectItems]
    if(!bol) {
      newItems.push(item)
    } else {
      const itemIndex = selectItems.findIndex(i => i === item)
      newItems.splice(itemIndex, 1)
    }
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map(item => {
            return <div
              className={classNames("item", { active: selectItems.includes(item)})}
              key={item}
              onClick={e => itemClick(item)}
            >{item}</div>
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter