import { useEffect, useState, useContext } from "react";
import PasswordInput from "../passwordInput";
import { Styles } from "./passwordStyle";
import CustomedTextButton from '../customedBtn';
import { upDatePassword } from '../../../api/account';
import { ReactComponent as PasswordNoMatch } from '../../../assets/img/account/password_no_match.svg';
import { ReactComponent as PasswordInCorrect } from '../../../assets/img/account/password_incorrect.svg';
import { ReactComponent as PassowrdSuccess } from '../../../assets/img/account/password_success.svg';
import { useParams } from "react-router-dom";
import { resetPassword } from '../../../api/auth';
import { useNavigate } from "react-router-dom";

export default function Password(){
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordStatus, setPasswordStatus] = useState(-1);
    const [isAllowed, setAllowed] = useState(false);
    const { id, password } = useParams();

    const [isReset, setIsReset] = useState(false);

    const saveOption = async (val) => {
        const currentAuth = JSON.parse(localStorage.getItem('auth'));
        if(val === 'password'){
            const result = await upDatePassword(currentAuth._id, oldPassword, newPassword);
            const changeTxt = () => {
                setPasswordStatus(-1);
            }
            if(result.status === 'ok'){
                setPasswordStatus(2);
                localStorage.setItem('auth', JSON.stringify(result.user));
            }else{
                if(result.error === 'password incorrect')
                    setPasswordStatus(0);
                else
                    setPasswordStatus(1);
            }
            await setTimeout(changeTxt, 3000);
        }
    }

    const handleChange = (value) => {
        setNewPassword(value);
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

    useEffect(async() => {
        if(id){
            setIsReset(true);
            const res = await resetPassword(id, password);
            console.log(res);
            if(res.status === 'ok'){
                localStorage.setItem('auth', JSON.stringify(res.userInfo));
                navigate('/');
            }else{
                navigate('/signup');
            }
        }
    }, [id])

    return (
        <Styles>
            <div className="password-container">
                <div className="password-body">
                    <PasswordInput 
                        inputValue={oldPassword}
                        inputHandler={setOldPassword}
                        placeholderName="Current Password "
                    />
                    <PasswordInput 
                        inputValue={newPassword}
                        inputHandler={handleChange}
                        placeholderName="New Password"
                    />
                    <div className={isAllowed?"password-alarm": "password-alarm warning"}>
                        Minimum 8 characters including one number and one alphabet
                    </div>
                </div>
                <div className="password-footer">
                    <CustomedTextButton 
                        text={"Save Changes"}
                        whichOne="password"
                        saveOption={saveOption}
                    />
                </div>
            </div>
            <div className="alert">
                { passwordStatus === 0 && <PasswordNoMatch />}
                { passwordStatus === 1 && <PasswordInCorrect />}
                { passwordStatus === 2 && <PassowrdSuccess />}
            </div>
        </Styles>
    )
}