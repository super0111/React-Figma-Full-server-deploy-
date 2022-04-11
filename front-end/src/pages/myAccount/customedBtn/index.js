
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const CustomedButton = withStyles((theme) => ({
    root: {
        color: `var(--white) !important`,
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-24) !important`,
        fontWeight: '400px !important',
        fontStyle: `normal !important`,
        backgroundColor: `var(--black-normal) !important`,
        cursor: 'pointer !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        height: '53px !important',
        width: '528px !important',
        letterSpacing: '0px !important',
        lineHeight: '24px !important',
        whiteSpace: 'nowrap !important',
        borderRadius: '63px !important',
        marginBottom: '50px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: `var(--black-hover) !important`,
        },
        [`@media screen and (max-width: 600px)`]: {
            width: '100% !important',
        },
    },
}))(Button);

export default function CustomedTextButton({text, addMore, whichOne, saveOption}){
    const handleClick = () => {
        if(text === 'View More')
            addMore();
        else    
            saveOption(whichOne);
    }
    return (
        <CustomedButton 
            onClick={() => handleClick()}
        >
            {text}
        </CustomedButton>
    )
}