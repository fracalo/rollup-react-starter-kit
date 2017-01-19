import React, { PropTypes as T } from 'react'

import style from './style.css'

const Button = ({ clickHandler, content }) => (
  <button className={style.className} onClick={clickHandler}>
    ci{content}
  </button>
)

Button.propTypes = {
  clickHandler: T.func,
  content: T.string
}

export default Button
