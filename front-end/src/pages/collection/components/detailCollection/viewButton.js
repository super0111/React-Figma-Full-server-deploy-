import React from 'react'
import { Styles } from './style/viewButtonStyle'
const TxtButton = (props) => {
  const {text, ...rest} = props

  return (
    <Styles>
      <div className='txt-button' {...rest}>
        {text}
      </div>
    </Styles>
  )
}
export default TxtButton
