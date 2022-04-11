import React from 'react'
import { Styles } from './style/closeBtnStyle'
import { ReactComponent as CloseIcon } from '../../../assets/img/user/collection/close.svg';
import IconButton from '@mui/material/IconButton';

const CloseButton = ({handleClose}) => {
  return (
    <Styles>
      <IconButton 
          aria-label="delete"
          onClick={handleClose}
          className='close-button'
      >
        <CloseIcon />
      </IconButton>
    </Styles>
  )
}
export default CloseButton
