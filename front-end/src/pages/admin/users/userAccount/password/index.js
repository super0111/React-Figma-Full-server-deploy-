import { useEffect, useRef, useState } from 'react';
import { Styles } from "./passwordStyle";
import CustomedInput from '../input';

export default function Password({oldPassword, newPassword, setOldPassword, setNewPassword}){

    const [isAllowed, setAllowed] = useState(false);
    
    const handleChange = (value) => {
        setOldPassword(value);
        const ck =value;
       
        function isAlphaOrParen(str) {
            return /[a-zA-Z]/.test(str);
        }
        
        function containsNumber(str) {
            return /\d/.test(str);
        }
        if(isAlphaOrParen(value) && containsNumber(ck) && ck.length >= 8) setAllowed(true);
        else setAllowed(false);
    }

    // useEffect(() => {
    //     if(isAllowed && (newPassword === oldPassword))
    //         setIsFulled(true);
    //     else
    //         setIsFulled(false);
    // }, [isAllowed, newPassword, oldPassword, setIsFulled])

    return (
        <Styles>
            <div className="password-container">
                <div className="password-body">
                    <div className='password-info'>Password</div>
                    <CustomedInput
                        label='Create Password*'
                        inputValue={oldPassword}
                        inputHandler={handleChange}
                        placeholderName=""
                    />
                    <div className={isAllowed?"password-alarm": "password-alarm warning"}>
                        Minimum 8 characters including one number and one alphabet
                    </div>
                    <CustomedInput
                        label='Enter new password again*'
                        inputValue={newPassword}
                        inputHandler={setNewPassword}
                        placeholderName=""
                    />
                </div>
            </div>
        </Styles>
    )
}