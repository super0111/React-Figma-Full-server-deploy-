import React, { useCallback, useEffect, useRef, useState } from 'react';
import { accountBar, editAccountBar } from '../../../../assets/config';
import { Styles, ForgotStyle } from './style';
import { ReactComponent as RightArrowIcon } from '../../../../assets/img/admin/right_arrow.svg';
import { ReactComponent as SuspendIcon } from '../../../../assets/img/admin/suspend.svg';
import { useNavigate, useParams } from 'react-router-dom';
import Profile from './profile';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import AccountSetting from './accountsetting';
import Password from './password';
import Social from './social';
import NotificationSetting from './notification';
import { getUserInfoById } from '../../../../api/account';
import { suspendById, unSuspendById } from '../../../../api/admin/users';
import Dialog from '@mui/material/Dialog';
import CancelButton from '../../../auth/components/cancelButton';

const ColorButton = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        border: '1px solid #EBEAED !important',
        color: `var(--second) !important`,
        fontFamily: `var(--font-family-manrope) !important`,
        fontSize: `var(--font-size-14) !important`,
        fontWeight: '600px !important',
        fontStyle: 'normal !important',
        height: '48px !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        borderRadius: '4px !important',
        cursor: 'pointer !important',
        '&:hover': {
            opacity: '.7 !important',
            color: `var(--white) !important`,
            backgroundColor: `var(--second) !important`
        },
    },
}))(Button);


const CreateButton = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        border: '1px solid #EBEAED !important',
        color: `var(--white) !important`,
        fontFamily: `var(--font-family-manrope) !important`,
        fontSize: `var(--font-size-14) !important`,
        fontWeight: '600px !important',
        fontStyle: 'normal !important',
        height: '48px !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        borderRadius: '4px !important',
        cursor: 'pointer !important',
        width: '138px !important',
        backgroundColor: 'var(--ocean-blue-pearl)',
        '&:hover': {
            opacity: '.7 !important',
            color: `var(--white) !important`,
            backgroundColor: `var(--purple) !important`
        },
    },
}))(Button);


const SuspendButton = withStyles((theme) => ({
    root: {
        padding: 0,
        marginLeft: 'auto',
        color: `var(--white) !important`,
        background: 'rgba(252, 52, 0, 0.1)',
        borderRadius: 4,
        cursor: 'pointer !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        height: '48px !important',
        width: '163px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: `var(--warnig) !important`,
        },
        '& .txt':{
            color: '#FC3400',
            marginLeft: 10,
        }
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
        border: '1px solid #6A00DA',
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: `var(--black-hover) !important`,
        }
    },
}))(Button);

export default function EditUserAccount(){
    const navigate = useNavigate();
    const [currentIdx, setCurrentIdx] = useState(0);
    const { id } = useParams();
    const [accountInfo, setAccountInfo] = useState({});
    const [isFulled, setIsFulled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const refProfile = useRef();
    const refAccountSetting = useRef();
    const refPassword = useRef();
    const refSocial = useRef();
    const refNotification = useRef();

    const [forgotOpen, setForgotOpen] = useState(false);
    const closeForgotDlg = () => {
        setForgotOpen(false);
    };

    const handleClick = (idx) => {
        setCurrentIdx(idx);
    }

    const next = () => {
        if(currentIdx < accountBar.length - 1)
        {
            setCurrentIdx(currentIdx + 1);
            setIsFulled(false);
        }
    }

    const saveAccount = async() => {
        if(currentIdx === 0){
            refProfile.current.saveOption();
            next();
        }else{
            if(currentIdx === 1){
                refAccountSetting.current.saveOption();
                next();
            }else{
                if(currentIdx === 2){
                    refPassword.current.saveOption();
                }else{
                    if(currentIdx === 3){
                        refSocial.current.saveOption();
                        next();
                    }else{
                        if(currentIdx === 4){
                            refNotification.current.saveOption();
                            navigate('/admin/users/');
                        }
                    }
                }
            }
        }
    }

    const getInitialData = useCallback(async() => {
        const res = await getUserInfoById(id);
        setAccountInfo(res.user[0]);
        setIsLoading(false);
    }, [id]);
    
    useEffect(() => {
        getInitialData();
    }, [getInitialData])

    const handleSuspend = async() => {
        if(accountInfo.isActive){
            const res = await suspendById(accountInfo._id);
            setAccountInfo(res);
        }else{
            const res = await unSuspendById(accountInfo._id);
            setAccountInfo(res);
        }
    }

    const handleConfirmDlg = () => {
        setForgotOpen(false);
        handleSuspend();
    }

    return (
        <Styles>
            <div className='account-container'>
                <div style={{display: 'flex', alignItems: 'center', width: '100%', borderBottom: '1px solid #EBEAED'}}>
                    <div className='account-header'>
                        <div className='first-line'>
                            <span style={{color: '#B6B4BA', cursor: 'pointer'}} onClick={() => navigate('/admin/users/')}>User</span><span style={{color: '#B6B4BA'}}>{` / ${accountInfo.userName}`} </span>
                            <span>/ Details</span>
                        </div>
                        <div className='second-line'>
                            {accountInfo.userName}
                        </div>
                    </div>
                    <SuspendButton onClick={() => setForgotOpen(true)}>
                        <SuspendIcon />
                        <span className='txt'>{accountInfo.isActive?'Suspend':'UnSuspend'}</span>
                    </SuspendButton>
                </div>
                <div className='account-body'>
                    <div className='left-panel'>
                        {!isLoading && 
                            <React.Fragment>
                                {currentIdx === 0 && 
                                    <Profile
                                        ref={refProfile}
                                        accountInfo={accountInfo}
                                        setAccountInfo={setAccountInfo}
                                        setIsFulled={setIsFulled}
                                    />
                                }
                                {currentIdx === 1 && 
                                    <AccountSetting 
                                        ref={refAccountSetting}
                                        accountInfo={accountInfo}
                                        setAccountInfo={setAccountInfo}
                                        setIsFulled={setIsFulled}
                                    />
                                }
                                {currentIdx === 2 && 
                                    <Password 
                                        ref={refPassword}
                                        accountInfo={accountInfo}
                                        setAccountInfo={setAccountInfo}
                                        setIsFulled={setIsFulled}
                                        next={next}
                                    />}
                                {currentIdx === 3 && 
                                    <Social 
                                        ref={refSocial}
                                        accountInfo={accountInfo}
                                        setAccountInfo={setAccountInfo}
                                        setIsFulled={setIsFulled}
                                    />
                                }
                                {currentIdx === 4 && 
                                    <NotificationSetting 
                                        ref={refNotification}
                                        accountInfo={accountInfo}
                                        setAccountInfo={setAccountInfo}
                                        setIsFulled={setIsFulled}
                                    />
                                }
                            </React.Fragment>
                        }
                        <div className='left-panel-footer'>
                            <ColorButton onClick={() => navigate('/admin/users/')}>
                                Discard
                            </ColorButton>
                            {!isFulled && currentIdx !== 4?
                                <ColorButton 
                                    className='ml-24'
                                    onClick={() => next()}
                                >
                                    Next
                                </ColorButton>:
                                <CreateButton 
                                    className='ml-24'
                                    onClick={() => saveAccount()}
                                >
                                    Save
                                </CreateButton>
                            }
                        </div>
                    </div>
                    <div className='right-panel'>
                        <div className='right-panel-header'>
                            Account
                        </div>
                        <div className='form-group'>
                            {editAccountBar.map((item, idx) => {
                                return (
                                    <div 
                                        className='account-btn' 
                                        key={idx}
                                        onClick={() => handleClick(idx)}
                                    >
                                        {currentIdx !== idx?React.createElement(item.icon, { width: 40, height: 40 }):React.createElement(item.focusIcon, { width: 40, height: 40 })}
                                        <div className={currentIdx !== idx?'label':'label active'}>{item.label}</div>
                                        <RightArrowIcon className='icon'/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
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
                        
                    },
                }}
            >
                <ForgotStyle>
                    <div className='dialog-container'>
                        <div className="content">
                            <div className="header">
                                {accountInfo.isActive?'Suspend User':"Unsuspend User"}
                            </div>
                            <div className="body">
                                <div className="des-txt">
                                    {accountInfo.isActive?`Are you sure to suspend ${accountInfo.userName}? If confirmed, this user won’t be able to access the account. If the user won’t unsuspend in 45 days, the account will be deleted automatically.`:'Are you sure to Unsuspend {Name of the user}? If confirmed, this user will be able to access the account.'}
                                </div>
                            </div>
                            <div className="footer">
                                <DlgButton onClick={handleConfirmDlg}>
                                    Confirm
                                </DlgButton>
                            </div>
                            <CancelButton 
                                text={"Cancel"} 
                                onClick={closeForgotDlg}
                            />
                        </div>
                    </div>
                </ForgotStyle>
            </Dialog>
        </Styles>
    )
}