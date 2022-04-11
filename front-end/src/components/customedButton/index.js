
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const ColorButton = withStyles((theme) => ({
    root: {
        width: (props) => (props.width?props.width:'100%'),
        height: (props) => (props.height?props.height:'53px'),
        color: (props) => (props.txtcolor?props.txtcolor: 'white'),
        padding: (props) => (props.padding?props.padding: '0px'),
        backgroundColor: (props) => (props.nrcolor?props.nrcolor: 'black'),
        border: (props) => (props.border?`${props.bordersize?props.bordersize:0}px solid ${props.brcolor} !important`: 'none'),
        borderRadius: (props) => (props.borderradius?props.borderradius: '0px'),
        '&:hover': {
            borderColor: (props) => (`${props.hrcolor} !important`),
        },
    },
}))(Button);

// const useStyles = makeStyles({
//     btnRoot:{

//     }
// })


export default function CustomedButton({width, height, txtColor, hrColor, nrColor, borderSize, borderRadius}){
    // const classes = useStyles();
    return (
            <ColorButton 
                width={width}
                height={height}
                txtcolor={txtColor}
                hrcolor={hrColor}
                nrcolor={nrColor}
                bordersize={borderSize}
                borderradius={borderRadius}
            />
    )
}