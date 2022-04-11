import { forwardRef, useCallback, useEffect, useState, useImperativeHandle } from 'react';
import { Styles } from "./notificationStyle";
import CustomedCheckBox from './checkBox';
import {
    upDateEmailNotification
} from '../../../../../api/admin/users';

const checkLs = [
    {label: 'Notify me when new app screens have been added  '},
    {label: 'Notify me when the app screens have been updated'},
    {label: 'Notify me when the new design job is added'},
]

const NotificationSetting = forwardRef((props, ref) => {
    const { setAccountInfo, accountInfo, setIsFulled } = props;
    const [checked, setChecked] = useState([false, false, false]);
    
    const checkedItem = (idx) => {
        let newChecked = [...checked];
        newChecked[idx] = !checked[idx];
        setChecked(newChecked);
    }
    
    useEffect(() => {
        setChecked(accountInfo.emailNotification);
    }, [accountInfo.emailNotification])

    const saveOption = useCallback(async () => {
        const result = await upDateEmailNotification(accountInfo._id, checked);
        setAccountInfo(result);
    }, [accountInfo._id, checked, setAccountInfo])

    useImperativeHandle(ref, () => ({ saveOption }), [saveOption])

    return (
        <Styles>
            <div className="notification-setting-container">
                <div className="notification-body">
                    <div className='notification-info'>Notification Settings</div>
                    {checkLs.map((item, idx) => 
                        <CustomedCheckBox 
                            label={item.label} 
                            idx={idx} 
                            isChecked={checked[idx]} 
                            key={idx} 
                            checkedItem={checkedItem}
                        />)}
                </div>
            </div>
        </Styles>
    )
})

export default NotificationSetting;