import React, { Component } from 'react';
import propTypes from 'prop-types'

class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.state = {
      msg: '我是子组件传给父组件的值'
    }
  }
  // componentWillReceiveProps() { // 被废弃
  //   console.log('子组件------componentWillReceiveProps')
  // }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  componentWillUnmount() {
    console.log('卸载组件------componentWillUnmount')
  }
  render() {
    console.log('子组件渲染中...')
    return (
      <div>
        {this.props.chefName}---{this.props.content} <button onClick={this.handleClick}> 删除 </button> <button onClick={this.handleClick2}> 改动 </button>
      </div>
    )
  }
  // 删除菜品
  handleClick() {
    this.props.deleteItem(this.props.index) // 子组件调用父组件的方法
  }
  // 子传父
  handleClick2() {
    this.props.getChildrenMsg(this.state.msg) // 子组件给父组件传值
  }
}

// 设置props数据的验证
MenuItem.propTypes = { 
  content: propTypes.string.isRequired,
  index: propTypes.number,
  deleteItem: propTypes.func,
  getChildrenMsg: propTypes.func
}

// 设置props数据的默认值
MenuItem.defaultProps = { 
  chefName: '王厨师'
}

export default MenuItem;