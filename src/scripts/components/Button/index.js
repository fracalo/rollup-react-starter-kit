import React, { PropTypes as T } from 'react'

import style from './style.css'

const Button = ({ clickHandler, content }) => (
  <div>
    <button className={style.className} onClick={clickHandler}>
      {content}
    </button>
  </div>
)

Button.propTypes = {
  clickHandler: T.func,
  content: T.string
}

export default Button
