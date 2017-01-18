import './style.css'

import React, { PropTypes as T, Component } from 'react'
import { render } from 'react-dom'


class Button extends Component{
  constructor(){
    super()
    this.state = {
      step: 1
    }
  }
  changeHandler(e){
    this.setState({step: e.target.value})
  }
  render(){
    return (
      <div className='button'>
        <input type='number' defaultValue={this.state.step} onChange={(e) => { this.changeHandler(e)} }/>
        <button onClick={ () => {this.props.handler(this.state.step)} } >{this.props.content}</button>
      </div>
    )
  }
}

Button.propTypes = {
  content: T.string,
  handler: T.func
}

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
      <div className='counter'>
        <h2>{this.props.name}</h2>
        <span className='counter__val'>{`${this.state.count}`}</span>
        <Button handler={(a) => this.subtract(a)} content='-' />
        <Button handler={(a) => this.add(a)} content='+' />
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
