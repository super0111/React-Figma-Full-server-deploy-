import { useState, useCallback, useEffect, useContext } from 'react';
import { Styles } from "./emailNotificationStyle";
import CustomedTextButton from '../customedBtn';
import CustomedCheckBox from './checkBox';
import {
    upDateEmailNotification,
    getUserInfoById,
} from '../../../api/account';
import { ReactComponent as ProfileSuccess } from '../../../assets/img/account/profile_success.svg';

const checkLs = [
    {label: 'Notify me when new app screens have been added  '},
    {label: 'Notify me when the app screens have been updated'},
    {label: 'Notify me when the new design job is added'},
]

export default function EmailNotification(){
    const [checked, setChecked] = useState([false, false, false]);
    const [profileSuccess, setProfileSuccess] = useState(false);

    const checkedItem = (idx) => {
        let newChecked = [...checked];
        newChecked[idx] = !checked[idx];
        setChecked(newChecked);
    }

    const saveOption = async (val) => {
        const currentAuth = JSON.parse(localStorage.getItem('auth'));
        if(val === 'accountsetting'){
            const result = await upDateEmailNotification(currentAuth._id, checked);
            const changeTxt = () => {
                setProfileSuccess(false);
            }
            if(result.status === 'ok'){
                setProfileSuccess(true);
                localStorage.setItem('auth', JSON.stringify(result.user));
            }else{
                setProfileSuccess(false);
            }
            await setTimeout(changeTxt, 3000);
        }
    }

    const getInitialData = useCallback(async() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        const res = await getUserInfoById(auth._id);
        const user = res.user[0];
        setChecked(user.emailNotification);
      }, [])
    
    useEffect(() => {
        getInitialData();
    }, [getInitialData])

    return (
        <Styles>
            <div className="email-notification-container">
                <div className="email-notification-header">
                    Alerts
                </div>
                <div className="email-notification-body">
                    {checkLs.map((item, idx) => <CustomedCheckBox label={item.label} idx={idx} isChecked={checked[idx]} key={idx} checkedItem={checkedItem}/>)}
                </div>
                <div className='email-notification-footer'>
                    <CustomedTextButton 
                        text={"Save Changes"}
                        whichOne="accountsetting"
                        saveOption={saveOption}
                    />
                </div>
            </div>
            <div className="alert">
                {profileSuccess && <ProfileSuccess />}
            </div>
        </Styles>
    )
}