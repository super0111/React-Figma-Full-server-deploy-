import React from 'react'
import { Styles } from './style/txtButtonStyle'
const TextButton = (props) => {
  const {text, ...rest} = props

  return (
    <Styles>
      <div className='txt-button' {...rest}>
        {text}
      </div>
    </Styles>
  )
}
export default TextButton
