import React, { PropTypes as T, Component } from 'react'

import style from './style.css'

import Button from '../Button'

class Controller extends Component{
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
      <div className={style.className}>
        <input type='number' defaultValue={this.state.step} onChange={(e) => { this.changeHandler(e)} }/>
        <Button
          clickHandler={ () => {this.props.handler(this.state.step)} } 
          content={this.props.content}
        />
      </div>
    )
  }
}

Controller.propTypes = {
  content: T.string,
  handler: T.func
}

export default Controller
