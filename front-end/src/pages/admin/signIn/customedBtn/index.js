
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const CustomedButton = withStyles((theme) => ({
    root: {
        color: `var(--white) !important`,
        fontFamily: `var(--font-family-manrope-semi-bold) !important`,
        fontSize: `var(--font-size-14) !important`,
        fontWeight: '600 !important',
        fontStyle: `normal !important`,
        backgroundColor: `var(--ocean-blue-pearl) !important`,
        cursor: 'pointer !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        height: '48px !important',
        width: '168px !important',
        letterSpacing: '0px !important',
        lineHeight: '24px !important',
        whiteSpace: 'nowrap !important',
        borderRadius: '4px !important',
        marginBottom: '5px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        marginTop: '8px !important',
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: `var(--purple) !important`,
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