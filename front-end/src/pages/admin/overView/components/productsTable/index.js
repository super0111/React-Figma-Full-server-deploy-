import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import ViewAllButton from '../viewAll';

const useStyles = makeStyles(() => ({
    
    image: {
        width: 36,
        height: 36,
    },
    product: {
        display: 'flex',
        alignItems: 'center'
    },
    productName: {
        paddingLeft: 16,
        fontFamily: 'var(--font-family-manrope-semi-bold)',
        fontSize: 'var(--font-size-14)',
    },
    id: {
        fontFamily: 'var(--font-family-manrope-medium)',
        fontSize: 'var(--font-size-14)',
    },
    liked: {
        fontFamily: 'var(--font-family-manrope-medium)',
        fontSize: 'var(--font-size-14)',
    },
    views: {
        fontFamily: 'var(--font-family-manrope-semi-bold)',
        fontSize: 'var(--font-size-14)',
    },
    divider: {
        height: 1,
        backgroundColor: '#EBEAED',
        width: '693px',
        marginBottom: '24px',
        position: 'absolute',
        top: 115,
        left: 24,
    },
    header: {
        display: 'flex',
        padding: '22px 26px 36px 24px'
    },
    tableName: {
        fontFamily: 'var(--font-family-manrope-semi-bold)',
        fontSize: 'var(--font-size-16)',
    },
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'var(--white)',
    color: 'var(--txt-gray)',
    fontFamily: 'var(--font-family-manrope-medium)',
    fontSize: 'var(--font-size-12)',
    height: 18,
    marginBottom: 34,
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

const rows = [
    {name: 'Frozen yoghurt', imagePath: '/img/avatars/1.png', id: 159, liked: 6.0, carbs: 24, views: 4.0},
    {name: 'Frozen yoghurt', imagePath: '/img/avatars/2.png', id: 159, liked: 6.0, carbs: 24, views: 4.0},
    {name: 'Frozen yoghurt', imagePath: '/img/avatars/3.png', id: 159, liked: 6.0, carbs: 24, views: 4.0},
    {name: 'Frozen yoghurt', imagePath: '/img/avatars/4.png', id: 159, liked: 6.0, carbs: 24, views: 4.0},
    {name: 'Frozen yoghurt', imagePath: '/img/avatars/5.png', id: 159, liked: 6.0, carbs: 24, views: 4.0},
];

export default function ProductsTable({tableName, topProducts, viewAllProducts}) {
    const classes = useStyles();
  return (
    <TableContainer 
        component={Paper} 
        style ={{ 
            width: 743,
            height: 496, 
            overFlowY: 'auto', 
            marginTop: 24, 
            marginRight: 22,
            boxShadow: 'none',
            position: 'relative'
        }}>
        <div className={classes.header}>
            <div className={classes.tableName}>{tableName}</div>
            <ViewAllButton 
              text={"View All"}
              onClick={viewAllProducts}
            />
        </div>
        <div className={classes.divider}></div>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>ITEM</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">LIKED</StyledTableCell>
            <StyledTableCell align="right">VIEWS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topProducts.map((item, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                  <div className={classes.product}>
                    <img className={classes.image} src='/img/avatars/1.png' alt=''/>
                    <div className={classes.productName}>{item.productName}</div>
                  </div>
              </StyledTableCell>
              <StyledTableCell align="right"><div className={classes.id}>{item._id}</div></StyledTableCell>
              <StyledTableCell align="right"><div className={classes.liked}>{item.liked}</div></StyledTableCell>
              <StyledTableCell align="right"><div className={classes.views}>{item.viewed}</div></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
