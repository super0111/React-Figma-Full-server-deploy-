import { forwardRef, useEffect, useState, useImperativeHandle, useCallback } from 'react';
import { Styles } from "./socialStyle";
import CustomedInput from '../input';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login-typed";

import { ReactComponent as GoogleIcon } from '../../../../../assets/img/admin/google.svg';
import { ReactComponent as FacebookIcon } from '../../../../../assets/img/admin/facebook.svg';
import { ReactComponent as GoogleWhiteIcon } from '../../../../../assets/img/google_white.svg';
import { ReactComponent as FacebookWhiteIcon } from '../../../../../assets/img/facebook_white.svg';
import {
    upDateSocialProfile
} from '../../../../../api/admin/users';

const SocialButton = withStyles((theme) => ({
    root: {
        marginTop: '24px !important',
        height: '54px !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        border: '1px solid #EBEAED !important',
        borderRadius: '4px !important',
        cursor: 'pointer !important',
        textAlign: 'center !important',
        width: '100% !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        color: `#5542F6 !important`,
        fontFamily: `var(--font-family-roboto-bold) !important`,
        fontSize: `var(--font-size-16) !important`,
        fontWeight: '700px !important',
        fontStyle: `normal !important`,
        backgroundColor: 'var(--white)',
        '&:hover': {
            color: `var(--white) !important`,
            backgroundColor: `#5542F6 !important`,
        },
    }
}))(Button);

const Social = forwardRef((props, ref) => {
    const { setAccountInfo, accountInfo, setIsFulled } = props;
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [dribbble, setDribbble] = useState('');
    const [behance, setBehance] = useState('');
    const [isGoogle, setIsGoogle] = useState(false);
    const [isFacebook, setIsFacebook] = useState(false);

    const [isHoverGoole, setIsHoverGoogle] = useState(false);
    const [isHoverFacebook, setIsHoverFacebook] = useState(false);

    const handleGoogleSuccess = async(data) => {
        setIsGoogle(true);
    }

    const handleGoogleFailure = (err) => {
        console.log(err);
        setIsGoogle(false);
    }

    const responseFacebook = async(response) => {
        setIsFacebook(true);
    }

    useEffect(() => {
        if(twitter && instagram && dribbble && behance){
            setIsFulled(true);
        }else{
            setIsFulled(false);
        }
    }, [behance, dribbble, instagram, setIsFulled, twitter])

    useEffect(() => {
        setTwitter(accountInfo?.twitter);
        setInstagram(accountInfo?.instagram);
        setDribbble(accountInfo?.dribbble);
        setBehance(accountInfo?.behance);
        setIsGoogle(accountInfo?.isGoogle);
        setIsFacebook(accountInfo?.isFacebook);
    }, [accountInfo?.behance, accountInfo?.dribbble, accountInfo?.instagram, accountInfo?.isFacebook, accountInfo?.isGoogle, accountInfo?.twitter])

    const saveOption = useCallback(async (val) => {
        const result = await upDateSocialProfile(
            accountInfo._id,
            twitter,
            instagram,
            dribbble,
            behance,
            isGoogle,
            isFacebook
        );
        setAccountInfo(result);
    }, [accountInfo._id, behance, dribbble, instagram, isFacebook, isGoogle, setAccountInfo, twitter])

    useImperativeHandle(ref, () => ({ saveOption }), [saveOption])

    return (
        <Styles>
            <div className="account-setting-container">
                <div className="account-body">
                    <div className='account-info'>Social Profile</div>
                    <CustomedInput
                        label='Twitter'
                        inputValue={twitter}
                        inputHandler={setTwitter}
                        placeholderName=""
                    />
                    <CustomedInput
                        label='Instagram'
                        inputValue={instagram}
                        inputHandler={setInstagram}
                        placeholderName=""
                    />
                    <CustomedInput
                        label='Dribbble'
                        inputValue={dribbble}
                        inputHandler={setDribbble}
                        placeholderName=""
                    />
                    <CustomedInput
                        label='Behance'
                        inputValue={behance}
                        inputHandler={setBehance}
                        placeholderName=""
                    />
                    {isGoogle?
                        <SocialButton 
                            onClick={() => setIsGoogle(false)}
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
                            <span>{isGoogle?'Google Connected':'Google'}</span>
                        </SocialButton>:
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
                            buttonText="Login"
                            onSuccess={handleGoogleSuccess}
                            // uxMode={"redirect"}
                            onFailure={handleGoogleFailure}
                            cookiePolicy={"single_host_origin"}
                            render={(renderProps) => (
                                <SocialButton 
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
                                </SocialButton>
                            )}
                        />
                    }
                    {isFacebook?
                        <SocialButton 
                            className="ml-16"
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
                            <span>{isFacebook?'Facebook Connected':'Facebook'}</span>
                        </SocialButton>:
                        <FacebookLogin
                            appId={process.env.REACT_APP_FACEBOOK_APIKEY}
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            render={(renderProps) => (
                                <SocialButton 
                                    className="ml-16"
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
                                </SocialButton>
                            )}
                        />
                    }
                </div>
            </div>
        </Styles>
    )
})

export default Social;