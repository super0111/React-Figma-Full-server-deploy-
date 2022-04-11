import { Styles, ViewCollectionDlgStyle, ConfirmDlgStyle } from "./socialProfileStyle";
import { useEffect, useState, useContext } from "react";
import CustomedInput from "../input";
import CustomedTextButton from "../customedBtn";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { ReactComponent as GoogleIcon } from '../../../assets/img/account/google.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/img/account/facebook.svg';
import { ReactComponent as GoogleWhiteIcon } from '../../../assets/img/google_white.svg';
import { ReactComponent as FacebookWhiteIcon } from '../../../assets/img/facebook_white.svg';
import { ReactComponent as DisconnectIcon } from '../../../assets/img/account/disconnect.svg';
import Dialog from '@mui/material/Dialog';
import CancelButton from "../cancelButton";
import { upDateSocialProfile } from '../../../api/account';
import {signUpWithGoogle, signUpWithFacebook} from '../../../api/auth';
import { ReactComponent as ProfileSuccess } from '../../../assets/img/account/profile_success.svg';
import { ReactComponent as ConfirmIcon } from '../../../assets/img/account/confirm.svg';
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login-typed";

const IconButton = withStyles((theme) => ({
    root: {
        height: '48px !important',
        display: 'flex !important',
        padding: '0px 17px !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        border: '1px solid var(--second) !important',
        borderRadius: '24px !important',
        cursor: 'pointer !important',
        textAlign: 'center !important',
        width: '177px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        color: `var(--second) !important`,
        fontFamily: `var(--font-family-roboto-bold) !important`,
        fontSize: `var(--font-size-16) !important`,
        fontWeight: '700px !important',
        fontStyle: `normal !important`,
        marginTop: `40px !important`,
        '&:hover': {
            color: `var(--white) !important`,
            backgroundColor: `var(--second) !important`,
        },
        ['@media screen and (max-width: 900px)']: { // eslint-disable-line no-useless-computed-key
            width: '255px !important',
            padding: '0 !important',
        },
        ['@media screen and (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key
            width: '100% !important',
        },
        '& .icon': {
            marginRight: '8px !important',
        }
    }
  }))(Button);

const TextButton = withStyles((theme) => ({
    root: {
        color: `var(--white) !important`,
        fontFamily: `var(--font-family-roboto-bold) !important`,
        fontSize: `var(--font-size-16) !important`,
        fontWeight: '700px !important',
        fontStyle: 'normal !important',
        height: '48px !important',
        minWidth: '177px !important',
        marginLeft: `14px !important`,
        marginBottom: '0.78px !important',
        display: 'flex !important',
        padding: '0px 15.5px !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        borderRadius: '64px !important',
        cursor: 'pointer !important',
        backgroundColor: `var(--main) !important`,
        marginTop: `40px !important`,
        [`@media screen and (max-width: 650px)`]: {
            width: '100% !important',
            padding: '0px !important',
        },
        [`@media screen and (max-width: 900px)`]: {
            marginRight: '0px !important',
        },
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: 'var(--blue-hover) !important',
        },
    },
}))(Button);

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

export default function SocialProfile(){
    const [regiserWithEmail, setRegisterWithEmail] = useState(true);
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [dribbble, setDribbble] = useState('');
    const [behance, setBehance] = useState('');

    const [isGoogle, setGoogle] = useState(false);
    const [isFacebook, setFacebook] = useState(false);
    const [current, setCurrent] = useState(null);

    const [socialStatus, setSocialStatus] = useState(false);

    const [disconnectedOpen, setDisconnectedOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const [isHoverGoole, setIsHoverGoogle] = useState(false);
    const [isHoverFacebook, setIsHoverFacebook] = useState(false);

    const closeDisconnectedDlg = () => {
        setDisconnectedOpen(false);
    };

    const closeconfirmDlg = () => {
        setConfirmOpen(false);
    }

    const handleConfirm = () => {
        if(current === 'google')
            setGoogle(false);
        else{
            if(current === 'facebook')
                setFacebook(false);
        }
        setCurrent(null);
        setConfirmOpen(false);
    }

    const handleGoogle = (value) => {
        if(!value){
            setCurrent('google');
            setDisconnectedOpen(true);
        }
    }

    const handleFacebook = (value) => {
        if(!value){
            setCurrent('facebook');
            setDisconnectedOpen(true);
        }
    }

    const handleDisconnect = () => {
        setConfirmOpen(true);
        closeDisconnectedDlg();
    }

    const saveOption = async (val) => {
        const currentAuth = JSON.parse(localStorage.getItem('auth'));
        if(val === 'social'){
            const result = await upDateSocialProfile(
                currentAuth._id,
                twitter,
                instagram,
                dribbble,
                behance,
                isGoogle,
                isFacebook
            );
            const changeTxt = () => {
                setSocialStatus(false);
            }
            if(result.status === 'ok'){
                setSocialStatus(true);
                localStorage.setItem('auth', JSON.stringify(result.user));
            }else{
                setSocialStatus(false);
            }
            await setTimeout(changeTxt, 3000);
        }
    }

    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        setTwitter(auth.twitter);
        setInstagram(auth.instagram);
        setBehance(auth.behance);
        setDribbble(auth.dribbble);
        setGoogle(auth.isGoogle);
        setFacebook(auth.isFacebook);
    }, [])

    const handleGoogleSuccess = async(data) => {
        const res = await signUpWithGoogle(data.profileObj.email)
        setGoogle(true);
    }

    const handleGoogleFailure = (err) => {
        console.log(err);
    }

    
    const responseFacebook = async(response) => {
        const res = await signUpWithFacebook(response);
        setFacebook(true);
    }

    return (
        <Styles>
            <div className="social-profile-container">
                <div className="social-body">
                    <CustomedInput 
                        inputValue={twitter}
                        inputHandler={setTwitter}
                        placeholderName="Twitter"
                    />
                    <CustomedInput 
                        inputValue={instagram}
                        inputHandler={setInstagram}
                        placeholderName="Instagram"
                    />
                    <CustomedInput 
                        inputValue={dribbble}
                        inputHandler={setDribbble}
                        placeholderName="Dribbble"
                    />
                    <CustomedInput 
                        inputValue={behance}
                        inputHandler={setBehance}
                        placeholderName="Behance"
                    />
                    <div className="social-login">
                        {isGoogle === false?
                            <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
                                buttonText="Login"
                                onSuccess={handleGoogleSuccess}
                                // uxMode={"redirect"}
                                onFailure={handleGoogleFailure}
                                cookiePolicy={"single_host_origin"}
                                render={(renderProps) => (
                                    <IconButton 
                                        onClick={renderProps.onClick}
                                        onMouseEnter={() => setIsHoverGoogle(true)}
                                        onMouseLeave={() => setIsHoverGoogle(false)}
                                    >
                                        {isHoverGoole?
                                            <GoogleWhiteIcon
                                                className="icon"
                                            />:
                                            <GoogleIcon
                                                className="icon"
                                            />
                                        }
                                        <span>Google</span>
                                    </IconButton>
                                )}
                            />:
                            <TextButton
                                onClick={() => handleGoogle(false)}
                            >
                                Google Connected
                            </TextButton>
                        }
                        {isFacebook === false?
                            <FacebookLogin
                                appId={process.env.REACT_APP_FACEBOOK_APIKEY}
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                                render={(renderProps) => (
                                    <IconButton 
                                        className="ml-20" 
                                        onClick={renderProps.onClick}
                                        onMouseEnter={() => setIsHoverFacebook(true)}
                                        onMouseLeave={() => setIsHoverFacebook(false)}
                                    >
                                        {isHoverFacebook?
                                            <FacebookWhiteIcon
                                                className="icon"
                                            />:
                                            <FacebookIcon
                                                className="icon"
                                            />
                                        }
                                        <span>Facebook</span>
                                    </IconButton>
                                )}
                            />:
                            <TextButton
                                className='ml-20'
                                onClick={() => handleFacebook(false)}
                            >
                                Facebook Connected
                            </TextButton>
                        }
                    </div>
                </div>
                <div className='social-footer'>
                    <CustomedTextButton 
                        text={"Save Changes"}
                        whichOne="social"
                        saveOption={saveOption}
                    />
                </div>
            </div>
            <div className="alert">
                { socialStatus && <ProfileSuccess />}
            </div>
            <Dialog
                open={disconnectedOpen} 
                onClose={closeDisconnectedDlg}
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
                <ViewCollectionDlgStyle>
                    <div className='dialog-container'>
                        <div className="content">
                            <div className={regiserWithEmail?"header":"second-header"}>
                                {`Disconnect {Google/Facebook}`}
                            </div>
                            <div className="body">
                                <div className="des-txt">
                                    {regiserWithEmail?`Are you sure you want to disconnect {Google/Facebook} from your account? You can reconnect at any time in the future.`:
                                        `You are using {Google/FB} account to log in to the site, if you disconnect {Google/FB} you will lose your account. So before disconnecting, please set up your email and password first. `
                                    }
                                </div>
                                <DisconnectIcon className={regiserWithEmail?"picture":"picture pt-28"}/>
                            </div>
                            <div className="footer">
                                <DlgButton onClick={() => handleDisconnect()}>
                                    {regiserWithEmail?`Disconnect`:`Set up email & password`}
                                </DlgButton>
                            </div>   
                            <CancelButton 
                                text={"Cancel"} 
                                onClick={closeDisconnectedDlg}
                            />
                        </div>
                    </div>
                </ViewCollectionDlgStyle>
            </Dialog>
            <Dialog
                open={confirmOpen} 
                onClose={closeconfirmDlg}
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
                <ConfirmDlgStyle>
                    <div className='dialog-container'>
                        <div className="content">
                            <div className="header">
                                Disconnected.
                            </div>
                            <div className="body">
                                <ConfirmIcon className="picture"/>
                            </div>
                            <div className="footer">
                                <DlgButton onClick={() => handleConfirm()}>
                                    OK
                                </DlgButton>
                            </div>   
                        </div>
                    </div>
                </ConfirmDlgStyle>
            </Dialog>
        </Styles>
    )
}