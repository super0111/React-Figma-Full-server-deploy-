import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as DisableIcon} from '../../../../../assets/img/admin/disable.svg';
import {ReactComponent as MailIcon} from '../../../../../assets/img/admin/mail.svg';
import {ReactComponent as ArrowIcon} from '../../../../../assets/img/admin/arrow.svg';
import {ReactComponent as RefreshIcon} from '../../../../../assets/img/admin/refresh.svg';
import {ReactComponent as MoreIcon} from '../../../../../assets/img/admin/more.svg';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
import {
  suspendById
} from '../../../../../api/admin/users';

const useStyles = makeStyles(() => ({
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 32,
        backgroundColor: 'var(--txt-gray)'
    },
    user: {
        display: 'flex',
        alignItems: 'center',
        width: 157,
        paddingLeft: 8,
    },
    userName: {
        color: 'var(--charade)',
        fontFamily: 'var(--font-family-manrope-semi-bold)',
        fontSize: 'var(--font-size-14)',
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 8,
    },
    customerId: {
      width: 115,
      display: 'flex',
      color: 'var(--txt-gray)',
      fontFamily: 'var(--font-family-manrope-medium)',
      fontSize: 'var(--font-size-12)',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
    },
    header: {
        display: 'flex',
        padding: '22px 26px 22px 24px',
        alignItems: 'center',
    },
    headerGroup: {
      marginLeft: 'auto',
    },
    tableName: {
        fontFamily: 'var(--font-family-manrope-semi-bold)',
        fontSize: 'var(--font-size-16)',
    },
    actionGroup: {
      display: 'flex',
    },
    iconBtn: {
      padding: 5,
    },
    footer: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderTop: '1px solid #EBEAED',
      paddingTop: 8,
      paddingBottom: 8,
    }
}))


const ViewMore = withStyles((theme) => ({
  root: {
      color: `var(--txt-gray) !important`,
      fontFamily: `var(--font-family-manrope) !important`,
      fontSize: `var(--font-size-13) !important`,
      fontWeight: '400px !important',
      fontStyle: 'normal !important',
      height: '32px !important',
      marginBottom: '0.78px !important',
      display: 'flex !important',
      padding: '0px 15.5px !important',
      justifyContent: 'flex-end !important',
      alignItems: 'center !important',
      borderRadius: '64px !important',
      cursor: 'pointer !important',
      '&:hover': {
          opacity: '.7 !important',
      },
      '& .sign-in-arrow': {
          width: '16px !important',
          height: '16px !important',
          marginLeft: '8px !important',
          marginTop: '0px !important',
      },
      '& .sign-in-txt': {
          display: 'flex !important',
          paddingTop: '1px !important',
          alignItems: 'center !important',
      }
  },
}))(Button);

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'var(--white)',
    color: 'var(--txt-gray)',
    fontFamily: 'var(--font-family-manrope-medium)',
    fontSize: 'var(--font-size-12)',
    height: 18,
    paddingBottom: 10,
  },
  '&': {
    height: 36,
    padding: '0px 24px 24px 24px',
    border: 'none'
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&': {
    backgroundColor: 'white',
  },
}));

export default function UsersTable({users, refresh, moreAction, viewAllUsers}) {
    const classes = useStyles();

    const suspend = async(id) => {
      await suspendById(id);
    }

  return (
    <TableContainer 
      component={Paper} 
      style = {{ 
        width: 359, 
        height: 496, 
        overFlowY: 'auto',
        marginTop: 24, 
        marginRight: 22,
        boxShadow: 'none',
        overflowX: 'hidden'
      }}
    >
      <div className={classes.header}>
          <div className={classes.tableName}>New Users</div>
          <div className={classes.headerGroup}>
            <IconButton onClick={refresh}>
              <RefreshIcon />
            </IconButton>
            <IconButton onClick={moreAction}>
              <MoreIcon />
            </IconButton>
          </div>
      </div>    
      <Table aria-label="customized table">
        <TableBody>
          {users.map((user, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                  <div className={classes.user}>
                    {user?.avatarPath?
                      <img className={classes.avatar} src={`${process.env.REACT_APP_UPLOAD_URL}${user?.avatarPath}`} alt=''/>
                      :<div className={classes.avatar}></div>
                    }
                    <div className={classes.userInfo}>
                      <div className={classes.userName}>
                        {user.userName}
                      </div>
                      <div className={classes.customerId}>
                        {`Customer ID#${user._id}`}
                      </div>
                    </div>
                  </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div className={classes.actionGroup}>
                  <IconButton 
                      aria-label="delete"
                      className={`${classes.iconBtn}`}
                      onClick={() => suspend(user._id)}
                  >
                      <DisableIcon />
                  </IconButton>
                  <Tooltip title={user.email} placement="top-start">
                    <IconButton 
                        aria-label="delete"
                        className={`${classes.iconBtn}`}
                    >
                        <MailIcon />
                    </IconButton>
                  </Tooltip>
                </div>  
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.footer}>
        <ViewMore onClick={viewAllUsers}>
          <div className='.sign-in-txt'>View More Customers</div>
          <ArrowIcon className='sign-in-arrow'/>
        </ViewMore>
      </div>
      
    </TableContainer>
  );
}
