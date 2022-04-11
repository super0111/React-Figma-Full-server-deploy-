import { useEffect, useRef, useState } from 'react';
import { Styles } from "./accountSettingStyle";
import CustomedInput from '../input';

export default function AccountSetting({setAccountSetting, accountSetting}){

    const [userName, setUserName] = useState(accountSetting?.userName);
    const [email, setEmail] = useState(accountSetting?.email);
    
    useEffect(() => {
        setAccountSetting({ userName, email });
    }, [email, setAccountSetting, userName])
    // useEffect(() => {
    //     if(userName && email)
    //         setIsFulled(true);
    //     else
    //         setIsFulled(false);
    // }, [email, setIsFulled, userName])
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
                        type='email'
                        inputValue={email}
                        inputHandler={setEmail}
                        placeholderName="Your first name"
                    />
                </div>
            </div>
        </Styles>
    )
}