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

  let classes = ["AnimatedDropdown"]
  if(props.shape){classes.push(`AnimatedDropdown--${props.shape}`)}

  let shape = ""
  if(props.shape === 'rectangle'){
    shape = "AnimatedDropdown__header--rectangle"
  } else {
    shape = "AnimatedDropdown__header--circle"
  }

  let header = null

  if(props.shape === 'circle') {
    header = 
    <div className="AnimatedDropdown__header" onClick={() => showDropDown()}>
      <img className={shape + "--title"} src={props.picture} alt="foto"/>
    </div>
  } else {
    header =
    <div className="AnimatedDropdown__header" onClick={() => showDropDown()}>
      <div className={shape + "--title"} >{props.title}</div>
    </div>
  }
  

  return (
    <div className={classes.join(' ')}>
      {header}
      <div
        className={props.shape === "circle" ? 'AnimatedDropdown__list AnimatedDropdown__list--circle' : 'AnimatedDropdown__list AnimatedDropdown__list--rectangle'}
        style={{ display: showList ? "block" : "none" }}>
        {list.map(item => (
          <div className="AnimatedDropdown__item" key={item.id} onClick={() => selectItem(item)}>
            <div style={{paddingTop: "12px"}}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedDropdown
