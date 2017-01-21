import style from './style.css'

import React, { PropTypes as T, Component } from 'react'
import { render } from 'react-dom'

import Controller from '../Controller'

class Counter extends Component{
  constructor(p){
    super(p)
    this.state = {
      count: 0
    }
  }
  add(a){
    this.setState({ count: this.state.count + parseFloat(a) })
  }
  subtract(a){
    this.setState({ count: this.state.count - parseFloat(a) }) 
  }
  render(){
    return (
      <div className={style.className}>
        <h2>{this.props.name}</h2>
        <span
          className={ `${style.className}__val` }>
            { `${this.state.count}` }
        </span>
        <div className={ `${style.className}__ctrl-wrapper` }>
          <Controller handler={(a) => this.subtract(a)} content='-' />
          <Controller handler={(a) => this.add(a)} content='+' />
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  name: T.string
}
render(
  <Counter name='Counter' />,   
  document.querySelector('#root')
)
