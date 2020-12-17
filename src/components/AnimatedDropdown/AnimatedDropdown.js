import React, { useState } from 'react'

import './AnimatedDropdown.scss'

const AnimatedDropdown = (props) => {
  const [list, setList] = useState(props.list)
  const [showList, setShowList] = useState(false)
  const [selectedItem, setSelectedItem] = useState(props.list[0])

  function showDropDown() {
    setShowList(!showList)
  }

  function selectItem(item) {
    setSelectedItem(item)
    setShowList(false)
  }

  return (
    <div className="AnimatedDropdown">
      <div className="AnimatedDropdown__title">{props.title}</div>
      <div className="AnimatedDropdown__expand-button" onClick={() => showDropDown()}>{'>>'}</div>
      <div className="AnimatedDropdown__list" style={{ display: showList ? "block" : "none" }}>
        {list.map(item => (
          <div className="AnimatedDropdown__item" key={item.id} onClick={() => selectItem(item)}>
            {item.value}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedDropdown
