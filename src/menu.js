import React, { Component, Fragment } from 'react'
import MenuItem from './menuItem'
import axios from 'axios'
import Boss from './boss.js'
import './style.css'

class Menu extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      inputValue: '',
      childrenMsg: '我一会儿会发生改变',
      menuList: [ // 菜单列表
        { id: 123, name: '红烧猪蹄' },
        { id: 321, name: '爆炒肥肠' }
      ]
    }
  }
  // componentWillMount() { // 被废弃
  //   console.log('componentWillMount------组件将要挂在到页面的时候');
  // }
  componentDidMount() {
    console.log('componentDidMount------组件挂载完成的时候')
    axios.get('http://rap2.taobao.org:38080/app/mock/247628/menuList').then(res => {
      const data = res.data.data
      this.setState({
        menuList: data
      })
    }).catch(error => {
      console.log(error)
    })
  }
  shouldComponentUpdate() {
    console.log('1------shouldComponentUpdate')
    return true
  }
  // componentWillUpdate() { // 被废弃
  //   console.log('2------componentWillUpdate')
  // }
  componentDidUpdate() {
    console.log('4------componentDidUpdate');
  }
  render() {
    console.log('render------组件挂载中')
    console.log('3------render')
    return (
      <Fragment>
        <div>
          <label htmlFor="menuInput">增加菜品</label>
          <input
            id="menuInput"
            ref={(input) => this.input = input}
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            placeholder="请输入菜名" />
          <button onClick={this.addMenuList.bind(this)}> 增加菜品 </button>
        </div>
        <ul ref={(ul) => this.ul = ul}>
          {
            this.state.menuList.map((item, index) => {
              return (
                <li key={index}>
                  <MenuItem
                    content={item.name}
                    index={index}
                    deleteItem={this.deleteItem.bind(this)}
                    getChildrenMsg={this.getChildrenMsg.bind(this)} />
                </li>
              )
            })
          }
        </ul>
        <h1>{this.state.childrenMsg}</h1>
        <Boss />
      </Fragment>
    )
  }
  // 改变输入框中的值
  inputChange(e) {
    this.setState({
      inputValue: this.input.value
    })
  }
  // 增加菜品
  addMenuList() {
    if (this.state.inputValue.trim()) {
      this.setState({
        menuList: [...this.state.menuList, this.state.inputValue],
        inputValue: ''
      }, () => {
        console.log(this.ul.querySelectorAll('li').length)
      })
    } else {
      alert('请输入菜名')
    }
  }
  // 删除菜品
  deleteItem(index) {
    let list = this.state.menuList
    list.splice(index, 1)
    this.setState({
      menuList: list
    })
  }
  // 获取子组件的值
  getChildrenMsg(msg) {
    this.setState({
      childrenMsg: msg
    }) 
  }
}

export default Menu
