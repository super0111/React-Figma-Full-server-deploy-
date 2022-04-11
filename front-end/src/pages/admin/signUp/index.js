import { Styles } from "./style";
import CustomedInput from './input';
import PasswordInput from './passwordInput';
import { useState } from "react";
import CustomedTextButton from './customedBtn';
import { useNavigate } from "react-router-dom";
import {adminSignUp} from '../../../api/admin/overview';

export default function AdminSignUp () {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState();

    const signIn = () => {
        navigate('/admin/signin');
    }

    const signUp = async() => {
        const res = await adminSignUp(userEmail, firstName, lastName, password);
        if(res.status === 200){
            localStorage.setItem('adminAuth', JSON.stringify(res));
            navigate('/admin/overview');
        }
    }

    return (
        <Styles>
            <div className="sign-in-container">
                {/* <LogoIcon className='logo'/> */}
                <img src='/img/admin_logo.svg' alt="" />
                <div className="panel">
                    <div className="header">
                        <div className="type">
                            Create an account
                        </div>
                        <div className="account">
                            <span className="user">Already have an account?</span>
                            <span 
                                className="create"
                                onClick={signIn}
                            >Sign in</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <CustomedInput 
                            inputValue={userEmail}
                            inputHandler={setUserEmail}
                            placeholderName="Email address"
                            type='email'
                        />
                        <div className="name-group">
                            <CustomedInput 
                                inputValue={firstName}
                                inputHandler={setFirstName}
                                placeholderName="First name"
                                type='text'
                            />
                            <div style={{width: 30,height: 30}}></div>
                            <CustomedInput 
                                inputValue={lastName}
                                inputHandler={setLastName}
                                placeholderName="Last name"
                                type='text'
                            />
                        </div>
                        <PasswordInput 
                            inputValue={password}
                            inputHandler={setPassword}
                            placeholderName="Password"
                        />
                        <div className="form-footer">
                            <CustomedTextButton 
                                text={"Sign Up"}
                                signIn={signUp}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    )
}