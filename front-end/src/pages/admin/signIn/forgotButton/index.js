import React from 'react'
import { Styles } from './style/style'
const ForgotButton = (props) => {
  const {text, ...rest} = props

  return (
    <Styles>
      <div className='txt-button' {...rest}>
        {text}
      </div>
    </Styles>
  )
}
export default ForgotButton
