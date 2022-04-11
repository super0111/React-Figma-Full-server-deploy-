import { forwardRef, useCallback, useEffect, useState, useImperativeHandle } from 'react';
import { Styles } from "./accountSettingStyle";
import CustomedInput from '../input';
import {
    upDateAccountSetting
} from '../../../../../api/admin/users';

const AccountSetting = forwardRef((props, ref) => {
    const { setAccountInfo, accountInfo, setIsFulled } = props;

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    
    useEffect(() => {
        setUserName(accountInfo?.userName);
        setEmail(accountInfo?.email);
    }, [accountInfo?.email, accountInfo?.userName])

    useEffect(() => {
        if(userName && email){
            setIsFulled(true);
        }else{
            setIsFulled(false);
        }
    }, [email, setIsFulled, userName])

    const saveOption = useCallback(async () => {
        const result = await upDateAccountSetting(accountInfo._id, userName, email);
        setAccountInfo(result)
    }, [accountInfo._id, email, setAccountInfo, userName])

    useImperativeHandle(ref, () => ({ saveOption }), [saveOption])

    return (
        <Styles>
            <div className="account-setting-container">
                <div className="account-body">
                    <div className='account-info'>Account Setting</div>
                    <CustomedInput
                        label='Username*'
                        inputValue={userName}
                        inputHandler={setUserName}
                        placeholderName="Your location"
                    />
                    <CustomedInput
                        label='Login Email*'
                        inputValue={email}
                        inputHandler={setEmail}
                        placeholderName="Your first name"
                    />
                </div>
            </div>
        </Styles>
    )
})

export default AccountSetting;