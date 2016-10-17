import React from 'react'

class SideBar extends React.Component {
  static displayName = 'SideBar'
 
  render () {
    return (
      <div className="SideBar">
        <div className="software-logo">
          <h1>SPORTING</h1>
          <div className="circle" id="A"></div>
          <div className="circle" id="B"></div>
          <h2>HEROES</h2>
        </div>
      </div>

      )
  }
}

export default SideBar
