import React, { Component } from 'react'

class Boss extends Component {
  constructor(props) {
    super(props)
    this.toToggole = this.toToggole.bind(this)
    this.state = {
      isShow: false
    }
  }
  render() {
    return (
      <div>
        <h2 className={ this.state.isShow ? 'show' : 'hide' }>蜘蛛侠🕷</h2>
        <button onClick={this.toToggole}>召唤蜘蛛侠</button>
      </div>
    )
  }
  toToggole() {
    this.setState({
      isShow: this.state.isShow ? false : true
    })
  }
}

export default Boss