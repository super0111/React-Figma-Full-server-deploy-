import React from 'react'
import { Styles } from './style/arrowButtonStyle';
import { ReactComponent as ArrowIcon } from '../../assets/img/carousel/arrow.svg';

const ArrowButton = (props) => {
  const {text, ...rest} = props

  return (
    <Styles>
      <div className='arrow-button' {...rest}>
        <ArrowIcon />
      </div>
    </Styles>
  )
}
export default ArrowButton
