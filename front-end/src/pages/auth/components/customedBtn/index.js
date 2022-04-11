
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
        width: '100% !important',
        letterSpacing: '0px !important',
        lineHeight: '24px !important',
        whiteSpace: 'nowrap !important',
        borderRadius: '63px !important',
        marginBottom: '5px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        marginTop: '8px !important',
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: `var(--black-hover) !important`,
        },
    },
}))(Button);

export default function CustomedTextButton({text, signIn}){
    const handleClick = () => {
        signIn();
    }
    return (
        <CustomedButton onClick={() => handleClick()}>
            {text}
        </CustomedButton>
    )
}