import React from 'react'
import { Styles } from './style/txtButtonStyle'
const ViewAllButton = (props) => {
  const {text, ...rest} = props

  return (
    <Styles>
      <div className='txt-button' {...rest}>
        {text}
      </div>
    </Styles>
  )
}
export default ViewAllButton
