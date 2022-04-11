import React from 'react'
import { Styles } from './style/closeBtnStyle'
import { ReactComponent as CloseIcon } from '../../../../assets/img/user/collection/close.svg';

const CloseButton = ({handleClose}) => {
  return (
    <Styles>
      <div 
        className='close-button'
        onClick={handleClose}
      >
        <CloseIcon />
      </div>
    </Styles>
  )
}
export default CloseButton
