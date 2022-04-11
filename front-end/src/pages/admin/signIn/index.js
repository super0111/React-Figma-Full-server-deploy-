import { Styles, ForgotStyle } from "./style";
import CustomedInput from './input';
import PasswordInput from './passwordInput';
import ForgotButton from "./forgotButton";
import { useState } from "react";
import CustomedTextButton from './customedBtn';
import { useNavigate } from "react-router-dom";
import { adminSignIn } from "../../../api/admin/overview";
import Dialog from '@mui/material/Dialog';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import CancelButton from '../../auth/components/cancelButton';
import { forgotPassword } from '../../../api/auth';

const EMAIL_STATUS_NONE = -1;
const EMAIL_STATUS_SUCCESS = 0;
const EMAIL_STATUS_FAIL = 1;

const DlgButton = withStyles((theme) => ({
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
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: `var(--black-hover) !important`,
        },
        [`@media screen and (max-width: 768px)`]: {
            fontWeight: '400px !important',
            border: `1px solid var(--purple)`,
            borderRadius: '100px !important',
        },
        [`@media screen and (max-width: 750px)`]: {
            width: '100% !important',
            margin: '0px 10px !important',
        },
        [`@media screen and (max-width: 600px)`]: {
            width: '100% !important',
            margin: '0px 10px !important',
        }
    },
}))(Button);

export default function AdminSignIn () {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [newEmail, setNewEmail] = useState('');
    const [password, setPassword] = useState();
    const [forgotOpen, setForgotOpen] = useState(false);
    const [emailSuccessed, setEmailSuccessed] = useState(EMAIL_STATUS_NONE);

    const closeForgotDlg = () => {
        setForgotOpen(false);
    };

    const forgetPassword = async() => {
        if(emailSuccessed === EMAIL_STATUS_SUCCESS){
            closeForgotDlg();
            return;
        }
        const res = await forgotPassword(newEmail);
        if(res.status === 'ok'){
            setEmailSuccessed(EMAIL_STATUS_SUCCESS);
        }else{
            setEmailSuccessed(EMAIL_STATUS_FAIL);
        }
    }

    const signIn = async() => {
        const res = await adminSignIn(email, password);
        if(res.status === 200){
            localStorage.setItem('adminAuth', JSON.stringify(res.data));
            navigate('/admin/overview');
        }
    }

    const signUp = () => {
        // navigate('/admin/signup');
    }

    return (
        <Styles>
            <div className="sign-in-container">
                {/* <LogoIcon className='logo'/> */}
                <img src='/img/admin_logo.svg' alt="" />
                <div className="panel">
                    <div className="header">
                        <div className="type">
                            Sign in
                        </div>
                        {/* <div className="account">
                            <span className="user">New user?</span>
                            <span 
                                className="create"
                                onClick={signUp}
                            >Create an acount </span>
                        </div> */}
                    </div>
                    <div className="form-group">
                        <CustomedInput 
                            inputValue={email}
                            inputHandler={setEmail}
                            placeholderName="Email address"
                        />
                        <PasswordInput 
                            inputValue={password}
                            inputHandler={setPassword}
                            placeholderName="Password"
                        />
                        <div className="form-footer">
                            <ForgotButton text={"Forgot your password?"} onClick={() => setForgotOpen(true)}/>
                            <CustomedTextButton 
                                text={"Sign In"}
                                signIn={signIn}
                            />
                        </div>
                        <Dialog
                            open={forgotOpen} 
                            onClose={closeForgotDlg}
                            maxWidth='md'
                            fullWidth={true}
                            PaperProps={{
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: 24,
                                    overflowY: 'auto',
                                    overflowX: 'hidden',
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    padding: 30,
                                    height: 762,
                                    '@media(minWidth: 780px)' : {
                                        height: 675,
                                    },
                                    '@media(minWidth: 600px)' : {
                                        height: 601,
                                    }
                                },
                            }}
                        >
                            <ForgotStyle>
                                <div className={emailSuccessed !== EMAIL_STATUS_SUCCESS?'dialog-container':'dialog-container small-dlg'}>
                                    <div className="content">
                                        <div className="header">
                                            {emailSuccessed === EMAIL_STATUS_SUCCESS?'We Found It!':'Forgot your password'}
                                        </div>
                                        <div className="body">
                                            <div className="des-txt">
                                                {emailSuccessed === EMAIL_STATUS_SUCCESS?'You’ll receive an email to reset your password shortly.':'Enter the username or email you remember'}
                                            </div>
                                            {emailSuccessed !== EMAIL_STATUS_SUCCESS &&
                                                <CustomedInput 
                                                    inputValue={newEmail}
                                                    inputHandler={setNewEmail}
                                                    placeholderName="Username or Email"
                                                />
                                            }
                                        </div>
                                        <div className="footer">
                                            <DlgButton onClick={() => forgetPassword()}>
                                                {emailSuccessed !== EMAIL_STATUS_SUCCESS?'Next':'OK'}
                                            </DlgButton>
                                        </div>
                                        {emailSuccessed !== EMAIL_STATUS_SUCCESS &&
                                            <CancelButton 
                                                text={"Back"} 
                                                onClick={closeForgotDlg}
                                            />
                                        }
                                    </div>
                                    {emailSuccessed === EMAIL_STATUS_FAIL && 
                                        <div className="email-alert">
                                            <div className="alert-content">
                                                Sorry, we can’t find your account, please try again or Contact Support
                                            </div>
                                        </div>
                                    }
                                </div>
                            </ForgotStyle>
                        </Dialog>
                    </div>
                </div>
            </div>
        </Styles>
    )
}