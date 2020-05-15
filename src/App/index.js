import React, { Component, Fragment } from 'react'

class App extends Component {
  render () {
    return (
      <Fragment>
        <div><input /> <button> 增加菜品 </button></div>
        <ul>
          <li>红烧猪蹄</li>
          <li>爆炒肥肠</li>
        </ul>
      </Fragment>
    )
  }
}

export default App